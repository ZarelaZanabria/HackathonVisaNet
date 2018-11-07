import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateLoanComponent } from './calculate-loan.component';

describe('CalculateLoanComponent', () => {
  let component: CalculateLoanComponent;
  let fixture: ComponentFixture<CalculateLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
