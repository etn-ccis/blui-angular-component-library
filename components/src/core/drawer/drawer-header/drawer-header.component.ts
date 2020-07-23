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
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';
import { BidiComponent } from '../../utility/bidi.component';

@Component({
    selector: 'pxb-drawer-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="pxb-drawer-header" [class.pxb-rtl]="isRtl">
            <div class="pxb-drawer-header-background"></div>
            <div class="pxb-drawer-header-content">
                <div #icon class="pxb-drawer-header-icon-wrapper" [class.pxb-drawer-header-no-icon]="isEmpty(iconEl)">
                    <ng-content select="[pxb-icon]"></ng-content>
                </div>
                <div *ngIf="title" class="pxb-drawer-header-title-wrapper">
                    <div class="pxb-drawer-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content select="[pxb-title-content]"></ng-content>
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

    isEmpty = (el: ElementRef): boolean => isEmptyView(el);

    constructor(dir: Directionality, drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(dir, drawerService, changeDetectorRef);
    }
}
