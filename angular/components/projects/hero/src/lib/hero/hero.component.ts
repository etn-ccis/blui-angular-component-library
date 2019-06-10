import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pxb-hero',
  template: `
  <div [style.cursor]="allowClick ? 'pointer' : 'default'" class="wrapper">
      <span class="icon">
        <ng-content select="[primary]"></ng-content>
      </span>
    
      <span class="values secondary-icon" [style.font-size.rem]="fontSize=='small' ? '1' : '1.25'">
        <ng-content select=".content"></ng-content> 
        <pxb-channel-value  *ngIf="value" [value]="value" [units]="units" >
          <ng-content select="[secondary]" ></ng-content>
        </pxb-channel-value>
      </span>
      <h5 class="label">{{label}}</h5>
  </div>
`,
styleUrls: ['./hero.component.scss'],
  inputs: [ 'color', 'nativeColor', 'label', 'value', 'units', 'fontSize', 'allowClick' ],
  // encapsulation: ViewEncapsulation.None,
  // host:{
  //   '(click)': "onCLick($event)"
  // }

})

export class HeroComponent  {
 color: string;
 nativeColor: string;
 label: string;
 value: string;
 units: string;
//  click: Function;
 fontSize: string = 'normal';
 allowClick: boolean;
 
//  @Output() onClick: EventEmitter<any> = new EventEmitter();

  
  // onClick(e){
  //   this.onClick.emit();
  // }
  
}
