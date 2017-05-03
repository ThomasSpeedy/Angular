import {Task} from '../../models/model-interfaces'
import {Injectable} from '@angular/core';
import {
  Http, Headers, RequestOptions, RequestMethod, URLSearchParams, RequestOptionsArgs,
  Response
} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const BASE_URL = 'http://localhost:3000/api/tasks/';
declare let $;
@Injectable()
export class TaskService {

  constructor(private http: Http) {
  }

  loadAllTasks(): Observable<Task[]> {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  checkTasks(): Observable<Headers> {
    return this.http.head(BASE_URL)
      .map(res => res.headers);
  }


  getTask(id: number | string): Observable<Task> {
    return this.http.get(BASE_URL + id)
      .map(res => res.json());
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post(BASE_URL, task)
      .map(res => res.json());
  }

  createTaskLong(task: Task): Observable<Task> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(BASE_URL,
                          JSON.stringify(task),
                          {headers: headers})
      .map(res => res.json());
  }


  updateTask(task: Task) {
    return this.http.put(BASE_URL + task.id, task)
      .map(res => res.json());
  }

  deleteTask(task: Task): Observable<Response> {
    return this.http.delete(BASE_URL + task.id);
  }

  saveTask(task: Task) {
    const options = {
      body: task,
      method: task.id ? RequestMethod.Put :RequestMethod.Post
    };

    return this.http.request(BASE_URL + (task.id || ''), options)
      .map(res => res.json());
  }

  saveTaskAlternative(task: Task) {
    const requestOptions = new RequestOptions();
    if (task.id) {
      requestOptions.method = 'Put';
    }
    return this.http.post(BASE_URL + (task.id || ''), task, requestOptions)
      .map(res => res.json());
  }

  findTasksByTitle(title: string): Observable<Task[]> {
    let url = BASE_URL;
    if (title) {
      url += '?title=' + title;
    }
    return this.http.get(url)
      .map(res => res.json());
  }

  findTasks(query: string = '',
            sort: string = 'id',
            order: string = 'ASC'): Observable<Task[]> {
    const searchParams = new URLSearchParams();
    searchParams.append('q', query);
    searchParams.append('_sort', sort);
    searchParams.append('_order', order);
    return this.http.get(BASE_URL, {search: searchParams})
      .do(res => console.log(res.headers.toJSON()))
      .map(res => res.json());
  }

  updateState(id: number, state: string) {
    const body = {state: state};
    return this.http.patch(BASE_URL + id, body)
      .map(res => res.json());
  };
}
