import { items } from './with-basic-config.stories';
import { invertRTL } from '../../src/utils';

const Trex = require('../../assets/trex.png');

export const withNonTextAvatar = (): any => ({
    styles: [
        `
        .non-text-avatar-container {
            display: flex; 
            width: 120px; 
            justify-content: space-around;
        }
    `,
    ],
    template: `
        <div class="non-text-avatar-container">
            <pxb-user-menu [avatarImage]="trex" [(open)]="open1">
                <mat-nav-list pxb-menu-body [style.paddingTop.px]="0">
                    <pxb-info-list-item *ngFor="let item of items" [dense]="true" (click)="open1=false; item.onSelect();">
                        <mat-icon pxb-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                        <div pxb-title>{{item.title}}</div>
                    </pxb-info-list-item>
                </mat-nav-list>
            </pxb-user-menu> 
            
            <pxb-user-menu [(open)]="open2">
                <mat-icon pxb-avatar>pets</mat-icon>
                <mat-nav-list pxb-menu-body [style.paddingTop.px]="0">
                    <pxb-info-list-item *ngFor="let item of items" [dense]="true" 
                        (click)="open2=false; item.onSelect();">
                        <mat-icon pxb-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                        <div pxb-title>{{item.title}}</div>
                    </pxb-info-list-item>
                </mat-nav-list>
            </pxb-user-menu> 
        </div>
    `,
    props: {
        open1: false,
        open2: false,
        items: items,
        trex: Trex,
        invertRTL: invertRTL,
    },
});
