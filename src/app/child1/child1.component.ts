import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styles:[`
    div{
      background:yellow;
      padding:20px;
    }
  `]
})
export class Child1Component implements OnInit {

  @Output()
  buttonClicked : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(){
    this.buttonClicked.emit("Child Event");
  }

}
