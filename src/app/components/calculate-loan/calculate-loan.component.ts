import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate-loan',
  templateUrl: './calculate-loan.component.html',
  styleUrls: ['./calculate-loan.component.scss']
})

export class CalculateLoanComponent implements OnInit {
  countryForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  private time = [12, 24, 36, 48, 60]
  @Output() activeSecondStep: EventEmitter<any> = new EventEmitter<void>();
  private timeSelector: number;
  private cash: number = 10000;
  private cashNumber: number = 1000;
  private tcea: number = 0.12;
  private fee: number = 0;
  private interest: number = 0;
  private totalToPay: number;

  constructor() { }

  ngOnInit() {
    this.timeSelector = 12;
    this.calculateFee()
  }

  add() {
    this.cash = this.cash + this.cashNumber
    if (this.timeSelector) {
      this.calculateFee()
    }
  }

  subtract() {
    this.cash = this.cash - this.cashNumber
    if (this.timeSelector) {
      this.calculateFee()
    }
  }

  calculateFee() {
    let year = this.timeSelector / 12
    this.interest = this.cash * this.tcea * year
    this.totalToPay = this.cash + this.interest
    this.fee = this.totalToPay / this.timeSelector
  }

  emmitSecondStep() {
    console.log(this.timeSelector, this.cash);
    this.activeSecondStep.emit({
      item: 'stepTwo',
      time: this.timeSelector,
      cash: this.cash
    });
  }

}
