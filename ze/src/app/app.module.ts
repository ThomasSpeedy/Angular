import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AlertService } from './services/alert.service';
import { CustomerService } from './services/customer.service';
import { CustomerModule } from './customer/customer.module';
import { routingComponents, appRouting } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    appRouting,
    //WorktimeModule,
    CustomerModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-de' },
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    AlertService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
