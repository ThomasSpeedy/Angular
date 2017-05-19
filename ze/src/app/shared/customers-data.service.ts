import { Injectable } from '@angular/core';

import { Customer } from './customer';
import testcustomers from './testcustomers';

@Injectable()
export class CustomersDataService {

  customers: Customer[];

  constructor() {
    this.customers = testcustomers;
  }

  getAll(): Customer[] {
    return this.customers;
  }

}
