import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { DropdownHelperDirective } from './dropdown-helper/dropdown-helper.directive';

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
    AlertComponent]
})
export class SharedModule { }
