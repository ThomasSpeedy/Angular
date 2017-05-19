import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Worktime } from '../worktime';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ze-worktime-form',
  templateUrl: './worktime-form.component.html',
  styleUrls: ['./worktime-form.component.css']
})
export class WorktimeFormComponent implements OnInit {

  worktimes = [
    new Worktime(new Date(), '07:30', '12:00'),
    new Worktime(new Date(), '12:30', '17:00'),
  ];

  worktimeBeginDate: Date;
  worktimeBeginTime: string;
  worktimeEndTime: string;

  selectedWorktime: Worktime;

  msgs: any[] = [];

  userform: FormGroup;

  submitted: boolean;

  genders: any[];

  description: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'description': [''],
      'gender': ['', Validators.required]
    });

    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: 'Male' });
    this.genders.push({ label: 'Female', value: 'Female' });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

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
        return new Worktime(this.worktimeBeginDate, this.worktimeBeginTime, this.worktimeEndTime);
      });
    }
    this.resetFormFields();
  }
  createWorktime() {
    const newWorktime = new Worktime(this.worktimeBeginDate, this.worktimeBeginTime, this.worktimeEndTime);
    this.worktimes = [...this.worktimes, newWorktime];
    this.resetFormFields();
  }

  resetFormFields() {
    this.worktimeBeginDate = null;
    this.worktimeBeginTime = '';
    this.worktimeEndTime = '';
  }
}
