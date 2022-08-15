import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Clearing Heart Beat</h2>
        <p>
          This app shows current Clearing health check status.
        </p>
        <br />
        <h2 class="title">Owner</h2>
        <p>
          Integrated Worlds GmbH
        </p>
      </div>
    </div>
  `,
})
export class AboutComponent {}
