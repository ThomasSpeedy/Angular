import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CustomerListComponent, CustomerFormComponent, CustomerOverviewComponent],
  exports: [CustomerOverviewComponent, CustomerFormComponent]
})
export class CustomerModule { }
