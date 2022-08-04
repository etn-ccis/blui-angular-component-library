import { text } from '@storybook/addon-knobs';
import { items } from './with-basic-config.stories';
import { invertRTL } from '../../src/utils';

export const withMenuHeader = (): any => ({
    template: `
        <blui-user-menu 
            avatarValue="AV"
            [id]="id"
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"
            [(open)]="open">
            <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
                <blui-info-list-item *ngFor="let item of items" [dense]="true" 
                    (click)="open=false; item.onSelect();">
                    <mat-icon blui-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                    <div blui-title>{{item.title}}</div>
                </blui-info-list-item>
            </mat-nav-list>
    </blui-user-menu> 
    `,
    props: {
        open: false,
        items: items,
        id: 'my-awesome-menu',
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
        invertRTL: invertRTL,
    },
});
