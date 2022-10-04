import { Component } from '@angular/core';

export const WITHIN_TOOLBAR = `<mat-toolbar style="padding: 0 16px; height: 4rem; width: 300px" color="primary">
    <div class="mat-title">Toolbar Title</div>
    <blui-spacer></blui-spacer>
    <blui-user-menu avatarValue="AV" [(open)]="open">
        <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
            <blui-info-list-item (click)="open=false">
                <mat-icon blui-icon>exit_to_app</mat-icon>
                <div blui-title>Log Out</div>
            </blui-info-list-item>
        </mat-nav-list>
    </blui-user-menu> 
</mat-toolbar>
`;

@Component({
    selector: 'app-in-toolbar-user-menu-demo',
    template: WITHIN_TOOLBAR,
})
export class WithinToolbarComponent {
    open = false;
    items = [
        {
            title: 'Settings',
            icon: 'settings',
        },
        {
            title: 'Contact Us',
            icon: 'mail',
        },
        {
            title: 'Log Out',
            icon: 'logout',
        },
    ];
}
