import { Component } from '@angular/core';

export const MENU_HEADER = `<blui-user-menu 
    avatarValue="MH" 
    menuTitle="Sample Title"
    menuSubtitle="Sample Subtitle"
    [(open)]="open">
    <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
        <blui-info-list-item (click)="open=false">
            <mat-icon blui-icon>settings</mat-icon>
            <div blui-title>Settings</div>
        </blui-info-list-item>
    </mat-nav-list>
</blui-user-menu> 
`;

@Component({
    selector: 'app-menu-header-user-menu-demo',
    template: MENU_HEADER,
})
export class MenuHeaderComponent {
    open = false;
}
