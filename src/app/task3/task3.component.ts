import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Task 1', routerLink:'../', icon: 'pi pi-fw pi-home'},
      {label: 'Task 2', routerLink:'../task2', icon: 'pi pi-fw pi-table'},
      {label: 'Task 3', routerLink:'../task3', icon: 'pi pi-fw pi-sitemap'}
    ];
    this.activeItem = this.items[2];
  }

}
