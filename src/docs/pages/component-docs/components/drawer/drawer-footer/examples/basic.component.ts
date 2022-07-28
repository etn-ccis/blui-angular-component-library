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
        <div style="height: 56px; display: flex; align-items: center; justify-content: center">
            <i class="blui-eaton" style="font-size: 56px;"></i>
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
