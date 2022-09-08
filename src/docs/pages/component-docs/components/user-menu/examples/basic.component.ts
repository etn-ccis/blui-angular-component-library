import { Component } from '@angular/core';

export const BASIC = `<blui-user-menu avatarValue="AV" [(open)]="open">
    <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
        <blui-info-list-item (click)="open=false">
            <mat-icon blui-icon>settings</mat-icon>
            <div blui-title>Settings</div>
        </blui-info-list-item>
    </mat-nav-list>
</blui-user-menu> 
`;
 
@Component({
    selector: 'app-basic-user-menu-demo',
    template: BASIC,
})
export class BasicExampleComponent {
    open = false;
}
