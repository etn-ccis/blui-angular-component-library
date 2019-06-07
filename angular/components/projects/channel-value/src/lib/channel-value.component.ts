import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'pxb-channel-value',
  template: `
    <span class="value-box" [style.color]="color">
      <span class="secondary-icon" *ngIf="secondaryIcon" [class.smallIcon]="fontSize == 'small'">
        <ng-content select= "[secondary]"></ng-content>
      </span>
      <h5 *ngIf="units && prefix " class="text units">{{units}}</h5>
      <h5 *ngIf="value" class="text value">{{value}}</h5>
      <h5 *ngIf="units && !prefix" class="text units">{{units}}</h5>
    </span>
  `,
  styleUrls: ['./channel-value.component.scss'], 
  inputs: [ 'divider', 'fontSize', 'color', 'value', 'units', 'prefix', 'secondaryIcon' ],
  // encapsulation: ViewEncapsulation.None
})
export class ChannelValueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value: string;
  units: string;
  fontSize: string= 'inherit';
  secondaryIcon: boolean = false;
  prefix: boolean= false;
  color: string = 'inherit';
}
