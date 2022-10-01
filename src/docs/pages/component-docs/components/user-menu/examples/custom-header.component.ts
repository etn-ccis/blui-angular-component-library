import { Component } from '@angular/core';

export const CUSTOM_HEADER = `<blui-user-menu avatarImage="assets/trex.png" [(open)]="open">
    <div blui-menu-header>
        <div style="padding: 16px 8px 8px 8px; position: relative">
            <div class="header1">Welcome,</div>
            <div class="header2">T-Rex</div>
            <div [style.backgroundImage]="'url(assets/trex.png)'" class="overlay"></div>
        </div>
        <mat-divider></mat-divider>
    </div>
    <div blui-menu-body>
        <mat-nav-list [style.paddingTop.px]="0">
            <blui-info-list-item (click)="open=false" [hidePadding]="true" [dense]="true">
                <div blui-title>My Account</div>
            </blui-info-list-item>
            <blui-info-list-item (click)="open=false" [hidePadding]="true" [dense]="true">
                <div blui-title>Logout</div>
            </blui-info-list-item>
        </mat-nav-list>
    </div>
</blui-user-menu> 
`;

@Component({
    selector: 'app-custom-header-user-menu-demo',
    template: CUSTOM_HEADER,
    styles: [
        `
            .header1 {
                margin: 0;
                font-size: 18px;
                font-weight: 600;
            }
            .header2 {
                margin: 0;
                margin-top: -8px;
                font-size: 42px;
                font-weight: 600;
            }
            .overlay {
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                opacity: 0.2;
                z-index: -1;
            }
        `,
    ],
})
export class CustomHeaderComponent {
    open = false;
}
