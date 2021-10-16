import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FccComponent } from './fcc.component';

describe('FccComponent', () => {
  let component: FccComponent;
  let fixture: ComponentFixture<FccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
