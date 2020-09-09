import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'pxb-dropdown-toolbar',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar fxLayout="row" class="pxb-dropdown-toolbar-content">
            <div class="pxb-dropdown-toolbar-icon-wrapper">
                <ng-content select="[pxb-nav-icon]"></ng-content>
            </div>
            <div *ngIf="title" class="pxb-dropdown-toolbar-text-content-container">
                <div class="pxb-dropdown-toolbar-title mat-title">{{ title }}</div>
                <div
                    *ngIf="subtitle"
                    class="pxb-dropdown-toolbar-subtitle-container mat-subheading-2"
                    [matMenuTriggerFor]="dropdownToolbarMenu"
                    #menuTrigger="matMenuTrigger"
                >
                    <span class="pxb-dropdown-toolbar-subtitle mat-subheading-2">{{ subtitle }}</span>
                    <mat-icon [class.rotated-dropdown-arrow]="menuTrigger.menuOpen">arrow_drop_down</mat-icon>
                </div>
            </div>
            <ng-content></ng-content>
            <mat-menu #dropdownToolbarMenu="matMenu" [overlapTrigger]="false" class="pxb-dropdown-toolbar-menu-wrapper">
                <ng-content select="[pxb-toolbar-menu]"></ng-content>
            </mat-menu>
        </mat-toolbar>
    `,
    styleUrls: ['./dropdown-toolbar.component.scss'],
    host: {
        class: 'pxb-dropdown-toolbar'
    },
})
export class DropdownToolbarComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @ViewChild('menuTrigger', { static: false }) menuTrigger: MatMenuTrigger;
}
