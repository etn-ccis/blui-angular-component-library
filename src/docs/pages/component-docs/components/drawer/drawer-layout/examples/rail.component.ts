import { Component } from '@angular/core';

export const RAIL = `<blui-drawer-layout variant="rail" class="rail-example">
    <blui-drawer blui-drawer [open]="true">
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item title="Devices" [divider]="true">
                    <mat-icon blui-icon>devices</mat-icon>
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Locations" [divider]="true">                    
                    <mat-icon blui-icon>place</mat-icon>
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Legal">            
                    <mat-icon blui-icon>gavel</mat-icon>
                </blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>
    <div blui-content style="padding: 1rem">
        App Content Here.
    </div>
</blui-drawer-layout>
`;

@Component({
    selector: 'app-rail-drawer-layout-demo',
    template: RAIL,
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
            }
        `,
    ],
})
export class RailVariantExampleComponent {}
