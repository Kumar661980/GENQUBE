import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div><h3>Child Component</h3>
  <p>Parent name is {{pname}}</p></div>`,
  styles:[`
    div{
      background:yellow;
      padding:20px;
    }
  `]
})
export class ChildComponent implements OnInit {

  @Input()
  pname:string;

  constructor() { }

  ngOnInit(): void {
  }

}
