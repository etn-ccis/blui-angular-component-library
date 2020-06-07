import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-drawer-body',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-body">
            <ng-content></ng-content> 
        </div>
    `,
    styles: [
        `
            .pxb-drawer-body {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        `
    ],
})
export class DrawerBodyComponent {}
