import { Component } from '@angular/core';

export const BASIC = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Dashboard"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Locations"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Legal"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
    <blui-drawer-footer [hideContentOnCollapse]="false">
        <div style="padding: 16px">Footer Content Here</div>
    </blui-drawer-footer>
</blui-drawer>
`;

@Component({
    selector: 'app-basic-drawer-footer-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
