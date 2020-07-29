import { text } from '@storybook/addon-knobs';
const Trex = require('../../assets/trex.png');

export const withCustomMenu = (): any => ({
    styles: [
        `
       .header1 {
        margin: 0; 
        font-size: 18px;
        font-weight: 600;
        }
        .header2 {
            margin: 0;
            margin-top: -8px;
            font-size: 42px;
            font-weight: 600;
        }
        .overlay {
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            opacity: 0.2;
        }
    `,
    ],
    template: `
       <pxb-selection-toolbar [title]="title" [subtitle]="subtitle">
        <ng-container pxb-toolbar-menu>
            <div style="padding: 16px 8px 8px 8px; position: relative; cursor: pointer;">
                <div class="header1">Welcome,</div>
                <div class="header2">T-Rex</div>
                <div [style.backgroundImage]="trex" class="overlay"></div>
            </div>
        </ng-container>
       </pxb-selection-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        trex: `url(${Trex})`,
    },
});
