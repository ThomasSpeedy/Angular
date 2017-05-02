import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ShowErrorComponent} from './show-error/show-error.component';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {TaskStore} from './stores/task.store';
import {TaskService} from './task-service/task.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowErrorComponent, APPLICATION_VALIDATORS],
  exports: [CommonModule, HttpModule, FormsModule,
            ShowErrorComponent, APPLICATION_VALIDATORS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TaskService, TaskStore]
    };
  }
}
