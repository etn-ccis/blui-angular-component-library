import { Component } from '@angular/core';

export const MULTIPLE_GROUPS = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group title="Locations" [divider]="true">
            <blui-drawer-nav-item title="Regional"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="National"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
        <blui-drawer-nav-group title="Status" [divider]="true">
            <blui-drawer-nav-item title="Network"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Node"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-multiple-groups-nav-group-demo',
    template: MULTIPLE_GROUPS,
})
export class MultipleGroupsComponent {}
