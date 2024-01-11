import { Component } from "@angular/core";

@Component({
    selector:'app-simple',
    template:`<app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>`,
    styles:['']
})
export class SimpleCompoent{

}