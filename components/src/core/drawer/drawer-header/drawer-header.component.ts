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
        <mat-toolbar
            class="pxb-drawer-header-content"
            [class.rail]="isRail()"
            [color]="color"
            [class.pxb-drawer-header-no-icon]="isEmpty(iconEl)"
        >
            <div class="pxb-drawer-header-background"></div>
            <div class="pxb-drawer-header-text">
                <div #icon class="pxb-drawer-header-icon-wrapper">
                    <ng-content select="[pxb-icon]"></ng-content>
                </div>
                <div *ngIf="title" class="pxb-drawer-header-title-wrapper">
                    <div class="pxb-drawer-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content select="[pxb-title-content]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./drawer-header.component.scss'],
    host: {
        class: 'pxb-drawer-header',
    },
})
export class DrawerHeaderComponent extends StateListener {
    /** Mat toolbar color variant */
    @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
    /** Show a divider below footer */
    @Input() divider = false;
    /** The text to show on the second line */
    @Input() subtitle: string;
    /** The text to show on the first line */
    @Input() title: string;
    @ViewChild('icon', { static: true }) iconEl: ElementRef;

    isEmpty = (el: ElementRef): boolean => isEmptyView(el);

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    isRail(): boolean {
        return this.drawerService.getDrawerVariant() === 'rail';
    }
}
