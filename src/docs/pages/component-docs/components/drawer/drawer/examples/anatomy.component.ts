import { Component } from '@angular/core';

export const ANATOMY = `<blui-drawer style="width: 250px">
    <blui-drawer-header title="Header"></blui-drawer-header>
    <blui-drawer-subheader>
        <div style="padding: 16px">Subheader Content Here</div>
    </blui-drawer-subheader>
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Item 1"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
    <blui-drawer-footer>
        <div style="padding: 16px">Footer Content Here</div>
    </blui-drawer-footer>
</blui-drawer>
`;

@Component({
    selector: 'app-anatomy-drawer-demo',
    template: ANATOMY,
})
export class AnatomyComponent {}
