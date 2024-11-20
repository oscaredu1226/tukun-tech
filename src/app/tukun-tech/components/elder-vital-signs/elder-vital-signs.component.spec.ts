import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderVitalSignsComponent } from './elder-vital-signs.component';

describe('ElderVitalSignsComponent', () => {
  let component: ElderVitalSignsComponent;
  let fixture: ComponentFixture<ElderVitalSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElderVitalSignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElderVitalSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
