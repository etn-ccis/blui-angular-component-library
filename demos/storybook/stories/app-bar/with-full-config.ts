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
            [titleCollapseHeight]="titleCollapseHeight"
            [titleExpandHeight]="titleExpandHeight"
            [subtitle]="subtitle"
            [subtitleCollapseHeight]="subtitleCollapseHeight"
            [subtitleExpandHeight]="subtitleExpandHeight"
            [info]="info"
            [infoCollapseHeight]="infoCollapseHeight"
            [infoExpandHeight]="infoExpandHeight">
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
        titleExpandHeight: number('titleExpandHeight', 30),
        titleCollapseHeight: number('titleCollapseHeight', 20),
        subtitle: text('subtitle', 'subtitle'),
        subtitleExpandHeight: number('subtitleExpandHeight', 16),
        subtitleCollapseHeight: number('subtitleCollapseHeight', 0),
        info: text('info', 'info'),
        infoExpandHeight: number('infoExpandHeight', 14),
        infoCollapseHeight: number('infoCollapseHeight', 16),
        //showBackgroundImage: boolean('Show Background Image', true)
    },
});
