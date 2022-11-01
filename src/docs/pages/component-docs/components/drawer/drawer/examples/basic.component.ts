import { Component } from '@angular/core';

export const BASIC = `<blui-drawer style="width: 250px">
    <blui-drawer-header title="Title"></blui-drawer-header>
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
    selector: 'app-basic-drawer-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
