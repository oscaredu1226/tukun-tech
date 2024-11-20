import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyNumbersComponent } from './emergency-numbers.component';

describe('EmergencyNumbersComponent', () => {
  let component: EmergencyNumbersComponent;
  let fixture: ComponentFixture<EmergencyNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
