import { menuItems } from './with-basic-config.stories';

const Trex = require('../../assets/trex.png');

export const withNonTextAvatar = (): any => ({
    template: `
        <div style="display: flex; width: 120px; justify-content: space-around">
            <pxb-user-menu [items]="menuItems" [src]="trex"></pxb-user-menu> 
            <pxb-user-menu [items]="menuItems">
                <mat-icon pxb-avatar>pets</mat-icon>
            </pxb-user-menu> 
        </div>
    `,
    props: {
        menuItems: menuItems,
        trex: Trex,
    },
});
