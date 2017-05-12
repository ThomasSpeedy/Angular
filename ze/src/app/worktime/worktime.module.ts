import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { Worktime } from './worktime';
import { WorktimeListComponent } from './worktime-list/worktime-list.component';
import { WorktimeListItemComponent } from './worktime-list-item/worktime-list-item.component';
import { WorktimeOverviewComponent } from './worktime-overview/worktime-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [WorktimeListComponent, WorktimeListItemComponent, WorktimeOverviewComponent],
  exports: [WorktimeOverviewComponent]
})
export class WorktimeModule { }
