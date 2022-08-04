import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { isEmptyView } from '../../../utils/utils';

/**
 * [UserMenuHeaderComponent Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-user-menu--readme)
 *
 * The `<blui-user-menu-header>` is the menu header of the `<blui-user-menu>`.
 */
@Component({
    selector: 'blui-user-menu-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar
            class="blui-user-menu-header-content"
            [color]="color"
            [class.blui-user-menu-header-no-icon]="isEmpty(iconEl)"
        >
            <div class="blui-user-menu-header-text">
                <div #icon class="blui-user-menu-header-icon-wrapper">
                    <ng-content select="[blui-icon]"></ng-content>
                </div>
                <div *ngIf="title" class="blui-user-menu-header-title-wrapper">
                    <div id="{{id}}-title" class="blui-user-menu-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" id="{{id}}-subtitle" class="blui-user-menu-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content select="[blui-title-content]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./user-menu-header.component.scss'],
    host: {
        class: 'blui-user-menu-header',
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
    /** Menu id */
    @Input() id: string;

    @ViewChild('icon', { static: true }) iconEl: ElementRef;

    isEmpty = (el: ElementRef): boolean => isEmptyView(el);
}
