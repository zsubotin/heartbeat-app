import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="https://angular.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/IW_Logo_White.png" alt="IM">
      </a>
      <a class="navbar-item nav-home" router-link="/">
        <span class="brand-first">Clearing </span>
        <span class="brand-second">Heart</span>
        <span class="brand-third">Beat</span>
      </a>
    </div>
  `,
})
export class HeaderBarBrandComponent {}
