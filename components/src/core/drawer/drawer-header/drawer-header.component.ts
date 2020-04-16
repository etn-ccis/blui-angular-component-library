import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pxb-drawer-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="pxb-drawer-header-toolbar">
            <div *ngIf="icon || passiveIcon" class="pxb-drawer-header-icon-wrapper">
                <button *ngIf="icon" mat-icon-button class="pxb-drawer-header-icon-button" (click)="onIconClick.emit($event)">
                    <mat-icon>{{icon}}</mat-icon>
                </button>

                <div *ngIf="passiveIcon" class="pxb-drawer-header-non-clickable-icon">
                    <mat-icon>{{passiveIcon}}</mat-icon>
                </div>
            </div>

            <div *ngIf="!titleContentWrapper.innerHTML.trim()" class="pxb-drawer-header-wrapper">
                <div *ngIf="title" class="pxb-drawer-header-title">
                    {{title}}
                </div>

                <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">
                    {{subtitle}}
                </div>
            </div>

            <div #titleContentWrapper class="pxb-drawer-header-title-content">
                <ng-content select="[titleContent]"></ng-content>
            </div>
        </mat-toolbar>
    `,
    styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent {
    @Input() icon: string;
    @Input() passiveIcon: string;
    @Input() subtitle: string;
    @Input() title: string;
    @Output() onIconClick: EventEmitter<Event> = new EventEmitter();
}
