import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Task} from '../../shared/models/model-interfaces';
import {TaskService} from '../../shared/task-service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  selectedTaskId: string | number = null;

  tasks$: Observable<Task[]>;

  searchTerm = new FormControl();

  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {

    this.tasks$ = this.taskService.tasks$;

    const paramsStream = this.route.queryParams
      .map(params => decodeURI(params['query'] || ''))
      .do(query => this.searchTerm.setValue(query));

    const searchTermStream = this.searchTerm.valueChanges
      .debounceTime(400)
      .do(query => this.adjustBrowserUrl(query));

    Observable.merge(paramsStream, searchTermStream)
      .distinctUntilChanged()
      .switchMap(query =>  this.taskService.findTasks(query))
      .subscribe();
  }


  deleteTask(task) {
    this.taskService.deleteTask(task).subscribe();
  }

  selectTask(taskId: string | number) {
    this.selectedTaskId = taskId;
    this.router.navigate([ {outlets: {'right': [ 'overview' , taskId]}}], {relativeTo: this.route});
  }

  findTasks(queryString: string) {
   // jetzt über type-ahead gelöst
   // this.tasks$ = this.taskService.findTasks(queryString);
   // this.adjustBrowserUrl(queryString);
  }

  adjustBrowserUrl(queryString = '') {
    const absoluteUrl = this.location.path().split('?')[0];
    const queryPart = queryString !== '' ? `query=${queryString}` : '';

    this.location.replaceState(absoluteUrl, queryPart);
  }

}
