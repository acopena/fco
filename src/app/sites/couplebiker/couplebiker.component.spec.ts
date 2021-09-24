import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplebikerComponent } from './couplebiker.component';

describe('CouplebikerComponent', () => {
  let component: CouplebikerComponent;
  let fixture: ComponentFixture<CouplebikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouplebikerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplebikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
