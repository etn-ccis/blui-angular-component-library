import { Component } from '@angular/core';

export const WITH_ICON = `<blui-drawer style="width: 250px">
    <blui-drawer-header title="Title">
        <button mat-icon-button blui-icon>
            <mat-icon>menu</mat-icon>
        </button>
    </blui-drawer-header> 
</blui-drawer>
`;

@Component({
    selector: 'app-with-icon-drawer-header-demo',
    template: WITH_ICON,
})
export class WithIconComponent {}
