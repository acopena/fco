import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsmenuComponent } from './sportsmenu.component';

describe('SportsmenuComponent', () => {
  let component: SportsmenuComponent;
  let fixture: ComponentFixture<SportsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
