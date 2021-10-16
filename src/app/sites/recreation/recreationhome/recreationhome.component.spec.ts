import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreationhomeComponent } from './recreationhome.component';

describe('RecreationhomeComponent', () => {
  let component: RecreationhomeComponent;
  let fixture: ComponentFixture<RecreationhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecreationhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
