import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-receiver-bank',
  templateUrl: './loan-receiver-bank.component.html',
  styleUrls: ['./loan-receiver-bank.component.scss']
})
export class LoanReceiverBankComponent implements OnInit {

  public banks: any[]
  public validateNumbers : boolean = false;
  public bankSelect : string;
  public numberCount: string;
  private lengthNumbersCount: number;
  constructor() { 
    this.banks = [
      {name: 'Banco de Crédito', numbers:  15},
      {name: 'Interbank', numbers:  17},
      {name: 'Banco de la Nación', numbers: 14 },
      {name: 'BBVA Continental', numbers:  18},
      {name: 'Banco Pichincha', numbers: 15 },
      {name: 'Mi banco', numbers: 18},
      {name: 'Scotiabank', numbers: 20 }, 
  ];
 
  }
 
  ngOnInit() {
    // this.validateForm()
  }

  validateForm(value1, value2) {

  if(/^([0-9])+$/g.test(this.numberCount) && this.numberCount.length === 1 && value1.value && value2 )
   this.validateNumbers = true;
  //  console.log(this.validateNumbers)
  }
}
