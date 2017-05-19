import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Customer } from '../../shared/customer';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ze-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerKundenNr: string;
  customerName: string;
  customerStrasse: string;
  customerPlz: string;
  customerOrt: string;
  customerAnsprechPartner: string;

  selectedCustomer: Customer;

  msgs: any[] = [];

  userform: FormGroup;

  submitted: boolean;


  description: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'kundenNr': ['', Validators.required],
      'name': ['', Validators.required],
      'strasse': [''],
      'plz': [''],
      'ort': [''],
      'ansprechPartner': ['']
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

  customerSelected(selected) {
    this.selectedCustomer = selected;
    this.customerKundenNr = selected.kundenNr;
    this.customerStrasse = selected.strasse;
    this.customerPlz = selected.plz;
    this.customerOrt = selected.ort;
    this.customerAnsprechPartner = selected.ansprechPartner;
  }

  // Für eine bessere Performance wurde in CustomerListItem und CustomerList die Eigenschaft
  // changeDetection: ChangeDetectionStrategy.OnPush verwendet. Dann überprüft Angular die Komponenten
  // nur dann, wenn sich das Input-Binding der Komponenten tatsächlich ändert, also ein neues Objekt erhält
  updateCustomer() {
/*    if (this.selectedCustomer) {
      this.customers = this.customers.map((entry) => {
        if (entry !== this.selectedCustomer) {
          return entry;
        }
        return new Customer(this.customerBeginDate, this.customerBeginTime, this.customerEndTime);
      });
    }
*/    this.resetFormFields();
  }
  createCustomer() {
/*    const newCustomer = new Customer(this.customerBeginDate, this.customerBeginTime, this.customerEndTime);
    this.customers = [...this.customers, newCustomer];
    this.resetFormFields();
*/  }

  resetFormFields() {
    this.selectedCustomer = null;
    this.customerKundenNr = '';
    this.customerStrasse = '';
    this.customerPlz = '';
    this.customerOrt = '';
    this.customerAnsprechPartner = '';
  }
}
