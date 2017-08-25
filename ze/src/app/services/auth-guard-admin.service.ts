import { Injectable } from '@angular/core';
import {
  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivateChild, NavigationExtras, CanLoad, Route
} from '@angular/router';
import { AuthGuardLogin } from './auth-guard-login.service';

export class AuthGuardAdmin extends AuthGuardLogin {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAdmin) {
    console.debug('in AuthGuardAdmin Checklogin isAdmin = true') } else {console.debug('in AuthGuardAdmin Checklogin isAdmin = true')};
    if (this.authService.isAdmin) { return true; }
    console.debug('in AuthGuardAdmin before check Checklogin');
    if (!this.authService.isLoggedIn) {
      this.navigateToLogin(url);
    }
    return false;
  };

  /*  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      if (!this.isAdmin) {
        return false;
      } else {
        return this.checkLogin(url);
      };
    };
  
  
    canLoad(route: Route): boolean {
      const url = `/${route.path}`;
      if (!this.isAdmin) {
        return false;
      } else {
        return this.checkLogin(url);
      };
    }
  */
}
