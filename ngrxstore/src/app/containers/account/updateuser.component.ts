import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { UserRepoService } from 'src/app/services/userrepo.service';

@Component({
    selector: 'updateuser',
    template: `<form [formGroup]="userForm" (ngSubmit)="this.userForm.valid && this.addorupdateuser()"><div class="col"><mat-form-field>
    <mat-label>Username</mat-label>
    <input matInput formControlName="name">
    <mat-error>Name is required</mat-error>
  </mat-form-field>
  <mat-form-field>
    <mat-label>Email</mat-label>
    <input matInput formControlName="email">
    <mat-error>email is required</mat-error>

  </mat-form-field>
  <button  mat-raised-button color="primary" type="submit">{{data?'Update':'Add'}}</button></div></form>`,
    styles: ['']
  })

export class UpdateUserComponent implements OnInit {
    title = 'store';
    users:User[] =[];
    userForm!: FormGroup;
    constructor(private userservice:UserRepoService,private matref:MatDialogRef<UpdateUserComponent>,@Inject(MAT_DIALOG_DATA) public data:User){
        console.log("data",this.data)
    }
    ngOnInit(){
        this.userForm = new FormGroup({
            name:new FormControl(this.data?this.data.name:null,[Validators.required]),
            email:new FormControl(this.data?this.data.email:null,[Validators.required])

        })
    }
    
    addorupdateuser(){
        if(this.data){
            this.updateuser();
        }else{
            this.adduser()
        }
    }
    updateuser(){
        this.userservice.updateUser({...this.data,...this.userForm.value});
        this.matref.close();

    }

    adduser(){
        this.userservice.adduser({...this.data,...this.userForm.value});
        this.matref.close();

    }
  }