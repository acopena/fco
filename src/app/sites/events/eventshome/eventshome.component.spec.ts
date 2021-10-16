import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventshomeComponent } from './eventshome.component';

describe('EventshomeComponent', () => {
  let component: EventshomeComponent;
  let fixture: ComponentFixture<EventshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
