import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionhomeComponent } from './religionhome.component';

describe('ReligionhomeComponent', () => {
  let component: ReligionhomeComponent;
  let fixture: ComponentFixture<ReligionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
