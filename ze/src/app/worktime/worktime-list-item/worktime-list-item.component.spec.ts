import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimeListItemComponent } from './worktime-list-item.component';

describe('WorktimeListItemComponent', () => {
  let component: WorktimeListItemComponent;
  let fixture: ComponentFixture<WorktimeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
