import {Component} from '@angular/core';

@Component({
  selector: 'ch-directives-demo',
  templateUrl: 'directives-demo.component.html',
  styleUrls: ['directives-demo.component.css']
})
export class DirectivesDemoComponent {
  borderWidth = 1;
  sliderValue: number = 50;
  datePickerValue: string = '1.1.2017';

  constructor() {
  }

  submit(email) {
    console.log('Die E-Mail Adresse lautet', email);
  }

}
