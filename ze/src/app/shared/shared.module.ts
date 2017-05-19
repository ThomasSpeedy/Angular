import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersDataService } from './customers-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [CustomersDataService]
})
export class SharedModule { }
