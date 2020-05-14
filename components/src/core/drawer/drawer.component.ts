import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'pxb-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="pxb-drawer">
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="pxb-drawer-header"></ng-content>
            <ng-content select="pxb-drawer-subheader"></ng-content>
            <ng-content select="pxb-drawer-body"></ng-content>
            <ng-content select="pxb-drawer-footer"></ng-content>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {}
