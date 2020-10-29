import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';

@Component({
    selector: 'pxb-drawer-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="pxb-drawer-footer-content"
            [style.visibility]="hideOnCollapse ? (isOpen() ? 'visible' : 'hidden') : 'visible'"
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
    @Input() divider = true;
    @Input() hideOnCollapse = true;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
