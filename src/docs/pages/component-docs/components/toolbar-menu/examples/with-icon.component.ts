import { Component } from '@angular/core';

export const WITH_ICON = `<blui-toolbar-menu label="My Home">
    <mat-icon blui-icon>home</mat-icon>
    <ng-container blui-toolbar-menu-items>
        <button mat-menu-item>London</button>
        <button mat-menu-item>New York</button>
        <button mat-menu-item>New Haven</button>
    </ng-container>
</blui-toolbar-menu> 
`;

@Component({
    selector: 'app-with-icon-toolbar-menu-demo',
    template: WITH_ICON,
})
export class WithIconComponent {}
