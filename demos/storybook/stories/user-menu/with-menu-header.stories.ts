import { text } from '@storybook/addon-knobs';
import { items } from './with-basic-config.stories';
import { invertRTL } from '../../src/utils';

export const withMenuHeader = (): any => ({
    template: `
        <pxb-user-menu 
            avatarValue="AV" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"
            [(open)]="open">
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
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
        invertRTL: invertRTL,
    },
});
