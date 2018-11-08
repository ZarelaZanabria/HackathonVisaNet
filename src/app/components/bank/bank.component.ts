import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  @Output() activeSecondStep: EventEmitter<any> = new EventEmitter<void>();
  @Input() element: any;
  @Input() time: any;
  @Input() cant: any;

  private intereses: any;
  public total: any;
  private mensual: any;

  constructor() {
    // this.calculate()
  }

  ngOnInit() {
    
  }

  calculate(element) {
    console.log(this.time, this.cant, element.tcea);

    let year = this.time / 12;
    this.intereses = (this.cant * (element.tcea * year)) / 100;
    this.total = this.cant + this.intereses;
    this.mensual = (this.total / this.time).toFixed(2);
    console.log(this.intereses, this.total, this.mensual)

    return {
      intereses: this.intereses,
      total: this.total,
      mensual: this.mensual,
    }
  }

  emmitSecondStep() {
    this.activeSecondStep.emit({
      item: 'stepTwo',
    });
  }



}
