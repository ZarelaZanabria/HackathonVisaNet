import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  public stepOne = true;
  public stepTwo = false;
  public stepThree = false;
  public stepFour = false;
  public stepFive = false;
  private timeSelector: number;
  private cantLoan: number;

  constructor() { }
  ngOnInit() { }

  activeStep(step) {
    this[step.item] = true;
    this.timeSelector = step.time || this.timeSelector;
    this.cantLoan = step.cash || this.cantLoan;
    // console.log(this.timeSelect, this.cantLoan)
  }

}
