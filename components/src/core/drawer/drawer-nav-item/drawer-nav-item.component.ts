import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export type DrawerNavItem = {
    statusColor?: string;
    title: string;
    subtitle?: string;
    chevron?: boolean;
    divider?: boolean;
    items?: DrawerNavItem[];
    onClick?: any;
    icon?: string;
    itemID?: string;
    hasChildren?: boolean;
    ripple?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    useCustomIconAnimation?: boolean;
    hidePadding?: boolean;
};

export type ActiveItemBackgroundShape = 'round' | 'square';

@Component({
    selector: 'pxb-drawer-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-nav-item.component.scss'],
    animations: [
        trigger('showNestedItemsAnimation', [
            transition(':enter', [
                style({ height: 0, opacity: 0 }),
                animate('300ms ease-out', style({ height: '*', opacity: 1 })),
            ]),
            transition(':leave', [
                style({ height: '*', opacity: 1 }),
                animate('200ms ease-out', style({ height: 0, opacity: 0 })),
            ]),
        ]),
        trigger('rotateExpandIconAnimation', [
            transition(':enter', [
                style({ transform: 'rotate(180deg)' }),
                animate('300ms linear', style({ transform: 'rotate(0deg)' })),
            ]),
            transition(':leave', [
                style({ transform: 'rotate(0deg)' }),
                animate('300ms linear', style({ transform: 'rotate(180deg)' })),
            ]),
        ]),
        trigger('rotateCollapseIconAnimation', [
            transition(':enter', [
                style({ transform: 'rotate(-180deg)' }),
                animate('300ms linear', style({ transform: 'rotate(0deg)' })),
            ]),
            transition(':leave', [
                style({ transform: 'rotate(0deg)' }),
                animate('300ms linear', style({ transform: 'rotate(-180deg)' })),
            ]),
        ]),
    ],
    template: `
        <div class="pxb-drawer-nav-item">
            <pxb-info-list-item
                class="pxb-info-list-item"
                [statusColor]="statusColor"
                [chevron]="chevron"
                [divider]="divider ? 'full' : undefined"
                [ngClass]="[selected ? 'pxb-info-list-item-active' : '', hidePadding ? 'hide-padding' : '']"
                [class.round]="activeItemBackgroundShape === 'round'"
                [class.square]="activeItemBackgroundShape === 'square'"
                matRipple
                [matRippleDisabled]="!ripple"
                style="display:flex;"
            >
                <div class="pxb-drawer-nav-item-icon-wrapper" icon>
                    <ng-content select="[icon]"></ng-content>
                </div>
                <div title>{{ title }}</div>
                <div subtitle>{{ subtitle }}</div>
                <div rightContent *ngIf="hasChildren && expandIcon && !showNestedNavItems">
                    <mat-icon
                        class="pxb-drawer-nav-item-expand-icon"
                        (click)="toggleNestedNavItems($event)"
                        [@rotateExpandIconAnimation]
                        [@.disabled]="!toggled || !useCustomIconAnimation"
                        >{{ expandIcon }}</mat-icon
                    >
                </div>
                <div rightContent *ngIf="hasChildren && collapseIcon && showNestedNavItems">
                    <mat-icon
                        class="pxb-drawer-nav-item-collapse-icon"
                        (click)="toggleNestedNavItems($event)"
                        [@rotateCollapseIconAnimation]
                        [@.disabled]="!toggled || !useCustomIconAnimation"
                        >{{ collapseIcon }}</mat-icon
                    >
                </div>
                <div
                    rightContent
                    *ngIf="hasChildren && !expandIcon && !collapseIcon"
                    (click)="toggleNestedNavItems($event)"
                >
                    <mat-icon
                        class="pxb-drawer-nav-item-default-expand-icon"
                        [ngClass]="showNestedNavItems ? 'inverted' : ''"
                        >keyboard_arrow_down</mat-icon
                    >
                </div>
            </pxb-info-list-item>
        </div>
        <!-- Nested Nav Items -->
        <div class="pxb-drawer-nested-nav-item">
            <div *ngIf="showNestedNavItems" [@showNestedItemsAnimation]>
                <ng-content
                    select="pxb-drawer-nav-item"
                    [ngClass]="selected ? 'pxb-info-list-item-active' : ''"
                ></ng-content>
            </div>
        </div>
    `,
})
export class DrawerNavItemComponent {
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape = 'round';
    @Input() chevron = false;
    @Input() collapseIcon: string;
    @Input() divider = true;
    @Input() expandIcon: string;
    @Input() hasChildren = false;
    @Input() hidePadding: boolean;
    @Input() itemID: string;
    @Input() ripple = true;
    @Input() selected: boolean;
    @Input() showNestedNavItems = false;
    @Input() statusColor: string;
    @Input() subtitle: string;
    @Input() title: string;
    @Input() useCustomIconAnimation = true;
    toggled = false;

    toggleNestedNavItems(e: any): void {
        if (e) {
            e.stopPropagation();
        }
        this.showNestedNavItems = !this.showNestedNavItems;
        if (!this.toggled) this.toggled = !this.toggled;
    }
}
