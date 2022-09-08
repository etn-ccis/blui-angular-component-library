import { Component } from '@angular/core';

export const WITHIN_TOOLBAR = `<div>
    <ng-template #avatar>
        <mat-icon>person</mat-icon>
    </ng-template>
    <mat-toolbar style="padding: 0 16px; height: 4rem;" color="primary">
        <div class="mat-title">Toolbar Title</div>
        <blui-spacer></blui-spacer>
        <blui-user-menu menuTitle="Jane Doe" menuSubtitle="Account Manager" [(open)]="open">
            <template blui-avatar [ngTemplateOutlet]="avatar"></template>
            <template blui-menu-avatar [ngTemplateOutlet]="avatar"></template>
            <div blui-menu-body>
                 <mat-nav-list [style.paddingTop.px]="0">
                    <blui-info-list-item *ngFor="let item of items" [dense]="true" 
                        (click)="open=false">
                        <mat-icon blui-icon>{{item.icon}}</mat-icon>
                        <div blui-title>{{item.title}}</div>
                    </blui-info-list-item>
                </mat-nav-list>
                <mat-divider></mat-divider>
                <div style="padding: 0 16px; font-size: 12px; line-height: 40px; height: 40px" 
                    v1.03.54
                </div>
            </div>
        </blui-user-menu> 
    </mat-toolbar>
    <div style="padding: 16px; height: 100px;" class="mat-body-1">Body Content Goes Here</div>
</div>
`;
 
@Component({
    selector: 'app-non-text-avatar-user-menu-demo',
    template: WITHIN_TOOLBAR,
})
export class WithinToolbarComponent {
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
