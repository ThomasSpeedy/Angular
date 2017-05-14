import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Worktime } from '../worktime';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'ze-worktime-overview',
  templateUrl: './worktime-overview.component.html',
  styleUrls: ['./worktime-overview.component.css']
})
export class WorktimeOverviewComponent {

  worktimes = [
    new Worktime('01.01.2017', '07:30', '', '12:00'),
    new Worktime('01.01.2017', '12:30', '', '17:00'),
  ];

  worktimeBeginDate: string;
  worktimeBeginTime: string;
  worktimeEndTime: string;

  selectedWorktime: Worktime;

  worktimeSelected(selected) {
    this.selectedWorktime = selected;
    this.worktimeBeginDate = selected.beginDate;
    this.worktimeBeginTime = selected.beginTime;
    this.worktimeEndTime = selected.endTime;
  }

  // Für eine bessere Performance wurde in WorktimeListItem und WorktimeList die Eigenschaft
  // changeDetection: ChangeDetectionStrategy.OnPush verwendet. Dann überprüft Angular die Komponenten
  // nur dann, wenn sich das Input-Binding der Komponenten tatsächlich ändert, also ein neues Objekt erhält
  updateWorktime() {
    if (this.selectedWorktime) {
      this.worktimes = this.worktimes.map((entry) => {
        if (entry !== this.selectedWorktime) {
          return entry;
        }
        return new Worktime(this.worktimeBeginDate, this.worktimeBeginTime, '', this.worktimeEndTime);
      });
    }
    this.resetFormFields();
  }
  createWorktime() {
    const newWorktime = new Worktime(this.worktimeBeginDate, this.worktimeBeginTime, '', this.worktimeEndTime);
    this.worktimes = [...this.worktimes, newWorktime];
    this.resetFormFields();
  }

  resetFormFields() {
    this.worktimeBeginDate = '';
    this.worktimeBeginTime = '';
    this.worktimeEndTime = '';
  }
}
