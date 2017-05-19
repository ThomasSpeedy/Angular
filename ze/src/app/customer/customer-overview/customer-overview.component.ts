import { Component, Inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { CustomersDataService } from '../../shared/customers-data.service';
import { Customer } from '../../shared/customer';

@Component({
  selector: 'ze-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  customers: Customer[];

  selectedCustomer: Customer;

 constructor(@Inject(CustomersDataService) customersDataService: CustomersDataService) {
    this.customers = customersDataService.getAll();
  }

  ngOnInit() {
  }

  customerSelected(selected) {
    this.selectedCustomer = selected;
  }
}
