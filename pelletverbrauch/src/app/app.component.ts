import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de';

@Component({
  selector: 'hmi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    moment.locale(window.navigator.language);
  }
  createConsumptionFigure(Date: Date, OperationHours: Number, Starts: Number, Consumption: Number) {
    console.log(Date, OperationHours, Starts, Consumption);
  }
}
