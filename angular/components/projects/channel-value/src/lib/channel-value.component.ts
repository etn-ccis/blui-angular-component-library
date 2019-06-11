import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'pxb-channel-value',
  template: `
    <span class="value-wrapper" [style.color]="color" [style.font-size]="fontSize">
      <span class="icon">
        <ng-content></ng-content>
      </span>
      <h5 *ngIf="units && prefix " class="text units">{{units}}</h5>
      <h5 *ngIf="value" class="text value">{{value}}</h5>
      <h5 *ngIf="units && !prefix" class="text units">{{units}}</h5>
    </span>
  `,
  styleUrls: ['./channel-value.component.scss'], 
  inputs: [ 'divider', 'fontSize', 'color', 'value', 'units', 'prefix' ],
  
})
export class ChannelValueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value: string;
  units: string;
  fontSize: string= 'inherit';
  prefix: boolean= false;
  color: string = 'inherit';
}
