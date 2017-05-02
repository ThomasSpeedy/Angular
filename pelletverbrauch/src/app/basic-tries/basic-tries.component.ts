import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hmi-basic-tries',
  templateUrl: './basic-tries.component.html',
  styleUrls: ['./basic-tries.component.css']
})
export class BasicTriesComponent implements OnInit {

  temperature = 100;
  isVisible = true;

  constructor() { }

  ngOnInit() {
  }

  calculateColSpan() {
    return 4;
  }

}
