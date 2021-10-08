import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreationmenuComponent } from './recreationmenu.component';

describe('RecreationmenuComponent', () => {
  let component: RecreationmenuComponent;
  let fixture: ComponentFixture<RecreationmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecreationmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreationmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
