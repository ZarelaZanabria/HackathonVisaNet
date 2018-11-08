import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Output() activeSecondStep : EventEmitter<any> = new EventEmitter<void>();

  constructor() { 
    this.emmitSecondStep();
  }

  ngOnInit() {
  }

  emmitSecondStep() {
    this.activeSecondStep.emit({
      item: 'stepThree',
    });
  }

}
