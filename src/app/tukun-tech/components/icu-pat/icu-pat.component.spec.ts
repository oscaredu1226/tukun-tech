import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuPatComponent } from './icu-pat.component';

describe('IcuPatComponent', () => {
  let component: IcuPatComponent;
  let fixture: ComponentFixture<IcuPatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcuPatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcuPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
