import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Worktime } from '../worktime';

@Component({
  selector: 'ze-worktime-list-item',
  templateUrl: './worktime-list-item.component.html',
  styleUrls: ['./worktime-list-item.component.css']/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class WorktimeListItemComponent implements OnChanges  {
  @Input() worktime: Worktime;
  @Output() onSelect = new EventEmitter();
  handleClick() {
    this.onSelect.emit(this.worktime);
  }
  ngOnChanges(changes: any) {
    console.log('Worktime changed', changes.worktime.currentValue);
  }
}
