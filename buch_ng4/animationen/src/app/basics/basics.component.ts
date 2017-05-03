import {Component, OnInit, ChangeDetectorRef, HostBinding} from '@angular/core';
import {routeAnimation} from '../routing.animations';

@Component({
  animations: [routeAnimation],
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {
  showTabs: boolean;

  @HostBinding('@route') animateRoute = true;

  created = Math.random();

  constructor(private changeDetector: ChangeDetectorRef) {
    console.log('constructor')
    console.log(this.created)
  }

  ngOnInit() {
  }

}
