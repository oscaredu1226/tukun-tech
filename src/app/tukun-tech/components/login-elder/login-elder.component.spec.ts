import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginElderComponent } from './login-elder.component';

describe('LoginElderComponent', () => {
  let component: LoginElderComponent;
  let fixture: ComponentFixture<LoginElderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginElderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginElderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
