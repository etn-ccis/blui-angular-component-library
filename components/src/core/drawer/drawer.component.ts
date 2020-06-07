import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges, OnInit,
    ViewEncapsulation
} from '@angular/core';
import { DrawerService } from './service/drawer.service';
import { StateListener } from './state-listener.component';
import { Subscription } from 'rxjs';

export type VariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer" [class.collapse]="!open && !tempOpen">
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="pxb-drawer-header"></ng-content>
            <div class="pxb-drawer-hover-area" (mouseenter)="hoverDrawer()" (mouseleave)="unhoverDrawer()">
                <ng-content select="pxb-drawer-subheader"></ng-content>
                <ng-content select="pxb-drawer-body"></ng-content>
                <ng-content select="pxb-drawer-footer"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent extends StateListener implements OnInit, OnChanges{
    @Input() variant: VariantType;
    @Input() open: boolean;

    hoverDelay: any;
    tempOpen = false; // Is the drawer being hovered and needs opened?
    drawerSelectionListener: Subscription;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngOnInit(): void {
        this.drawerService.setDrawerOpen(this.open);
        this.listenForDrawerChanges();
        this.listenForDrawerSelection();
    }

    // This broadcasts changes to all of the drawer state listeners.
    ngOnChanges(): void {
        this.drawerService.setDrawerOpen(this.open);
    }

    hoverDrawer(): void {
        if (!this.open) {
            this.hoverDelay = setTimeout(() => {
                this.tempOpen = true;
                this.drawerService.setDrawerOpen(true);
                this.changeDetector.detectChanges();
            }, 500);
        }
    }

    unhoverDrawer(): void {
        clearTimeout(this.hoverDelay);
        if (this.tempOpen) {
            this.tempOpen = false;
            this.drawerService.setDrawerOpen(false);
            this.changeDetector.detectChanges();
        }
    }

    // Close drawer on selection if drawer is only temporarily opened.
    private listenForDrawerSelection(): void {
        this.drawerSelectionListener = this.drawerService.drawerSelectionChanges().subscribe(() => {
            if (this.tempOpen) {
                this.drawerService.setDrawerOpen(false);
                this.tempOpen = false;
                this.changeDetector.detectChanges();
            }
        });
    }
}
