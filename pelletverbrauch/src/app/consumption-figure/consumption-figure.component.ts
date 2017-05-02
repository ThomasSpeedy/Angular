import { Component } from '@angular/core';
import { ConsumptionFigure } from './consumption-figure';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateDEParserFormatter } from './ngb-date-de-parser-formatter';
import * as moment from 'moment';

@Component({
  selector: 'hmi-consumption-figure',
  templateUrl: './consumption-figure.component.html',
  styleUrls: ['./consumption-figure.component.css'],
  providers:  [{provide: NgbDateParserFormatter, useClass: NgbDateDEParserFormatter}]
})
export class ConsumptionFigureComponent {

  model = new ConsumptionFigure(moment().format('DD.MM.YYYY'), moment().format('hh:mm'), 1, 2, 3);

  submitted = false;

  onSubmit() {
    this.newConsumptionFigure();
    this.submitted = true;
  }

  newConsumptionFigure() {
    console.log(JSON.stringify(this.model));
  }
}
