import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * [ToolbarMenu Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-toolbar-menu--readme)
 *
 * The `<blui-toolbar-menu>` component is used to display a toolbar with a dropdown.
 */
@Component({
    selector: 'blui-toolbar-menu',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar fxLayout="row" class="blui-toolbar-menu-content" [color]="color">
            <div class="blui-toolbar-menu-icon-wrapper">
                <ng-content select="[blui-nav-icon]"></ng-content>
            </div>
            <div *ngIf="title" class="blui-toolbar-menu-text-content-container">
                <div class="blui-toolbar-menu-title mat-title">{{ title }}</div>
                <div
                    *ngIf="subtitle"
                    class="blui-toolbar-menu-subtitle-container mat-subheading-2"
                    [matMenuTriggerFor]="ToolbarMenuMenu"
                    #menuTrigger="matMenuTrigger"
                >
                    <span class="blui-toolbar-menu-subtitle mat-subheading-2">{{ subtitle }}</span>
                    <mat-icon
                        class="blui-toolbar-menu-subtitle-icon"
                        [class.rotated-dropdown-arrow]="menuTrigger.menuOpen"
                        >arrow_drop_down</mat-icon
                    >
                </div>
            </div>
            <ng-content></ng-content>
            <mat-menu #ToolbarMenuMenu="matMenu" [overlapTrigger]="false" class="blui-toolbar-menu-menu-wrapper">
                <ng-content select="[blui-toolbar-menu]"></ng-content>
            </mat-menu>
        </mat-toolbar>
    `,
    styleUrls: ['./toolbar-menu.component.scss'],
    host: {
        class: 'blui-toolbar-menu',
    },
})
export class ToolbarMenuComponent {
    /** The text to display for title */
    @Input() title: string;
    /** The text to display subtitle */
    @Input() subtitle: string;
    /** Mat toolbar color variant */
    @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
    @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
}
