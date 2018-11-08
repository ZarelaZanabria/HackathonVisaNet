import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate-loan',
  templateUrl: './calculate-loan.component.html',
  styleUrls: ['./calculate-loan.component.scss']
})

export class CalculateLoanComponent implements OnInit {
  countryForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  time = [{label: '12 MESES', value: 12}, {label: '24 MESES', value: 24}, {label: '36 MESES', value: 36}, {label: '4 AÑOS', value: 48}, {label: '5 AÑOS', value: 60}]
  @Output() activeSecondStep : EventEmitter<any> = new EventEmitter<void>();;
  private timeSelector: any;
  private cash: number = 10000;
  private cashNumber: number = 1000;
  private tcea: number = 0.12;
  private fee: number = 0;
  private interest: number = 0;
  private totalToPay: number;

  constructor() {}

  ngOnInit() {}

  add () {
    this.cash = this.cash + this.cashNumber
    if (this.timeSelector) {
      this.calculateFee()
    }
  }

  subtract () {
    this.cash = this.cash - this.cashNumber
    if (this.timeSelector) {
      this.calculateFee()
    }
  }

  calculateFee () {
    let year = this.timeSelector/12
    this.interest = this.cash * this.tcea * year
    this.totalToPay = this.cash + this.interest
    this.fee = this.totalToPay/this.timeSelector
  }
  emmitSecondStep () {

  }

}
