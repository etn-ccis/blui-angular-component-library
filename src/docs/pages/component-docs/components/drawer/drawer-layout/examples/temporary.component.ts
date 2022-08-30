import {Component} from '@angular/core';

export const TEMPORARY = `<blui-drawer-layout variant="temporary" (backdropClick)="open=false">
    <blui-drawer blui-drawer [open]="open">
        <blui-drawer-header title="Title">
            <button mat-icon-button blui-icon (click)="open=!open">
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header> 
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item title="Dashboard"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Locations"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Legal"></blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>
    <div blui-content>
        <mat-toolbar color="primary">
            <button style="margin-left: -8px" mat-icon-button blui-icon (click)="open=!open">
                <mat-icon>menu</mat-icon>
            </button>
            <div style="margin-left: 8px">Toolbar</div>
        </mat-toolbar>
        <div style="padding: 1rem">
            App Content Here.
        </div>
    </div>
</blui-drawer-layout>
`;

@Component({
    selector: 'app-temporary-drawer-layout-demo',
    template: TEMPORARY,
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
            }
        `,
    ],
})
export class TemporaryVariantExampleComponent {
    open = false;
}
