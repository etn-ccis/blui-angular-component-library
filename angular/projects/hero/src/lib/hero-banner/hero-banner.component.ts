import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-banner',
  template: `
        <div class="banner">
          <ng-content></ng-content>
        </div>
        <mat-divider class="divider" *ngIf="divider"></mat-divider>
      `,
      styleUrls: ['./hero-banner.component.scss'],
  inputs: [ 'divider' ]
})
export class HeroBannerComponent  {

  
}
