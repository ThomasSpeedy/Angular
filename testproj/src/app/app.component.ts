import { Component } from '@angular/core';
import { BasicTriesComponent } from './basic-tries/basic-tries.component';

@Component({
  selector: 'hmi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hmi works!';
  values = [1,2,3];

  Tries = BasicTriesComponent;

  temperature: number;
  constructor() {
    this.temperature = 200;
  }

  calculateFontSize() {
    if (this.temperature > 100) {
      return 20;
    } else  {
      return 12;
    }
  }

  calculateColSpan() {
    return 2;
  }

}
