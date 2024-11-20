import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElderComponent } from './home-elder.component';

describe('HomeElderComponent', () => {
  let component: HomeElderComponent;
  let fixture: ComponentFixture<HomeElderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeElderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeElderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
