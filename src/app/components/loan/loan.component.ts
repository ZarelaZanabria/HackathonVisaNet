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
  constructor() { }

  ngOnInit() {
  }

}
