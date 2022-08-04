import { Component } from '@angular/core';

export const SPACER = `<blui-drawer style="width: 250px; height: 350px">
    <blui-drawer-body>
        <blui-drawer-nav-group title="Group 1">
            <blui-drawer-nav-item title="Item 1"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
        <blui-spacer></blui-spacer>
        <mat-divider></mat-divider>
        <blui-drawer-nav-group title="Group 2">
            <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 4"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-spacer-between-nav-group-demo',
    template: SPACER,
})
export class WithSpacerComponent {}
