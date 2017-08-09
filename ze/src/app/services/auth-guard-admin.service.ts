import { Injectable } from '@angular/core';
import {
  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivateChild, NavigationExtras, CanLoad, Route
} from '@angular/router';
import { AuthGuardLogin } from './auth-guard-login.service';

export class AuthGuardAdmin extends AuthGuardLogin {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    if (!this.isLoggedIn) {
      return false;
    } else {
      return this.checkLogin(url);
    };
  };


  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    if (!this.isLoggedIn) {
      return false;
    } else {
      return this.checkLogin(url);
    };
  }

}
