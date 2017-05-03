import {ViewChild, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';
import {Task, createInitialTask} from '../../shared/models/model-interfaces';
import {TaskService} from '../../shared/task-service/task.service';
import {Subscription} from 'rxjs/Subscription';
import * as model from '../../shared/models/model-interfaces';


@Component({
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  model = model;
  task: Task = createInitialTask();
  saved = false;

  @ViewChild(NgForm) form: NgForm;

  subscription: Subscription;

  constructor(
              private route: ActivatedRoute,
              private taskService: TaskService,
              private router: Router,
              private titleService: Title,
              private location: Location) {
  }

  ngOnInit() {
    this.subscription = this.route.params
      .map(params => params['id'])
      .filter(id => id != undefined)
      .flatMap(id => this.taskService.getTask(id))
      .subscribe(task => {
        this.task = task;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTag() {
    this.task.tags.push({label: ''});
    return false;
  }

  removeTag(i:number) {
    this.task.tags.splice(i, 1);
    return false;
  }

  saveTask() {
    this.taskService.saveTask(this.task).subscribe(task => {
      this.saved = true;
      const relativeUrl = this.router.url.includes('edit') ? '../..' : '..';
      this.router.navigate([relativeUrl], {relativeTo: this.route});
    });
  }

  cancel() {
    //this.location.back();

    const relativeUrl = this.router.url.includes('edit') ? '../..' : '..';
    this.router.navigate([relativeUrl], {relativeTo: this.route});

    return false;
  }

  canDeactivate() : boolean {
    if (this.saved || !this.form.dirty) {
      return true;
    }
    return window.confirm(`Ihr Formular besitzt ungespeicherte Änderungen, möchten Sie die Seite wirklich verlassen?`);
  }

}
