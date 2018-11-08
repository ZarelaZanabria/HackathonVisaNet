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
    this.timeSelect = step.time;
    this.cantLoan = step.cash;
    // console.log(this.timeSelect, this.cantLoan)
  }

}
