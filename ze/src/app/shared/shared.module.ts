import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { DropdownHelperDirective } from './dropdown-helper/dropdown-helper.directive';
import { CustomersDataService } from './customers-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownHelperDirective,
    AlertComponent
  ],
  exports: [
    DropdownHelperDirective,
    AlertComponent
  ],
  providers: [
    CustomersDataService, 
    AlertComponent]
})
export class SharedModule { }
