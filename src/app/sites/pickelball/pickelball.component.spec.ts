import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickelballComponent } from './pickelball.component';

describe('PickelballComponent', () => {
  let component: PickelballComponent;
  let fixture: ComponentFixture<PickelballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickelballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickelballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
