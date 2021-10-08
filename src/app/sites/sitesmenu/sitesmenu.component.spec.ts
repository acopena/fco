import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesmenuComponent } from './sitesmenu.component';

describe('SitesmenuComponent', () => {
  let component: SitesmenuComponent;
  let fixture: ComponentFixture<SitesmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
