import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';

@Component({
    selector: 'pxb-drawer-subheader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-subheader">
            <div class="pxb-drawer-subheader-content-wrapper" [class.pxb-drawer-subheader-closed]="!drawerOpen">
                <ng-content></ng-content>
            </div>
        </div>
        <mat-divider></mat-divider>
    `,
    styleUrls: ['./drawer-subheader.component.scss'],
})
export class DrawerSubheaderComponent extends StateListener {
    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
