import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ze-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isIn = false;   // store state

  constructor() { }

  ngOnInit() {
  }

  toggleState() { // click handler
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

}
