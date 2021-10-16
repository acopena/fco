import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependencedayComponent } from './independenceday.component';

describe('IndependencedayComponent', () => {
  let component: IndependencedayComponent;
  let fixture: ComponentFixture<IndependencedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndependencedayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependencedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
