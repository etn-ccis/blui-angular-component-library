import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';

/**
 * The `<pxb-drawer-footer>` is an optional section that renders at the bottom of the `<pxb-drawer>`.
 * It can be used to add any custom content (as children).
 */
@Component({
    selector: 'pxb-drawer-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="pxb-drawer-footer-content"
            [style.visibility]="hideContentOnCollapse ? (isOpen() ? 'visible' : 'hidden') : 'visible'"
        >
            <mat-divider *ngIf="divider"></mat-divider>
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./drawer-footer.component.scss'],
    host: {
        class: 'pxb-drawer-footer',
    },
})
export class DrawerFooterComponent extends StateListener {
    /** Whether to show a dividing line above the Footer
     *
     * @default true
     * */
    @Input() divider = true;
    /** Hide footer content when closed
     *
     * @default true
     * */
    @Input() hideContentOnCollapse = true;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
