import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as colors from '@pxblue/colors';

export type DrawerNavItem = {
    statusColor?: string;
    title: string;
    subtitle?: string;
    chevron?: boolean;
    dense?: boolean;
    divider?: boolean;
    items?: DrawerNavItem[];
    onClick?: any; // @TODO: fix type definition
    icon?: string;
    itemID?: string;
    hasChildren?: boolean;
    ripple?: boolean;
    rippleColor?: string;
}

@Component({
    selector: 'pxb-drawer-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
    <div class="pxb-drawer-nav-item" [ngClass]="selected ? 'pxb-drawer-nav-item-active' : ''">
        <pxb-info-list-item class="pxb-info-list-item"
            [statusColor]="statusColor"
            [chevron]="chevron"
            [divider]="divider ? 'full' : undefined"
            [ngClass]="selected ? 'pxb-info-list-item-active' : ''"
            matRipple
            [matRippleDisabled]="!ripple"
            [matRippleColor]="rippleColor"
            style="display:flex;"
            > 
            <div class="pxb-drawer-nav-item-icon-wrapper" icon>
                <ng-content select="[icon]"></ng-content>
            </div>
            <div title>{{ title }}</div>
            <div subtitle>{{ subtitle }}</div>
            <div rightContent *ngIf="hasChildren" (click)="toggleNestedNavItems($event)">
                <mat-icon *ngIf="!showNestedNavItems">keyboard_arrow_down</mat-icon>
                <mat-icon *ngIf="showNestedNavItems">keyboard_arrow_up</mat-icon>
            </div>
        </pxb-info-list-item>
    </div>
        <!-- Nested Nav Items -->
        <div class="pxb-drawer-nested-nav-item" [ngClass]="true ? 'pxb-info-list-item-active' : ''">
            <ng-content *ngIf="showNestedNavItems" select="pxb-drawer-nav-item"></ng-content>
        </div>
    `,
})

export class DrawerNavItemComponent {
    @Input() statusColor: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() chevron = false;
    @Input() dense = false;
    @Input() divider = true;
    @Input() selected: boolean;
    @Input() itemID: string;
    @Input() showNestedNavItems = false;
    @Input() hasChildren = false;
    @Input() ripple = true;
    @Input() rippleColor = colors.black[500];

    toggleNestedNavItems(e: any): void {
        if (e) {
            e.stopPropagation();
        }
        this.showNestedNavItems = !this.showNestedNavItems;
    }
}
