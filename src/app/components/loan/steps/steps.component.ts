import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
@Input() s1: boolean;
@Input() s2: boolean;
@Input() s3: boolean;
@Input() s4: boolean;
@Input() s5: boolean;
  constructor() { }

  ngOnInit() {
  }

}
