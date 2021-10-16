import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingpongComponent } from './pingpong.component';

describe('PingpongComponent', () => {
  let component: PingpongComponent;
  let fixture: ComponentFixture<PingpongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingpongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PingpongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
