import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Customer } from '../shared/customer';
import mockCustomers from './mock-customers';

@Injectable()
export class CustomerService {

  customers: Customer[];

  constructor(http: Http) {
    this.customers = mockCustomers;
  }

  getAll(): Promise<Customer[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.customers), 2000);
    });
//    return Promise.resolve(this.customers);
  }

}
