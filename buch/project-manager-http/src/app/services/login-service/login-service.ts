import {Inject, Optional} from '@angular/core'

const CURRENT_USER = 'currentUser';

export class LoginService {

  USERS = [
    {name: 'admin', password: 'admin', rights: ['edit_tasks', 'change_settings'] },
    {name: 'user', password: 'secret', rights: ['edit_tasks'] }
  ];

  constructor(@Optional() @Inject('AUTH_ENABLED') @Optional() private authEnabled = false) {
  }

  login(name, password) {
    const [user] = this.USERS.filter(user => user.name == name);
    if (user && user.password === password) {
      localStorage.setItem(CURRENT_USER, JSON.stringify(user));
      return true;
    }
  }

  logout() {
    localStorage.removeItem(CURRENT_USER);
  }

  isLoggedIn() {
    return !this.authEnabled || localStorage.getItem(CURRENT_USER) != null;
  }

  getUser() {
    const userString = localStorage.getItem(CURRENT_USER);
    if (userString) {
      return JSON.parse(userString);
    }
  }

}
