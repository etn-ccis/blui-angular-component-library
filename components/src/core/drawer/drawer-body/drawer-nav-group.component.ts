import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { DrawerNavItem } from '../drawer-nav-item/public-api';

@Component({
    selector: 'pxb-drawer-nav-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .pxb-drawer-nav-group .mat-list-base {
        height: 48px;
        line-height: 3rem;
        font-weight: 600;
        padding-top: 0;
    }
  `],
    template: `
        <div class="pxb-drawer-nav-group">
            <mat-list>
                <mat-list-item *ngIf="drawerOpen">{{ title }}</mat-list-item>
            </mat-list>
            <mat-divider></mat-divider>
            <ng-content select="pxb-drawer-nav-item"></ng-content>
        </div>
    `,
})
export class DrawerNavGroupComponent {
    @Input() title: string;
    @Input() drawerOpen = true;
}

export type DrawerNavGroup = {
    title: string;
    items: DrawerNavItem[];
};
