import { Component } from '@angular/core';

export const PERMANENT = `<blui-drawer-layout variant="permanent">
    <blui-drawer blui-drawer>
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item title="Dashboard"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Locations"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Legal"></blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>
    <div blui-content style="padding: 1rem">
        App Content Here.
    </div>
</blui-drawer-layout>
`;

@Component({
    selector: 'app-permanent-drawer-layout-demo',
    template: PERMANENT,
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
            }
        `,
    ],
})
export class PermanentVariantExampleComponent {}
