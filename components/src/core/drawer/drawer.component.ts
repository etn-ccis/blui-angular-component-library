import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ChangeDetectorRef,
} from '@angular/core';
import { DrawerService } from './service/drawer.service';
import {StateListener} from "./state-listener.component";
import {Subscription} from "rxjs";

export type VariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer" [class.collapse]="!open">
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="pxb-drawer-header"></ng-content>
            <ng-content select="pxb-drawer-subheader"></ng-content>
            <ng-content select="pxb-drawer-body"></ng-content>
            <ng-content select="pxb-drawer-footer"></ng-content>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent extends StateListener {
    @Input() variant: VariantType;
    @Input() open: boolean;
    drawerOpenListener: Subscription;

    @Output() drawerOpenChange: EventEmitter<boolean> = new EventEmitter();

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngOnInit(): void {
        this.drawerService.setDrawerOpen(this.open);
        this.listenForDrawerChanges();
    }

    // This broadcasts changes to all of the drawer state listeners.
    ngOnChanges(): void {
        this.drawerService.setDrawerOpen(this.open);
    }

    hoverDrawer(): void {
        const openDrawer = (): void => {
            this.open = true;
            this.onDrawerOpenChange();
        };

        if (this.variant === 'persistent') {
            if (this.open) {
                return;
            }
            setTimeout(openDrawer, 300);
        }
    }

    unhoverDrawer(): void {
        if (this.variant === 'persistent') {
            this.open = false;
            this.onDrawerOpenChange();
        }
    }

    onDrawerOpenChange(): void {
        if (this.variant === 'persistent') {
            this.drawerOpenChange.emit(this.open);
        }
    }
}
