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
  private total: any;
  private mensual: any;
  private
  constructor() {
    // this.calculate()
  }

  ngOnInit() {
    this.calculate()
  }

  calculate() {
    console.log(this.time, this.cant, this.element.tcea)
    let year = this.time / 12;
    this.intereses = (this.cant * (this.element.tcea * year)) / 100;
    this.total = this.cant + this.intereses;
    this.mensual = (this.total / this.time).toFixed(2);
    console.log(this.intereses, this.total, this.mensual)
  }

  emmitSecondStep() {
    this.activeSecondStep.emit({
      item: 'stepTwo',
    });
  }
  
  

}
