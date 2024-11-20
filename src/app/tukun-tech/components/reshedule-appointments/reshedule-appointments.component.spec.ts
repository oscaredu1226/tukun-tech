import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResheduleAppointmentsComponent } from './reshedule-appointments.component';

describe('ResheduleAppointmentsComponent', () => {
  let component: ResheduleAppointmentsComponent;
  let fixture: ComponentFixture<ResheduleAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResheduleAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResheduleAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
