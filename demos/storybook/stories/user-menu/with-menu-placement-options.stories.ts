import { select } from '@storybook/addon-knobs';
import { items } from './with-basic-config.stories';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const withMenuPlacement = (): any => ({
    template: `
        <pxb-user-menu 
            [(open)]="open"
            avatarValue="AV" 
            menuTitle="Sample Title" 
            menuSubtitle="Sample subtitle"
            [positions]="createPositions(originX, originY, overlayX, overlayY)">
            <mat-nav-list pxb-menu-body [style.paddingTop.px]="0">
                <pxb-info-list-item *ngFor="let item of items" [dense]="true" 
                    (click)="open=false; item.onSelect();">
                    <mat-icon pxb-icon>{{item.icon}}</mat-icon>
                    <div pxb-title>{{item.title}}</div>
                </pxb-info-list-item>
            </mat-nav-list>
    </pxb-user-menu> 
    `,
    props: {
        open: false,
        items: items,
        originX: select('positions.originX', ['start', 'center', 'end'], 'start'),
        originY: select('positions.originY', ['top', 'center', 'bottom'], 'top'),
        overlayX: select('positions.overlayX', ['start', 'center', 'end'], 'start'),
        overlayY: select('positions.overlayY', ['top', 'center', 'bottom'], 'top'),
        createPositions: (originX, originY, overlayX, overlayY): ConnectionPositionPair[] => [
            new ConnectionPositionPair({ originX, originY }, { overlayX, overlayY }),
        ],
    },
});
