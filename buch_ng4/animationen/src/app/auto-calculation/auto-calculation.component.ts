import {Component, ChangeDetectorRef, HostBinding, HostListener, ViewChild} from '@angular/core';
import {routeAnimation} from '../routing.animations';
import {PanelComponent} from '../panel/panel.component';

@Component({
  selector: 'auto-calculation',
  animations: [routeAnimation],
  templateUrl: './auto-calculation.component.html',
  styleUrls: ['./auto-calculation.component.css']
})
export class AutoCalculationComponent {
  @HostBinding('@route') animateRoute = true;

  @ViewChild(PanelComponent) firstPanel: PanelComponent;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  @HostListener('@route.done', ['$event']) onDone(event) {
    if (event.fromState == 'void') {
      this.firstPanel.open = true;
      this.changeDetector.detectChanges();
    }
  }
}
