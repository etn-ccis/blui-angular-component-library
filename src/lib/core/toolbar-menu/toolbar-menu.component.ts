import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatLegacyMenuTrigger as MatMenuTrigger } from '@angular/material/legacy-menu';

/**
 * [ToolbarMenu Component]()
 *
 * The `<blui-toolbar-menu>` component is used to display a menu within a toolbar.
 */
@Component({
    selector: 'blui-toolbar-menu',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="blui-toolbar-icon-wrapper">
            <ng-content select="[blui-icon]"></ng-content>
        </div>
        <div [matMenuTriggerFor]="toolbarMenu" #menuTrigger="matMenuTrigger" class="blui-toolbar-menu-trigger">
            <div class="blui-toolbar-menu-label mat-body-1">{{ label }}</div>
            <mat-icon class="blui-toolbar-menu-toggle-icon" [class.blui-rotated-dropdown-arrow]="menuTrigger.menuOpen"
                >arrow_drop_down</mat-icon
            >
        </div>
        <mat-menu #toolbarMenu="matMenu" [overlapTrigger]="false" class="blui-toolbar-menu-menu-wrapper">
            <ng-content select="[blui-toolbar-menu-items]"></ng-content>
        </mat-menu>
    `,
    styleUrls: ['./toolbar-menu.component.scss'],
    host: {
        class: 'blui-toolbar-menu',
    },
})
export class ToolbarMenuComponent {
    /** The text to display for label */
    @Input() label: string;
    @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
}
