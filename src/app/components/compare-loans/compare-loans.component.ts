import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compare-loans',
  templateUrl: './compare-loans.component.html',
  styleUrls: ['./compare-loans.component.scss']
})
export class CompareLoansComponent implements OnInit {
  banks = [
    { name: 'PRESTAMYPE', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 12 },
    { name: 'CAJA HUANCAYO', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 20 },
    { name: 'BCP', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 20 },
    { name: 'CAJA AREQUIPA', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Prestamype.jpg', tcea: 25 }
  ]

  // private time = [12, 24, 36, 48, 60]
  private cashNumber: number = 1000;
  private timeNumber: number = 12;
  // private tcea: number = 0.12;
  // private fee: number = 0;
  // private interest: number = 0;
  // private totalToPay: number;
  @Input() cash: number;
  @Input() timeSelector: number;

  constructor() {
  }

  ngOnInit() {
  }

  addCash() {
    this.cash = this.cash + this.cashNumber
  }

  subtractCash() {
    this.cash = this.cash - this.cashNumber
  }

  addTime() {
    this.timeSelector = this.timeSelector + this.timeNumber

  }

  subtractTime() {
    this.timeSelector = this.timeSelector - this.timeNumber

  }

  calculateFee() {
    // let year = this.timeSelector/12
    // this.interest = this.cash * this.tcea * year
    // this.totalToPay = this.cash + this.interest
    // this.fee = this.totalToPay/this.timeSelector
  }

}
