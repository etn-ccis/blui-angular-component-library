import { menuGroups } from './with-basic-config.stories';

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
            <pxb-user-menu [menuGroups]="menuGroups" [src]="trex"></pxb-user-menu> 
            <pxb-user-menu [menuGroups]="menuGroups">
                <mat-icon pxb-avatar>pets</mat-icon>
            </pxb-user-menu> 
        </div>
    `,
    props: {
        menuGroups: menuGroups,
        trex: Trex,
    },
});
