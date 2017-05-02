import {Component} from '@angular/core';
import {FormGroup, FormArray, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Task, createInitialTask} from '../models/model-interfaces';
import * as model from '../models/model-interfaces';
import {ifNotBacklogThanAssignee,  emailValidator, UserExistsValidatorDirective} from '../models/app-validators';
import {TaskService} from '../services/task-service/task.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'pjm-model-driven-form',
  templateUrl: './model-driven-form.component.html'
})
export class ModelDrivenFormComponent {

  model = model;
  task: Task = createInitialTask();

  taskForm: FormGroup;
  tagsArray: FormArray;

  constructor(private taskService: TaskService,
              private userService: UserService,
              fb: FormBuilder) {
    this.taskForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.maxLength(2000)],
      favorite: [false],
      state: ['BACKLOG'],
      tags: fb.array([
        this.createTagControl()
      ]),
      assignee: fb.group({
        name: ['', null, this.userExistsValidatorReused],
        email: ['', emailValidator],
      })
    }, {validator: ifNotBacklogThanAssignee});

    this.taskForm.valueChanges.subscribe((value) => {
      Object.assign(this.task, value);
    });

    this.tagsArray = <FormArray>this.taskForm.controls['tags'];

    /*
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      favorite: new FormControl(false),
      state: new FormControl('BACKLOG'),
      tags: new FormArray([
        new FormGroup({
          label: new FormControl('')
        })
      ]),
      assignee: new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
      }),
    });*/
  }

  private createTagControl(): FormGroup {
    return new FormGroup({
      label: new FormControl('', Validators.minLength(3))
    });
  }

  addTag() {
    this.tagsArray.push(this.createTagControl());
    return false;
  }

  removeTag(i: number) {
    this.tagsArray.removeAt(i);
    return false;
  }

  saveTask(value: any) {
    console.log(value);
    Object.assign(this.task, value);
    this.taskService.saveTask(this.task);
  }

  loadTask(id: number) {
    const task = this.taskService.getTask(id);
    this.adjustTagsArray(task.tags);
    this.taskForm.patchValue(task);
    this.task = task;
    return false;
  }

  private adjustTagsArray(tags: any[]) {
    const tagCount = tags ? tags.length : 0;
    while (tagCount > this.tagsArray.controls.length) {
      this.addTag();
    }
    while (tagCount <  this.tagsArray.controls.length) {
      this.removeTag(0);
    }
  }

  userExistsValidator = (control) => {
    return this.userService.checkUserExists(control.value)
      .map(checkResult => {
        return (checkResult === false) ? {userNotFound: true} : null;
      });
  }

  userExistsValidatorReused = (control) => {
    const validator = new UserExistsValidatorDirective(this.userService);
    return validator.validate(control);
  };

}



