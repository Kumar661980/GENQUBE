import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  items: MenuItem[];
  activeItem: MenuItem;
  ngOnInit() {
    this.items = [
      {label: 'Task 1', routerLink:'task1', icon: 'pi pi-fw pi-home'},
      {label: 'Task 2', routerLink:'task2', icon: 'pi pi-fw pi-table'},
      {label: 'Task 3', routerLink:'task3', icon: 'pi pi-fw pi-sitemap'}
    ];
    this.activeItem = this.items[1];
  }
}