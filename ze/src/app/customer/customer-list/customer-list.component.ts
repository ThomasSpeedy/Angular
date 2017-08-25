import { Component, OnInit, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../shared/customer';

@Component({
  selector: 'ze-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class CustomerListComponent implements OnInit {

  @Input() customers: Customer[];
  @Output() onSelect = new EventEmitter();

  selectedCustomer: Customer;

  constructor(@Inject(CustomerService) private customerService: CustomerService) {
//    customerService.getAll().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getAll().then(customers => this.customers = customers);
  }

  handleClick(selected) {
    this.onSelect.emit(selected);
    console.log('Customer selected ', selected);
    this.selectedCustomer = selected;
  }

}
