import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pxb-info-list-item',
  template: `
    <mat-list-item class="pxb-root" 
      [class.dense]="dense" 
      [class.status]="statusColor" 
      [style.borderLeftColor]="statusColor">
      <div mat-list-icon class="pxb-icon" [class.hidePadding]="hidePadding">
        <ng-content select="[icon]"></ng-content>
      </div>
      <div class="pxb-left-component">
        <ng-content select="[left-component]"></ng-content>
      </div>
      <div class="mat-body-1 pxb-title" matLine>{{title}}</div>
      <div class="mat-body-2 pxb-subtitle" matLine>{{subtitle}}</div>
      <div class="pxb-spacer"></div>
      <div class="pxb-right-component">
        <ng-content select="[right-component]"></ng-content>
      </div>
    </mat-list-item>
    `,
  styleUrls: ['./info-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoListItemComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() hidePadding = false;
  @Input() dense = false;
  @Input() statusColor: string;
}
