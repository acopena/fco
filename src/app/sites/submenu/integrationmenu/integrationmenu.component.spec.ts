import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationmenuComponent } from './integrationmenu.component';

describe('IntegrationmenuComponent', () => {
  let component: IntegrationmenuComponent;
  let fixture: ComponentFixture<IntegrationmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
