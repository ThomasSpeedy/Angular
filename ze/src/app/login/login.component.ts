import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { AlertComponent } from '../shared/alert/alert.component';


@Component({
  selector: 'ze-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  message: string;
  loginForm: FormGroup;

  constructor(public authService: AuthService, public router: Router, private formBuilder: FormBuilder, public alert: AlertComponent) {
    this.setMessage();
  }

  ngOnInit() {
    this.setMessage();
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  setMessage(newMessage: string = '') {
    if (newMessage === '') {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in as ' + this.authService.currentUser.username : 'out');
    } else {
      this.message = newMessage;
      this.alert.setMessage(newMessage, 'danger', 'Warning!');
    }
  }

  login() {
    this.setMessage('Trying to log in ...');

    this.authService.login(this.loginForm.value).subscribe(
      (error) => { this.setMessage('Log in failed'); },
      () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        } else {
          this.setMessage('Log in failed');
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
