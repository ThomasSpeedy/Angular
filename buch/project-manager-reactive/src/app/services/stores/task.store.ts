import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Task} from '../../models/model-interfaces';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

export class TaskStore {
  private tasks: Task[] = [];
  items$ = new BehaviorSubject<Task[]>([]);

  dispatch(action) {
    console.log("dispatched")
    this.tasks = this._reduce(this.tasks, action);
    this.items$.next(this.tasks);
  }

  _reduce(tasks: Task[], action) {
    switch (action.type) {
      case LOAD:
        return [...action.data];
      case ADD:
        return [...tasks, action.data];
      case EDIT:
        return tasks.map(task => {
          const editedTask = action.data;
          if (task.id !== editedTask.id){
            return task;
          }
          return editedTask;
        });
      case REMOVE:
        return tasks.filter(task => task.id !== action.data.id);
      default:
        return tasks;
    }
  }
}