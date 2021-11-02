import { boolean, number, select, text } from '@storybook/addon-knobs';
const bgImage = require('../../assets/farm.jpg');

export const withFullConfig = (): any => ({
    styles: [
        `
       ::ng-deep .showBackgroundImage .blui-app-bar-toolbar {
            background-color: unset!important;
        }
       ::ng-deep .showBackgroundImage .blui-app-bar-background {
          background-image: url(${bgImage})!important;
          background-size: cover!important;
          opacity: .5;
        }
    `,
    ],
    template: `
        <blui-app-bar
             [class.showBackgroundImage]="showBackgroundImage"
             [expandedHeight]="expandedHeight"
             [collapsedHeight]="collapsedHeight"
             [scrollThreshold]="scrollThreshold"
             [scrollContainerId]="scrollContainerId"
             [variant]="variant"
             (collapsedChange)="isCollapsed = $event">
                 <button blui-icon mat-icon-button style="margin: 0 -12px">
                    <mat-icon>menu</mat-icon>
                 </button>
                 <blui-three-liner
                    [title]="title"
                    [subtitle]="subtitle"
                    [info]="info"
                    style="margin: 0 40px"
                    [style.top.px]="isCollapsed ? 0 : expandedYOffset">
                 </blui-three-liner>
                 <div blui-actions style="display: flex; margin: 0 -12px;">
                    <mat-icon style="margin: 0 8px">light</mat-icon>
                    <mat-icon style="margin: 0 8px">face</mat-icon>
                    <mat-icon style="margin: 0 8px">home</mat-icon>
                 </div>
        </blui-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
        variant: select('variant', ['snap', 'collapsed', 'expanded'], 'snap'),
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
        showBackgroundImage: boolean('Show Background Image', true),
        isCollapsed: undefined,
        expandedYOffset: number('Expanded Y Offset', 80),
    },
});
