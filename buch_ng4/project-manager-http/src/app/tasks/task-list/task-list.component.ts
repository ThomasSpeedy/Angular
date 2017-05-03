import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import {FormControl} from '@angular/forms';
import {Task} from '../../models/model-interfaces';
import {TaskService} from '../../services/task-service/task.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptionsArgs} from '@angular/http';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  selectedTaskId: string | number = null;

  private $tasks: Observable<Task[]>;

  private tasks: Task[];

  private searchTerm = new FormControl();

  private error: string;

  private errorHandler = (error) => {
    console.log('Es ist ein Fehler aufgetreten', error);
    return Observable.of([]);
  }


  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private http: Http) {
  }

  ngOnInit() {
    this.taskService.checkTasks().subscribe((headers) => {
      console.log('Die Größe des Inhalts beträgt',
        headers.get('Content-Length'));
    });

    // 1.Version: Verwendung von http in der Komponente
/*
    this.http.get(`http://localhost:3000/api/tasks`)
      .map((response: Response) => response.json())
      .subscribe((tasks) => {
          this.tasks = tasks;
        },
        (error: Response) => {
          switch (error.status) {
            case 404:
              console.log('Der Endpunkt wurde nicht gefunden', error);
              break;
            case 500:
              console.log('Server-Fehler beim Laden der Aufgaben', error);
              break;
            default:
              console.log('Irgendetwas anderes ist schief gelaufen', error);
          }
        });


    this.taskService.loadAllTasks().subscribe((tasks) => {
        this.tasks = tasks;
      });

    this.$tasks = this.taskService.loadAllTasks();

*/

    this.route.queryParams.subscribe((params) => {
      const query = decodeURI(params['query'] || '');
      this.searchTerm.setValue(query);
      this.$tasks = this.taskService.findTasks(query).catch(this.errorHandler);
    });

  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(_ => {
      this.findTasks(this.searchTerm.value);
    })
  }

  selectTask(taskId: string | number) {
    this.selectedTaskId = taskId;
  }

  findTasks(queryString: string) {
    this.$tasks = this.taskService.findTasks(queryString);
    this.adjustBrowserUrl(queryString);
  }

  adjustBrowserUrl(queryString: string = '') {
    var absoluteUrl = this.location.path().split('?')[0];
    var queryPart = queryString !== '' ? `query=${queryString}` :'';
    this.location.replaceState(absoluteUrl, queryPart);
  }

}
