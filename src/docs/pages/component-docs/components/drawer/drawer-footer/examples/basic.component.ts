import { Component, ViewChild } from '@angular/core';
import { DrawerComponent } from '@brightlayer-ui/angular-components';

export const BASIC = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Dashboard"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Locations"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Legal"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
    <blui-drawer-footer [hideContentOnCollapse]="false">
        <div style="padding: 16px">
            <div style="margin-bottom: 8px">
                <div class="mat-hint mat-caption">v2.4.0</div>
                <div class="mat-hint mat-caption">10:33:05 03/12/22</div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center">
                <img src="assets/eaton-condensed.png" width="100" style="margin-left: -8px" />
                <div>
                    <div class="mat-caption">Copyright © Eaton</div>
                    <div class="mat-caption">All Rights Reserved</div>
                </div>
            </div>  
        </div>
    </blui-drawer-footer>
</blui-drawer>
`;

@Component({
    selector: 'app-basic-drawer-footer-demo',
    template: BASIC,
})
export class BasicExampleComponent {
    @ViewChild(DrawerComponent) drawer;

    ngAfterViewInit(): void {
        this.drawer.openOnHover = false;
    }
}
