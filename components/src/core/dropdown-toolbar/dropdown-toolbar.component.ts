import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { isEmptyView } from '../../utils/utils';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'pxb-dropdown-toolbar',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar fxLayout="row" class="pxb-dropdown-toolbar">
            <div
                #icon
                class="pxb-dropdown-toolbar-icon-wrapper"
                [class.pxb-dropdown-toolbar-no-icon]="isIconEmpty(iconEl)"
            >
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
                    <mat-icon class="dropdown-arrow" [class.rotated-dropdown-arrow]="menuTrigger.menuOpen"
                        >arrow_drop_down</mat-icon
                    >
                </div>
            </div>
            <pxb-spacer></pxb-spacer>
            <ng-content></ng-content>
            <mat-menu #dropdownToolbarMenu="matMenu" [overlapTrigger]="false" class="pxb-dropdown-toolbar-menu-wrapper">
                <ng-content select="[pxb-toolbar-menu]"></ng-content>
            </mat-menu>
        </mat-toolbar>
    `,
    styleUrls: ['./dropdown-toolbar.component.scss'],
})
export class DropdownToolbarComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @ViewChild('icon', { static: true }) iconEl: ElementRef;
    @ViewChild('menuTrigger', { static: true }) menuTrigger: MatMenuTrigger;

    isIconEmpty = (el: ElementRef): boolean => isEmptyView(el);
}
