import { Component, ViewChild } from '@angular/core';
import { DrawerComponent } from '@brightlayer-ui/angular-components';

export const WITH_NESTED_ITEMS = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Locations" [hidePadding]="true">
                <blui-drawer-nav-item title="By Type"></blui-drawer-nav-item> 
                <blui-drawer-nav-item title="By State"></blui-drawer-nav-item> 
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Reports" [hidePadding]="true">
                <blui-drawer-nav-item title="Local"></blui-drawer-nav-item> 
                <blui-drawer-nav-item title="Regional"></blui-drawer-nav-item> 
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Users" [hidePadding]="true">
            </blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-nav-item-with-nested-items-demo',
    template: WITH_NESTED_ITEMS,
})
export class WithNestedItemsComponent {
    @ViewChild(DrawerComponent) drawer;

    ngAfterViewInit(): void {
        this.drawer.openOnHover = false;
    }
}
