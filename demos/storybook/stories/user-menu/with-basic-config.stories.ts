import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { invertRTL } from '../../src/utils';

export const items = [
    {
        title: 'Settings',
        icon: 'settings',
        onSelect: action('Selected: Settings'),
    },
    {
        title: 'Contact Us',
        icon: 'mail',
        onSelect: action('Selected: Contact Us'),
    },
    {
        title: 'Log Out',
        icon: 'logout',
        onSelect: action('Selected: Log Out'),
    },
];

export const withBasicConfig = (): any => ({
    template: `
        <pxb-user-menu [avatarValue]="avatarValue" [(open)]="open">
            <mat-nav-list pxb-menu-body [style.paddingTop.px]="0">
                <pxb-info-list-item *ngFor="let item of items" [dense]="true" 
                    (click)="open=false; item.onSelect();">
                    <mat-icon pxb-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                    <div pxb-title>{{item.title}}</div>
                </pxb-info-list-item>
            </mat-nav-list>
        </pxb-user-menu> 
    `,
    props: {
        open: false,
        items: items,
        avatarValue: text('avatarValue', 'AV'),
        invertRTL: invertRTL,
    },
});
