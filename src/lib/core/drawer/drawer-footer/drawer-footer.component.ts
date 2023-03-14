import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DrawerStateManagerService, StateListener } from '../state-listener.component';

/**
 * [DrawerFooter Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * The `<blui-drawer-footer>` is an optional section that renders at the bottom of the `<blui-drawer>`.
 * It can be used to add any custom content (as children).
 */
@Component({
    selector: 'blui-drawer-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-divider *ngIf="divider"></mat-divider>
        <div
            class="blui-drawer-footer-content"
            [style.visibility]="hideContentOnCollapse ? (isOpen() ? 'visible' : 'hidden') : 'visible'"
        >
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./drawer-footer.component.scss'],
    host: {
        class: 'blui-drawer-footer',
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

    constructor(stateManagerService: DrawerStateManagerService, changeDetectorRef: ChangeDetectorRef) {
        super(stateManagerService, changeDetectorRef);
    }
}
