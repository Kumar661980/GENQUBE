import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task2Component } from './task2/task2.component';
import { Routes, RouterModule } from '@angular/router';
import { Task3Component } from './task3/task3.component';
import { Task1Component } from './task1/task1.component';
import { ServerComponent } from './server/server.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { ProductService } from './productservice';
import {MessageService} from 'primeng/api';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';

const routes: Routes = [
  {path : '', component:Task1Component },
  {path : 'task2', component:Task2Component },
  {path : 'task3', component:Task3Component }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Task2Component,
    Task3Component,
    Task1Component,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), TableModule, HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, TabMenuModule, BrowserAnimationsModule,
    ButtonModule, InputTextModule, DropdownModule, PanelModule, MessageModule, ToastModule, RadioButtonModule
  ],
  providers: [ProductService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
