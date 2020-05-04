import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'pxb-drawer-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-nav-item">
            <pxb-info-list-item 
                [statusColor]="statusColor"
                [title]="title"
                [subtitle]="subtitle"
                [chevron]="chevron"
            >
                <div class="pxb-drawer-nav-item-icon-wrapper" icon>
                   <ng-content select="[icon]"></ng-content>
                </div>
                <div rightComponent>
                    <ng-content select="[rightComponent]"></ng-content>
                </div>
            </pxb-info-list-item>
        </div>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./drawer-nav-item.component.scss'],
})
export class DrawerNavItemComponent {
    @Input() statusColor: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() chevron = false;
    @Input() itemID: string;
    @Input() dense = false;
    @Input() divider = true;
    @Input() items;
    @Input() icon;

}
