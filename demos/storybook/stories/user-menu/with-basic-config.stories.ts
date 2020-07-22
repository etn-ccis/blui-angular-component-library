import { text } from '@storybook/addon-knobs';

export const items = [
    {
        title: 'Account',
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

export const withBasicConfig = (): any => ({
    template: `
        <pxb-user-menu [avatarValue]="avatarValue" [(open)]="open">
            <mat-nav-list pxb-body [style.paddingTop.px]="0">
                <pxb-info-list-item *ngFor="let item of items" [dense]="true" (click)="open=false">
                    <mat-icon pxb-icon>{{item.icon}}</mat-icon>
                    <div pxb-title>{{item.title}}</div>
                </pxb-info-list-item>
            </mat-nav-list>
        </pxb-user-menu> 
    `,
    props: {
        open: false,
        items: items,
        avatarValue: text('avatarValue', 'AV'),
    },
});
