import { boolean, number, select, text } from '@storybook/addon-knobs';
const bgImage = require('../../assets/farm.jpg');

export const withFullConfig = (): any => ({
    styles: [
        `
       ::ng-deep .showBackgroundImage .pxb-app-bar-toolbar {
            background-color: unset!important;
        }
       ::ng-deep .showBackgroundImage .pxb-app-bar-background {
          background-image: url(${bgImage})!important;
          background-size: cover!important;
          opacity: .5;
        }
    `,
    ],
    template: `
        <pxb-app-bar
         [class.showBackgroundImage]="showBackgroundImage"
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         [mode]="mode">
         <button pxb-icon mat-icon-button>
            <mat-icon>menu</mat-icon>
        </button>
         <pxb-app-bar-dynamic-content
            style="margin: 0 24px"
            [title]="title"
            [subtitle]="subtitle"
            [info]="info">
        </pxb-app-bar-dynamic-content>
        <div pxb-actions style="display: flex">
            <mat-icon style="margin: 0 8px">light</mat-icon>
            <mat-icon style="margin: 0 8px">face</mat-icon>
            <mat-icon style="margin: 0 8px">home</mat-icon>
        </div>
    </pxb-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
        mode: select('mode', ['dynamic', 'collapsed', 'expanded'], 'dynamic'),
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
        showBackgroundImage: boolean('Show Background Image', true),
    },
});
