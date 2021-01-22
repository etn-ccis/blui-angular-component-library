import { items } from './with-basic-config.stories';
import { getDirection } from '@pxblue/storybook-rtl-addon';
import { invertRTL } from '../../src/utils';

export const withinToolbar = (): any => ({
    template: `
        <div>
            <mat-toolbar style="padding: 0px 16px">
                <h2>Toolbar Title</h2>
                <pxb-spacer></pxb-spacer>
                <pxb-user-menu menuTitle="Jane Doe" menuSubtitle="Account Manager" [(open)]="open">
                    <mat-icon pxb-avatar>person</mat-icon>
                    <mat-icon pxb-menu-avatar>person</mat-icon>
                    <div pxb-menu-body>
                         <mat-nav-list [style.paddingTop.px]="0">
                            <pxb-info-list-item *ngFor="let item of items" [dense]="true" 
                                (click)="open=false; item.onSelect();">
                                <mat-icon pxb-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                                <div pxb-title>{{item.title}}</div>
                            </pxb-info-list-item>
                        </mat-nav-list>
                        <mat-divider></mat-divider>
                        <div style="padding: 16px; font-size: 12px" 
                            [style.textAlign]="direction() === 'rtl' ? 'left' : 'right'">
                            v1.03.54
                        </div>
                    </div>
                </pxb-user-menu> 
            </mat-toolbar>
            <div style="font-size: 16px; padding: 16px; height: 100px;">Body Content Goes Here</div>
        </div>
    `,
    props: {
        open: false,
        items: items,
        direction: getDirection,
        invertRTL: invertRTL,
    },
});
