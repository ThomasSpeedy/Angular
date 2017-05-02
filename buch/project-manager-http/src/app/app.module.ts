import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TaskService} from './services/task-service/task.service';
import {AppComponent} from './app.component';
import {Title, BrowserModule} from '@angular/platform-browser';
import {LoginService} from './services/login-service/login-service';
import {routingComponents, routingProviders, appRouting} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';
import {ShowErrorComponent} from './show-error/show-error.component';
import {APPLICATION_VALIDATORS} from './models/app-validators';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    appRouting],
  entryComponents: [AppComponent],
  providers: [LoginService,
    Title,
    TaskService,
    routingProviders
  ],
  declarations: [AppComponent,
  routingComponents,
  ShowErrorComponent,
  APPLICATION_VALIDATORS],
  bootstrap: [AppComponent]
})
export class AppModule {
}