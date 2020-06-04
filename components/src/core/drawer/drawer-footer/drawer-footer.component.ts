import { ChangeDetectionStrategy, Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import {StateListener} from "../state-listener.component";

@Component({
    selector: 'pxb-drawer-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-footer">
            <div
                [class.pxb-drawer-footer-open]="drawerOpen"
                [class.pxb-drawer-footer-closed]="!drawerOpen"
                class="pxb-drawer-footer-content-wrapper"
            >
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer-footer.component.scss'],
})
export class DrawerFooterComponent extends StateListener {
    drawerOpen: boolean;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
