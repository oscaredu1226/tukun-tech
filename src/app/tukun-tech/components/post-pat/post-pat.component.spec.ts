import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPatComponent } from './post-pat.component';

describe('PostPatComponent', () => {
  let component: PostPatComponent;
  let fixture: ComponentFixture<PostPatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
