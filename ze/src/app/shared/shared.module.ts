import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownHelperDirective } from './dropdown-helper/dropdown-helper.directive';
import { CustomersDataService } from './customers-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownHelperDirective
  ],
  exports: [
    DropdownHelperDirective
  ],
  providers: [CustomersDataService]
})
export class SharedModule { }
