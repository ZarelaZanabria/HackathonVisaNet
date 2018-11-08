import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-receiver-bank',
  templateUrl: './loan-receiver-bank.component.html',
  styleUrls: ['./loan-receiver-bank.component.scss']
})

export class LoanReceiverBankComponent implements OnInit {

  private banks: any[]
  public validateNumbers: boolean = false;
  public bankSelect: string;
  public numberAccount: string;
  public validAccount: boolean = true;
  public ejemAccount: string = '12345678901234567890';
  public cant: any;
  public cantRecomeded: string;
  public noneBank: boolean = false;
  public noneAccount: boolean = false;
  public noneConditions: boolean = false;
  constructor() {
    this.banks = [
      { name: 'Banco de Crédito', numbers: 15 },
      { name: 'Interbank', numbers: 17 },
      { name: 'Banco de la Nación', numbers: 14 },
      { name: 'BBVA Continental', numbers: 18 },
      { name: 'Banco Pichincha', numbers: 15 },
      { name: 'Mi banco', numbers: 18 },
      { name: 'Scotiabank', numbers: 20 },
    ];

  }

  ngOnInit() {
    // this.validateForm()
  }
  checkoutCant() {
    this.cant = this.banks.filter(elem => elem.name === this.bankSelect);
    this.cantRecomeded = this.ejemAccount.slice(0, this.cant[0]['numbers'])
    console.log(this.cant[0]['numbers'])
  }

  validateForm(value1, value2) {
    // this.cant = this.banks.filter(elem=>elem.name === this.bankSelect);
    // console.log();

    if (!this.numberAccount) this.noneAccount = true;
    if (!value1.checked || !value2.checked) this.noneConditions = true;
    if (!this.bankSelect) this.noneBank = true;
    if (/^([0-9])+$/g.test(this.numberAccount) && this.numberAccount.length === this.cant[0]['numbers'] && value1.value && value2) {
      alert('feliz')
    } else {
      this.validAccount = false;
    }

  }

}
