import { Component } from '@angular/core';

export const WITH_NESTED_ITEMS = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Locations">
                <mat-icon blui-icon>place</mat-icon> 
                <blui-drawer-nav-item title="By Type"></blui-drawer-nav-item> 
                <blui-drawer-nav-item title="By State"></blui-drawer-nav-item> 
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Reports">
                <mat-icon blui-icon>summarize</mat-icon>  
                <blui-drawer-nav-item title="Local"></blui-drawer-nav-item> 
                <blui-drawer-nav-item title="Regional"></blui-drawer-nav-item> 
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Users">
                <mat-icon blui-icon>supervisor_account</mat-icon>
            </blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-nav-item-with-nested-items-demo',
    template: WITH_NESTED_ITEMS,
})
export class WithNestedItemsComponent {}
