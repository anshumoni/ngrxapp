import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserRepoService } from 'src/app/services/userrepo.service';

@Component({
    selector: 'users',
    template: `<user-list [users]="users" [load]="loading"></user-list>`,
    styles: ['']
  })

export class UsersComponent implements OnInit {
    title = 'store';
    users:User[] =[];
    loading=false;
    constructor(private userservice:UserRepoService){}

    ngOnInit(): void {
      this.fetchUsers();  
    }
    
    loadingstatus(){
      const userdata = this.userservice.getUser()[0];
      userdata.subscribe(data=>{
        this.loading = data;
      })
    }
    fetchUsers(){
      const userdata = this.userservice.getUser()[1];
       userdata.subscribe(data=>{
         this.users = data;
       })
     } 
  }