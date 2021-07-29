import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';

/**
 * The `<pxb-drawer-subheader>` is an optional section that renders below the header and above the body of the `<pxb-drawer>`.
 * It can be used to support custom content (passed as children), such as filtering options or to display additional information.
 */
@Component({
    selector: 'pxb-drawer-subheader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="pxb-drawer-subheader-content"
            [style.visibility]="hideContentOnCollapse ? (isOpen() ? 'visible' : 'hidden') : 'visible'"
        >
            <ng-content></ng-content>
        </div>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./drawer-subheader.component.scss'],
    host: {
        class: 'pxb-drawer-subheader',
    },
})
export class DrawerSubheaderComponent extends StateListener {
    /** Whether to show a dividing line below the SubHeader
     *
     * @default true
     * */
    @Input() divider = true;
    /** Hide subheader content when drawer is collapsed
     *
     * @default true
     * */
    @Input() hideContentOnCollapse = true;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
