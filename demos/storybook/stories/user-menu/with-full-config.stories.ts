import { select, text } from '@storybook/addon-knobs';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { items } from './with-basic-config.stories';
import {invertRTL} from "../../src/utils";

export const withFullConfig = (): any => ({
    template: `
        <pxb-user-menu 
            [(open)]="open"
            [avatarValue]="avatarValue" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"
            [positions]="createPositions(originX, originY, overlayX, overlayY)">>
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
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
        originX: select('positions.originX', ['start', 'center', 'end'], 'start'),
        originY: select('positions.originY', ['top', 'center', 'bottom'], 'top'),
        overlayX: select('positions.overlayX', ['start', 'center', 'end'], 'start'),
        overlayY: select('positions.overlayY', ['top', 'center', 'bottom'], 'top'),
        invertRTL: invertRTL,
        createPositions: (originX, originY, overlayX, overlayY): ConnectionPositionPair[] => [
            new ConnectionPositionPair({ originX, originY }, { overlayX, overlayY }),
        ],
    },
});
