import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayshorebasketballComponent } from './bayshorebasketball.component';

describe('BayshorebasketballComponent', () => {
  let component: BayshorebasketballComponent;
  let fixture: ComponentFixture<BayshorebasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayshorebasketballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayshorebasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
