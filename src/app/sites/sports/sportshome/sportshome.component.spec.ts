import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportshomeComponent } from './sportshome.component';

describe('SportshomeComponent', () => {
  let component: SportshomeComponent;
  let fixture: ComponentFixture<SportshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
