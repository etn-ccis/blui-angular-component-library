import { Component } from '@angular/core';

export const PERSISTENT = `
<blui-drawer-layout variant="persistent">
    <blui-drawer blui-drawer [open]="open">
        <blui-drawer-header title="Title">
            <button mat-icon-button blui-icon (click)="open=!open">
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header> 
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item title="Dashboard">
                    <mat-icon blui-icon>dashboard</mat-icon>
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Locations">                    
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
    selector: 'app-persistent-drawer-layout-demo',
    template: PERSISTENT,
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
            }
        `,
    ],
})
export class PersistentVariantExampleComponent {
    open = true;
}
