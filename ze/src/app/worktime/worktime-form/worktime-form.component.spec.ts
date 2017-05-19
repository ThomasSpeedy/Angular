import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimeOverviewComponent } from './worktime-overview.component';

describe('WorktimeOverviewComponent', () => {
  let component: WorktimeOverviewComponent;
  let fixture: ComponentFixture<WorktimeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
