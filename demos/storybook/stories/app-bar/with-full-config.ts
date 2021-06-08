import { number, select, text } from '@storybook/addon-knobs';

export const withFullConfig = (): any => ({
    /* styles: [`
       ::ng-deep .showBackgroundImage .pxb-app-bar-toolbar {
            background-color: unset!important;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
        }
       ::ng-deep .showBackgroundImage .pxb-app-bar-background {
          background-image: url(${bgImage})!important;
          background-size: cover!important;
          opacity: .5;
        }
    `], */
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
            [titleExpandedSize]="titleCollapsedSize"
            [titleExpandedSize]="titleExpandedSize"
            [subtitle]="subtitle"
            [subtitleCollapsedSize]="subtitleCollapsedSize"
            [subtitleExpandedSize]="subtitleExpandedSize"
            [info]="info"
            [infoCollapsedSize]="infoCollapsedSize"
            [infoExpandedSize]="infoExpandedSize">
        </pxb-app-bar-dynamic-content>
        <div pxb-actions>
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
        titleExpandedSize: number('titleExpandedSize', 30),
        titleCollapseHeight: number('titleCollapsedSize', 20),
        subtitle: text('subtitle', 'subtitle'),
        subtitleExpandedSize: number('subtitleExpandedSize', 16),
        subtitleCollapsedSize: number('subtitleCollapsedSize', 0),
        info: text('info', 'info'),
        infoExpandedSize: number('infoExpandedSize', 14),
        infoCollapsedSize: number('infoCollapsedSize', 16),
        //showBackgroundImage: boolean('Show Background Image', true)
    },
});
