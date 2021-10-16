import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesshomeComponent } from './businesshome.component';

describe('BusinesshomeComponent', () => {
  let component: BusinesshomeComponent;
  let fixture: ComponentFixture<BusinesshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
