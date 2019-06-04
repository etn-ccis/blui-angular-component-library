import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hero',
  template: `
  <div [style.cursor]="allowClick ? 'pointer' : 'default'" (click)="allowClick? clickHandler() : null" class="wrapper">
      <span class="icon">
        <ng-content select="[primary]"></ng-content>
      </span>
    
      <span class="values secondary-icon" [style.font-size.rem]="fontSize=='small' ? '1' : '1.25'">
      <ng-content select=".content"></ng-content>
      <channel-value  *ngIf="value" [value]="value" [units]="units" [fontSize]="fontSize" [secondaryIcon]="secondaryIcon">
      
      <ng-content select="[secondary]" secondary></ng-content>
   
      </channel-value>
    </span>
      <h5 class="label">{{label}}</h5>
  </div>
`,
styleUrls: ['./hero.component.scss'],
  inputs: [ 'color', 'nativeColor', 'label', 'value', 'units', 'fontSize', 'allowClick','secondaryIcon' ],
  encapsulation: ViewEncapsulation.None,
  
})

export class HeroComponent  {
 
  
  clickHandler(){
   console.log('clicked');
  }
  
}
