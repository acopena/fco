import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfComponent } from './golf.component';

describe('GolfComponent', () => {
  let component: GolfComponent;
  let fixture: ComponentFixture<GolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
