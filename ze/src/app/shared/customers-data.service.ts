import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Customer } from './customer';
import testcustomers from './testcustomers';

@Injectable()
export class CustomersDataService {

  customers: Customer[];

  constructor(http: Http) {
    this.customers = testcustomers;
  }

  getAll(): Customer[] {
    return this.customers;
  }

}
