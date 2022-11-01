import { Component, Input, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { DrawerStateManagerService, StateListener } from '../state-listener.component';
import { isEmptyView } from '../../../utils/utils';

/**
 * [DrawerHeader Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * The `<blui-drawer-header>` contains the content found at the top of the `<blui-drawer>`.
 */
@Component({
    selector: 'blui-drawer-header',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar
            class="blui-drawer-header-content"
            [class.rail]="isRail()"
            [color]="color"
            [class.blui-drawer-header-no-icon]="isEmpty(iconEl)"
        >
            <div class="blui-drawer-header-background"></div>
            <div class="blui-drawer-header-text">
                <div #icon class="blui-drawer-header-icon-wrapper">
                    <ng-content select="[blui-icon]"></ng-content>
                </div>
                <div *ngIf="title" class="blui-drawer-header-title-wrapper">
                    <div class="blui-drawer-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" class="blui-drawer-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content select="[blui-title-content]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./drawer-header.component.scss'],
    host: {
        class: 'blui-drawer-header',
    },
})
export class DrawerHeaderComponent extends StateListener {
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

    constructor(stateManagerService: DrawerStateManagerService, changeDetectorRef: ChangeDetectorRef) {
        super(stateManagerService, changeDetectorRef);
    }

    isRail(): boolean {
        return this.drawerState.getDrawerVariant() === 'rail';
    }
}
