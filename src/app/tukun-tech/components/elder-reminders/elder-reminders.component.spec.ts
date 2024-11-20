import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderRemindersComponent } from './elder-reminders.component';

describe('ElderRemindersComponent', () => {
  let component: ElderRemindersComponent;
  let fixture: ComponentFixture<ElderRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElderRemindersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElderRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
