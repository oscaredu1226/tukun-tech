import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountElderComponent } from './create-account-elder.component';

describe('CreateAccountElderComponent', () => {
  let component: CreateAccountElderComponent;
  let fixture: ComponentFixture<CreateAccountElderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountElderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountElderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
