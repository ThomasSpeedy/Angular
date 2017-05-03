import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {tasksRouting, tasksRoutingProviders, tasksRoutingComponents} from './tasks.routing';
import {SharedModule} from '../shared/shared-module';

@NgModule({
  imports: [ReactiveFormsModule, SharedModule, tasksRouting],
  providers: [ tasksRoutingProviders ],
  declarations: [ tasksRoutingComponents ],
})
export class TasksModule {
}