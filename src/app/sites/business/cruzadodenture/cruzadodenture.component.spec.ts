import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruzadodentureComponent } from './cruzadodenture.component';

describe('CruzadodentureComponent', () => {
  let component: CruzadodentureComponent;
  let fixture: ComponentFixture<CruzadodentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruzadodentureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruzadodentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
