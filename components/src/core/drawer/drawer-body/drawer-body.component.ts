import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'pxb-drawer-body',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-body">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./drawer-body.component.scss'],
})
export class DrawerBodyComponent {
    @Input() drawerOpen = true;
}
