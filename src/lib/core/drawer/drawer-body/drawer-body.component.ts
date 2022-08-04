import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { DrawerStateManagerService, StateListener } from '../state-listener.component';

/**
 * The `<blui-drawer-body>` is a wrapper for the main content of the Drawer.
 * The typical use case is to display `<blui-drawer-nav-group>` elements, but custom elements (e.g., for spacing) are accepted as well.
 */
@Component({
    selector: 'blui-drawer-body',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="blui-drawer-body-content" [class.blui-drawer-body-closed]="!isOpen()">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            .blui-drawer-body-content {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            .blui-drawer-body-closed {
                overflow: hidden;
            }
        `,
    ],
    host: {
        class: 'blui-drawer-body',
    },
})
export class DrawerBodyComponent extends StateListener {
    constructor(stateManagerService: DrawerStateManagerService, changeDetectorRef: ChangeDetectorRef) {
        super(stateManagerService, changeDetectorRef);
    }
}
