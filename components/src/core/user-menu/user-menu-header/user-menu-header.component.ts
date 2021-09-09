import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { isEmptyView } from '../../../utils/utils';

/**
 * [DrawerHeader Component](https://pxblue-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * The `<pxb-user-menu-header>` contains the content found at the top of the `<pxb-drawer>`.
 */
@Component({
    selector: 'pxb-user-menu-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar
            class="pxb-user-menu-header-content"
            [color]="color"
            [class.pxb-user-menu-header-no-icon]="isEmpty(iconEl)"
        >
            <div class="pxb-user-menu-header-text">
                <div #icon class="pxb-user-menu-header-icon-wrapper">
                    <ng-content select="[pxb-icon]"></ng-content>
                </div>
                <div *ngIf="title" class="pxb-user-menu-header-title-wrapper">
                    <div class="pxb-user-menu-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" class="pxb-user-menu-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content select="[pxb-title-content]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./user-menu-header.component.scss'],
    host: {
        class: 'pxb-user-menu-header',
    },
})
export class UserMenuHeaderComponent {
    /** Mat toolbar color variant
     *
     * @default primary
     * */
    @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
    /** Show a divider below footer
     *
     * @default false
     * */
    @Input() divider = false;
    /** The text to show on the second line */
    @Input() subtitle: string;
    /** The text to show on the first line */
    @Input() title: string;

    @ViewChild('icon', { static: true }) iconEl: ElementRef;

    isEmpty = (el: ElementRef): boolean => isEmptyView(el);
}
