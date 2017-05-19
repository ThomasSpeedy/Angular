import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Worktime } from '../worktime';

@Component({
  selector: 'ze-worktime-list',
  templateUrl: './worktime-list.component.html',
  styleUrls: ['./worktime-list.component.css']/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class WorktimeListComponent {

  @Input() worktimes: Worktime[];
  @Output() onSelect = new EventEmitter();

  worktimeSelected(selected) {
    this.onSelect.emit(selected);
  }

}
