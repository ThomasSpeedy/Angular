import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'ze-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  loginForm: FormGroup;
  message: string;
  loading = false;

  constructor(public authService: AuthService, public router: Router, private formBuilder: FormBuilder, public alertService: AlertService) {
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
    if (newMessage !== '') {
      this.message = newMessage;
    } else {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in as ' + this.authService.currentUser.username : 'out');
    }
  }

  login() {
    this.loading = true;
    this.alertService.clear();
    this.setMessage('Trying to log in ...');

    this.authService.login(this.email.value, this.password.value).subscribe(
      data => {
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        } else {
          this.alertService.error('Log in failed: ' + 'Unvalid user/password');
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.alertService.error('Service temporary not available, please try again later');
        } else {
          this.alertService.error('Log in failed: ' + error );
        }
      }
    );
    this.loading = false;
    this.setMessage();
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
