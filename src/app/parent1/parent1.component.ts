import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styles:[`
    div{
      background:red;
      padding:20px;
    }
  `]
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueEmittedFromChildComponent: string = '';
  parentEventHandlerFunction(valueEmitted){
    this.valueEmittedFromChildComponent = valueEmitted;
  }

}
