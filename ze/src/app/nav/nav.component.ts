import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'ze-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isIn = false;   // store state

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  toggleState() { // click handler
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

/*  logout() {
    this.authService.logout();
  }*/
}
