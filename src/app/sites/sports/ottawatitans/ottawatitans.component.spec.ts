import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttawatitansComponent } from './ottawatitans.component';

describe('OttawatitansComponent', () => {
  let component: OttawatitansComponent;
  let fixture: ComponentFixture<OttawatitansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttawatitansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttawatitansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
