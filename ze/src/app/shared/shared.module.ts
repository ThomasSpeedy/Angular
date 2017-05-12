import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerDirective } from './datepicker.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatepickerDirective]
})
export class SharedModule { }
