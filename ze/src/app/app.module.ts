import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { WorktimeModule } from '../app/worktime/worktime.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    WorktimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
