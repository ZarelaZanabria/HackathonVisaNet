import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate-loan',
  templateUrl: './calculate-loan.component.html',
  styleUrls: ['./calculate-loan.component.scss']
})

export class CalculateLoanComponent implements OnInit {
  showBanks: boolean= false;
  countryForm: FormGroup;
  private time = [12, 24, 36, 48, 60]
  @Output() activeSecondStep: EventEmitter<any> = new EventEmitter<void>();
  private timeSelector: any;
  private cash: number = 10000;
  private cashNumber: number = 1000;
  private tcea: number = 0.12;
  private fee: number = 0;
  private interest: number = 0;
  private totalToPay: number;
  public arrayBanks: any = [
    { name: 'PRESTAMYPE', img: '', tcea: 12 },
    { name: 'BCP', img: '', tcea: 20 },
    { name: 'CAJA AREQUIPA', img: '', tcea: 25 },
    { name: 'CAJA HUANCAYO', img: '', tcea: 20 },
  ]

  constructor() { }

  ngOnInit() {
    this.timeSelector = 12;
    // this.calculateFee()
  }

  add() {
    this.cash = this.cash + this.cashNumber

  }

  subtract() {
    this.cash = this.cash - this.cashNumber

  }
  sort() {
    this.arrayBanks = this.arrayBanks.sort((a, b) => a.tcea - b.tcea);
    console.log(this.arrayBanks);
  }

  emmitSecondStep() {
    this.activeSecondStep.emit({
      item: 'stepTwo',
    });
  }
  showBank() {
    this.showBanks = true;
  }
}
