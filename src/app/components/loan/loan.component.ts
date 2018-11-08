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
  private timeSelect : number;
  private cantLoan: number;
  constructor() { }

  ngOnInit() {
  }
  activeStep(step) {
    this[step.item] = true;
    this.timeSelect = step.time || this.timeSelect;
    this.cantLoan = step.cash || this.timeSelect;
    // console.log(this.timeSelect, this.cantLoan)
  }

}
