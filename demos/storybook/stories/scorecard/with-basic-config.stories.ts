import { text } from '@storybook/addon-knobs';

export const matListStyles = `
    ::ng-deep .mat-list-text {
        padding-left: 0px!important;
    }
    ::ng-deep .mat-list-base {
        padding: 8px 0px!important;
    }`;

export const withBasicConfig = (): any => ({
    styles: [matListStyles],
    template: `
      <pxb-scorecard [headerTitle]="headerTitle">
        <mat-list body>
            <mat-list-item>Body Content</mat-list-item>
        </mat-list>
      </pxb-scorecard>
      `,
    props: {
        headerTitle: text('headerTitle', 'Card Title'),
    },
});
