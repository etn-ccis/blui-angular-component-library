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
</blui-drawer>
`;

@Component({
    selector: 'app-basic-drawer-nav-item-demo',
    template: BASIC,
})
export class BasicExampleComponent {
    @ViewChild(DrawerComponent) drawer;

    ngAfterViewInit(): void {
        this.drawer.openOnHover = false;
    }
}
