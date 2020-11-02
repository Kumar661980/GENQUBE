import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { $ } from 'protractor';
//import {SelectItem} from 'primeng/api';

interface AreaCode {
  name: string,
  code: string
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})

export class Task1Component implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  userArea: AreaCode[];
  selectedArea: AreaCode;
  userGender: string;
  userName : String;
  userAge : String;
  userMobile : String;
  userEmail : String;
  
  submitted = false;
  active = true;
  userForm: any = {};

  constructor(private fb: FormBuilder, private router: Router) { 
    this.userArea = [ {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  createForm() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      userAge: ['', [Validators.required, Validators.maxLength(3),Validators.pattern('^[0-9]+$')]],
      userGender: ['', Validators.required],
      userMobile: ['', [Validators.required, Validators.maxLength(10),Validators.pattern('^[0-9]+$')]],
      userEmail: ['', [Validators.required, Validators.email]],
      userArea: ['', Validators.required]
    });

  }

  get f() {
    return this.userForm.controls;
  }
  ngOnInit() {
    this.items = [
      {label: 'Task 1', routerLink:'task1', icon: 'pi pi-fw pi-home'},
      {label: 'Task 2', routerLink:'../task2', icon: 'pi pi-fw pi-table'},
      {label: 'Task 3', routerLink:'../task3', icon: 'pi pi-fw pi-sitemap'}
    ];
    this.activeItem = this.items[0];
    this.createForm();
  }
  /*changeSuit(e) {
    this.userForm.get('name').setValue(e.target.value, {
       onlySelf: true
    })
  }*/
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      document.getElementById("success_msg").style.display="none";
      return;
    } else {      
      this.submitted = false;
      document.getElementById("success_msg").style.display="block";
      console.log("Form Submitted!");
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }
}
