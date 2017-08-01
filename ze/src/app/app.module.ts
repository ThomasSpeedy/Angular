import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WorktimeModule } from './worktime/worktime.module';
import { CustomerModule } from './customer/customer.module';
import { routingComponents, appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    appRouting,
    WorktimeModule,
    CustomerModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-de' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
