import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-drawer-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-layout">
            <div id="pxb-drawer-layout-drawer-wrapper" class="pxb-drawer-layout-drawer-wrapper">
                <ng-content select="[drawer]"></ng-content>
            </div>
            <div id="pxb-drawer-layout-content-wrapper" class="pxb-drawer-layout-content-wrapper">
                <ng-content select="[content]"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer-layout.component.scss'],
})
export class DrawerLayoutComponent {
    @Input() drawerOpen: boolean;
}
