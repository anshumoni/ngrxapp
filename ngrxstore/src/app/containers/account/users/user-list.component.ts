import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { UpdateUserComponent } from '../updateuser.component';

@Component({
    selector: 'user-list',
    template: `<div class="container"> 
    <div style="flex-flow:row wrap;display: flex;">
    <mat-spinner *ngIf="load"></mat-spinner>
    <user-card [userdata]="user" *ngFor="let user of users" ></user-card></div>
    <div style="text-align:center"><button mat-raised-button color="primary" (click)="adduser()">Add User</button></div></div>`,
    styles: ['']
  })
  export class UserListComponent {
    @Input() users:User[]=[];
    @Input() load:boolean=false;

    constructor(public dialog: MatDialog){

    }
    adduser(){
      this.dialog.open(UpdateUserComponent,{
        width:'256px'
      })

    }
  }