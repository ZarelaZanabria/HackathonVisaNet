import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compare-loans',
  templateUrl: './compare-loans.component.html',
  styleUrls: ['./compare-loans.component.scss']
})
export class CompareLoansComponent implements OnInit {
  // time = [{label: '12 MESES', value: 12}, {label: '24 MESES', value: 24}, {label: '36 MESES', value: 36}, {label: '4 AÑOS', value: 48}, {label: '5 AÑOS', value: 60}]
  banks = [
    { name: 'PRESTAMYPE', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 12 },
    { name: 'CAJA HUANCAYO', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 20 },
    { name: 'BCP', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 20 },
    { name: 'CAJA AREQUIPA', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 25 }
  ]

  // private timeSelector: any;
  // private cash: number = 10000;
  private time = [12, 24, 36, 48, 60]
  private cashNumber: number = 1000;
  private tcea: number = 0.12;
  private fee: number = 0;
  private interest: number = 0;
  private totalToPay: number;
  private m: any;
  @Input() cash: number;
  @Input() timeSelector: number;

  constructor() {
    this.m = this.timeSelector;
  }

  ngOnInit() {
    console.log(this.timeSelector, 'compare')
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
    this.calculateFeeForEach()
    // let year = this.timeSelector/12
    // this.interest = this.cash * this.tcea * year
    // this.totalToPay = this.cash + this.interest
    // this.fee = this.totalToPay/this.timeSelector
  }

  calculateFeeForEach() {
    console.log(this.timeSelector)
  }
}
