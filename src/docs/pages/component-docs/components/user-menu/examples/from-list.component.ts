import { Component } from '@angular/core';

export const FROM_LIST = `<blui-user-menu avatarValue="AV" [(open)]="open">
    <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
        <blui-info-list-item *ngFor="let item of items" [dense]="true" (click)="open = false">
            <mat-icon blui-icon>{{item.icon}}</mat-icon>
            <div blui-title>{{item.title}}</div>
        </blui-info-list-item>
    </mat-nav-list>
</blui-user-menu> 
`;
 
@Component({
    selector: 'app-from-list-user-menu-demo',
    template: FROM_LIST,
})
export class FromListComponent {
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
