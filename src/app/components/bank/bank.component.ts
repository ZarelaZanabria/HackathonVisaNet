import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})

export class BankComponent implements OnInit {
  @Input() element: any;
  @Input() time: any;
  @Input() cant: any;
  private monthlyFee: number;
  private interest: number;
  private totalToPay: number;
  
  constructor() { }

  ngOnInit() {
    this.calculate()
  }

  calculate() {
    console.log(this.element)
    console.log(this.cant)
    this.monthlyFee = this.cant

    // Interés: 10,000 * 12% (TCEA) = 1,200 
    // Monto Total a pagar : 10,000 + 1,200 = 11,200
    // Cuota: 11,200/ 36(tiempo a pagar) = 933.33 


  }
}
