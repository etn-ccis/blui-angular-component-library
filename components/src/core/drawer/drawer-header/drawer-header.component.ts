import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-drawer-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="pxb-drawer-header">
            <div class="pxb-drawer-header-background"></div>
            <div class="pxb-drawer-header-icon-wrapper">
                <ng-content select="[icon]"></ng-content>
            </div>

            <div *ngIf="!titleContentWrapper.innerHTML.trim()" class="pxb-drawer-header-title-wrapper">
                <div *ngIf="title" class="pxb-drawer-header-title">
                    {{ title }}
                </div>

                <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">
                    {{ subtitle }}
                </div>
            </div>

            <div #titleContentWrapper class="pxb-drawer-header-title-content-wrapper">
                <ng-content select="[titleContent]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider></mat-divider>
    `,
    styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent {
    @Input() subtitle: string;
    @Input() title: string;
}
