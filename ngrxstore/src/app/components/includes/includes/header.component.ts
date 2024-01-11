import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<header><mat-toolbar color="primary">
    <div class="example-button-row">
    <app-menu></app-menu>
    </div>
</mat-toolbar></header>`,
    styles: [`.selected{
            background:green
    }`]
  })
  export class HeaderComponent {
    title = 'store';
  }