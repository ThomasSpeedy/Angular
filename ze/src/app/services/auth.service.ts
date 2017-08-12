import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { JwtHelper } from 'angular2-jwt';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  //  jwtHelper: JwtHelper = new JwtHelper();

  currentUser = { _id: '', username: '', role: '' };

  constructor(private userService: UserService,
    private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(email: string, password: string) {
    return this.userService.login(email, password).map(response => response.json()).map(
      userAsJson => {
console.debug('in login');        
        localStorage.setItem('token', userAsJson.token);
        const decodedUser = this.decodeUserFromToken(userAsJson.token);
        this.setCurrentUser(decodedUser);
        return this.isLoggedIn;
      }
    );

    /*    let dummy = { _id: '4711', username: 'dummy user', role: 'admin' };
        this.setCurrentUser(dummy);
        return this.isLoggedIn;*/
  }

  decodeUserFromToken(token) {
    //  return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    this.isLoggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.currentUser = { _id: '', username: '', role: '' };
    this.router.navigate(['/']);
  }
}
