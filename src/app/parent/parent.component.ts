import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles:[`
    div{
      background:red;
      padding:20px;
    }
  `]
})
export class ParentComponent {

  parentName : String = "Kumar";

  constructor() { }

  ngOnInit(): void {
  }

}
