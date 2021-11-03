import { items } from './with-basic-config.stories';
import { invertRTL } from '../../src/utils';

const Trex = require('../../assets/trex.png');

export const withNonTextAvatar = (): any => ({
    styles: [
        `
        .non-text-avatar-container {
            display: flex; 
            width: 8rem; 
            justify-content: space-around;
        }
    `,
    ],
    template: `
        <div class="non-text-avatar-container">
            <blui-user-menu [avatarImage]="trex" [(open)]="open1">
                <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
                    <blui-info-list-item *ngFor="let item of items" [dense]="true" (click)="open1=false; item.onSelect();">
                        <mat-icon blui-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                        <div blui-title>{{item.title}}</div>
                    </blui-info-list-item>
                </mat-nav-list>
            </blui-user-menu> 
            
            <blui-user-menu [(open)]="open2">
                <mat-icon blui-avatar>pets</mat-icon>
                <mat-nav-list blui-menu-body [style.paddingTop.px]="0">
                    <blui-info-list-item *ngFor="let item of items" [dense]="true" 
                        (click)="open2=false; item.onSelect();">
                        <mat-icon blui-icon [style.transform]="invertRTL()">{{item.icon}}</mat-icon>
                        <div blui-title>{{item.title}}</div>
                    </blui-info-list-item>
                </mat-nav-list>
            </blui-user-menu> 
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
