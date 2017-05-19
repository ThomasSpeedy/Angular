import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, CalendarModule, InputMaskModule, GrowlModule, PanelModule, DropdownModule } from 'primeng/primeng';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    InputTextModule, ButtonModule, CalendarModule, InputMaskModule, GrowlModule, PanelModule, DropdownModule
  ],
  declarations: [CustomerListComponent, CustomerFormComponent, CustomerOverviewComponent],
  exports: [CustomerOverviewComponent, CustomerFormComponent]
})
export class CustomerModule { }
