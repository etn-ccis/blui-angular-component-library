import { text } from '@storybook/addon-knobs';

const items = [
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

export const withFullConfig = (): any => ({
    template: `
        <pxb-user-menu 
            [avatarValue]="avatarValue" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle">
            <mat-nav-list pxb-body [style.paddingTop.px]="0">
                <pxb-info-list-item *ngFor="let item of items" [dense]="true">
                    <mat-icon pxb-icon>{{item.icon}}</mat-icon>
                    <div pxb-title>{{item.title}}</div>
                </pxb-info-list-item>
            </mat-nav-list>
    </pxb-user-menu> 
    `,
    props: {
        items: items,
        avatarValue: text('avatarValue', 'AV'),
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
    },
});
