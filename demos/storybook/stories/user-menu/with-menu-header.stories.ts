import { text } from '@storybook/addon-knobs';
import { items } from './with-basic-config.stories';

export const withMenuHeader = (): any => ({
    template: `
        <pxb-user-menu 
            [avatarValue]="avatarValue" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"
            [(open)]="open">
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
        avatarValue: text('avatarValue', 'AV'),
        items: items,
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
    },
});
