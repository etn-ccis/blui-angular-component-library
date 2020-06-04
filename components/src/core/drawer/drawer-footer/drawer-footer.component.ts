import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {DrawerService} from '../service/drawer.service';
import {StateListener} from "../state-listener.component";

@Component({
    selector: 'pxb-drawer-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-footer">
            <ng-content></ng-content>
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
