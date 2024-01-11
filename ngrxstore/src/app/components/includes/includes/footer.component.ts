import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<footer class="bg-body-tertiary text-center text-lg-start">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2020 Copyright:
      <a class="text-body" href="https://mvrservice.com/">MDBootstrap.com</a>
    </div>
  </footer>`,
    styles: ['']
  })
  export class FooterComponent {
    title = 'store';
  }