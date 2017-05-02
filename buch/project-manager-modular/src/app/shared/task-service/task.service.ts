import {Injectable, Inject} from '@angular/core';
import {Http, URLSearchParams, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {LOAD, ADD, EDIT, REMOVE, TaskStore} from '../stores/index';
import {SOCKET_IO} from '../../app.tokens';
import {Task} from '../models/model-interfaces';

const BASE_URL = `http://localhost:3000/api/tasks/`;

const WEB_SOCKET_URL = 'http://localhost:3001';

@Injectable()
export class TaskService {

  socket: SocketIOClient.Socket;

  tasks$: Observable<Task[]>;

  constructor(private http: Http, private taskStore: TaskStore,
              @Inject(SOCKET_IO) socketIO) {

    this.tasks$ = taskStore.items$;
    this.socket = socketIO(WEB_SOCKET_URL);
    Observable.fromEvent(this.socket, 'task_saved')
      .subscribe((action) => {
        this.taskStore.dispatch(action);
      });
  }


  findTasks(query = '', sort = 'id', order = 'ASC') {
    const searchParams = new URLSearchParams();
    searchParams.append('q', query);
    searchParams.append('_sort', sort);
    searchParams.append('_order', order);

    this.http.get(BASE_URL, {search: searchParams})
      .map(res => res.json())
      .do((tasks) => {
        this.taskStore.dispatch({type: LOAD, data: tasks});
      }).subscribe(_ => {});

    return this.tasks$;
  }

  getTask(id: number | string): Observable<Task> {
    return this.http.get(BASE_URL + id)
      .map(res => res.json());
  }

  tasksChanged = new BehaviorSubject({});

  saveTask(task: Task) {
    const options = new RequestOptions({
      body: task,
      method: task.id ? RequestMethod.Put : RequestMethod.Post
    });

    return this.http.request(BASE_URL + (task.id || ''), options)
      .map(res => res.json())
      .do(savedTask => {
        this.tasksChanged.next(savedTask);
        const actionType = task.id ? EDIT : ADD;
        const action = {type : actionType, data: savedTask};
        this.taskStore.dispatch(action);
        this.socket.emit('broadcast_task', action);
      });
  }
  deleteTask(task: Task) {
    return this.http.delete(BASE_URL + task.id)
      .do(response => {
        this.taskStore.dispatch({type: REMOVE, data: task});
      });
  }
}

