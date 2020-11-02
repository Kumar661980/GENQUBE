import {Component, OnInit} from '@angular/core';
import { ProductService } from '../productservice';
import { Product } from '../product';
import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit { 
  items: MenuItem[];
  activeItem: MenuItem;
  products: Product[];
  selectedProducts: Product[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      {label: 'Task 1', routerLink:'../', icon: 'pi pi-fw pi-home'},
      {label: 'Task 2', routerLink:'../task2', icon: 'pi pi-fw pi-table'},
      {label: 'Task 3', routerLink:'../task3', icon: 'pi pi-fw pi-sitemap'}
    ];
    this.activeItem = this.items[1];
    this.productService.getProductsSmall().then(data => this.products = data);
  }

  onRowSelect(event) {
    this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }

  onRowUnselect(event) {
    this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }
}
