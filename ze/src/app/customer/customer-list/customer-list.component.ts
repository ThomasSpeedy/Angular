import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Customer } from '../../shared/customer';

@Component({
  selector: 'ze-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class CustomerListComponent {

  @Input() customers: Customer[];
  @Output() onSelect = new EventEmitter();

  selectedCustomer: Customer;

  constructor() {
  }

  handleClick(selected) {
    this.onSelect.emit(selected);
    console.log('Customer selected ', selected);
    this.selectedCustomer = selected;
  }

}
