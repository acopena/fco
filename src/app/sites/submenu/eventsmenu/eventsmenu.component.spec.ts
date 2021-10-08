import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsmenuComponent } from './eventsmenu.component';

describe('EventsmenuComponent', () => {
  let component: EventsmenuComponent;
  let fixture: ComponentFixture<EventsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
