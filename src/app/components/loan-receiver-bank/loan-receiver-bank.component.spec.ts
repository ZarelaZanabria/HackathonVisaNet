import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReceiverBankComponent } from './loan-receiver-bank.component';

describe('LoanReceiverBankComponent', () => {
  let component: LoanReceiverBankComponent;
  let fixture: ComponentFixture<LoanReceiverBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanReceiverBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanReceiverBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
