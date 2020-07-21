import { menuGroups } from './with-basic-config.stories';
import { text } from '@storybook/addon-knobs';
const Trex = require('../../assets/trex.png');

export const withCustomMenu = (): any => ({
    styles: [`
        .overlay {
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            opacity: 0.2;
        }
    `],
    template: `
        <pxb-user-menu [menuGroups]="menuGroups" [value]="value">
            <div pxb-header>
                <div style="padding: 8px; padding-top: 16px; position: relative">
                    <div style="margin: 0; font-size: 18px">Welcome,</div>
                    <div style="margin: 0; margin-top: -8px; font-size: 42px; font-weight: 600">T-Rex</div>
                    <div [style.backgroundImage]="trex" class="overlay"></div>
                </div>
                <mat-divider></mat-divider>
            </div>
            <
        </pxb-user-menu> 
    `,
    props: {
        trex: `url(${Trex})`,
        menuGroups: menuGroups,
        value: text('value', 'AV'),
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
    },
});
