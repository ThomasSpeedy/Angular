import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule, CalendarModule, InputMaskModule, GrowlModule, PanelModule, DropdownModule } from 'primeng/primeng';

import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerOverviewComponent } from './customer/customer-overview/customer-overview.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
//import { WorktimeModule } from '../app/worktime/worktime.module';
//import { CustomerModule } from '../app/customer/customer.module';
import { routingComponents, appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, routingComponents,
    CustomerListComponent, CustomerFormComponent, CustomerOverviewComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, 
    HttpModule,
    InputTextModule, ButtonModule, CalendarModule, InputMaskModule, GrowlModule, PanelModule, DropdownModule,
    appRouting,
    SharedModule/*,
    WorktimeModule,
    CustomerModule*/
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-de'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
