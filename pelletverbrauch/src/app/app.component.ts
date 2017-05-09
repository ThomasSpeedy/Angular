import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de';

@Component({
  selector: 'hmi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hmi works!';
  constructor() {
    console.log('AppComponent  im constructor');
    moment.locale(window.navigator.language);
    console.log('AppComponent  im constructor');
  }
}
