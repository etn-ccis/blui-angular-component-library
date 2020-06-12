import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
    ChangeDetectorRef,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';
import { isEmptyView } from '../../../utils/utils';

@Component({
    selector: 'pxb-drawer-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="pxb-drawer-header">
            <div class="pxb-drawer-header-background"></div>
            <div class="pxb-drawer-header-content">
                <div #icon class="pxb-drawer-header-icon-wrapper" [class.pxb-drawer-header-no-icon]="isEmpty(iconEl)">
                    <ng-content select="[pxb-icon]"></ng-content>
                </div>
                <div *ngIf="title" class="pxb-drawer-header-title-wrapper">
                    <div class="pxb-drawer-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content select="[titleContent]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider></mat-divider>
    `,
    styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent extends StateListener {
    @Input() subtitle: string;
    @Input() title: string;
    @ViewChild('icon', { static: true }) iconEl: ElementRef;

    isEmpty = (el): boolean => isEmptyView(el);

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
