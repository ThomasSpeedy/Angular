import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../services/alert.service';


@Component({
  selector: 'ze-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  resetForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, public alertService: AlertService) {
  }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: this.email
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  resetPassword() {
    this.loading = true;
    this.alertService.clear();
    this.alertService.error('This e-mail address is invalid');
  }
}
