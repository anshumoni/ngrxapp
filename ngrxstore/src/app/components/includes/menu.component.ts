import { Component } from "@angular/core";

@Component({
    selector:'app-menu',
    template:`<button mat-button routerLink="/home" routerLinkActive="selected" [routerLinkActiveOptions]="{exact:true}">Home</button>
    <button mat-button routerLink="/products" routerLinkActive="selected">Products</button>
    
    <button mat-button routerLink="/users" routerLinkActive="selected">Users</button>
    <button mat-button [matMenuTriggerFor]="afterMenu">Posts</button>
    <mat-menu #afterMenu="matMenu" xPosition="after">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>
    `,
    styles:[`.selected{
      background:green
}`]
})

export class MenuComponent{
    
}