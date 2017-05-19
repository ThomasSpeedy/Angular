import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, CalendarModule, InputMaskModule, GrowlModule, PanelModule, DropdownModule } from 'primeng/primeng';

import { Worktime } from './worktime';
import { WorktimeListComponent } from './worktime-list/worktime-list.component';
import { WorktimeListItemComponent } from './worktime-list-item/worktime-list-item.component';
import { WorktimeOverviewComponent } from './worktime-overview/worktime-overview.component';
import { WorktimeFormComponent } from './worktime-form/worktime-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, 
    InputTextModule, ButtonModule, CalendarModule, InputMaskModule, GrowlModule, PanelModule, DropdownModule
  ],
  declarations: [WorktimeListComponent, WorktimeListItemComponent, WorktimeFormComponent, WorktimeOverviewComponent],
  exports: [WorktimeOverviewComponent]
})
export class WorktimeModule { }
