import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserRepoService } from 'src/app/services/userrepo.service';
import { UpdateUserComponent } from '../updateuser.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'user-card',
    template: `
    <mat-card class="example-card p-2">
    <mat-card-header>
    <mat-card-title>{{this.userdata.name}}</mat-card-title> </mat-card-header>
    <mat-card-content>{{this.userdata.email}}</mat-card-content>
    <mat-card-actions>
    <button mat-raised-button color="primary" (click)="updateuser()">Update</button>
    <button mat-raised-button color="warn" (click)="deleteuser(userdata.id)">Delete</button>
  </mat-card-actions></mat-card>`,
    styles: [`.example-card {
        width:16rem;
        padding:20px;
        margin:10px
      }`],
    host:{'class':'example-card'}
  })
  export class UserCardComponent {
    @Input()
  userdata!: User;
        
    constructor(private userservice:UserRepoService,public dialog: MatDialog){}  

    deleteuser(id:number){alert(id)
       this.userservice.deleteUser(id)
    }

    updateuser(){
         this.dialog.open(UpdateUserComponent, {
          width:"256px", 
          data:this.userdata       
        })
    }
}