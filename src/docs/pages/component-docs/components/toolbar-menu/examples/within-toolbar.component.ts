import { Component } from '@angular/core';

export const WITHIN_TOOLBAR = `<mat-toolbar color="primary" style="width: 300px">
    <button mat-icon-button style="margin: 0 24px 0 -8px">
        <mat-icon>menu</mat-icon>
    </button>
    <div>
        <div class="mat-title" style="line-height: 1rem; margin-top: 6px">Title</div>
        <blui-toolbar-menu label="Subtitle">
            <ng-container blui-toolbar-menu-items>
                <button mat-menu-item>Menu Item 1</button>
                <button mat-menu-item>Menu Item 2</button>
                <button mat-menu-item>Menu Item 3</button>
            </ng-container>
        </blui-toolbar-menu> 
    </div>
</mat-toolbar>
`;

@Component({
    selector: 'app-within-toolbar-toolbar-menu-demo',
    template: WITHIN_TOOLBAR,
})
export class WithinToolbarComponent {}
