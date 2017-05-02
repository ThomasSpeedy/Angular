import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TaskService} from './services/task-service/task.service';
import {LoginService} from './services/login-service/login-service';
import {ShowErrorComponent} from './show-error/show-error.component';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from './services/user.service';
import {QuestionsService} from './services/questions.service';
import {TABS_DIRECTIVES} from './tabs/tabs.component';
import {FirstFormTwoWayComponent} from './first-form-two-way/first-form-two-way.component';
import {FirstFormOneWayComponent} from './first-form-one-way/first-form-one-way.component';
import {GeneratedFormComponent} from './generated-form/generated-form.component';
import {FirstFormComponent} from './first-form/first-form.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ModelDrivenFormComponent} from './model-driven-form/model-driven-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from './tabs/tabs.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, TabsModule],
  providers: [
    TaskService,
    UserService,
    QuestionsService
  ],
  declarations: [
    APPLICATION_VALIDATORS,
    AppComponent,
    ShowErrorComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent,
    GeneratedFormComponent ,
    FirstFormComponent,
    FirstFormOneWayComponent,
    FirstFormTwoWayComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}