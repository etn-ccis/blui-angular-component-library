import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
      <pxb-scorecard [headerTitle]="headerTitle">
        <mat-list content>
            <mat-list-item>Body Content</mat-list-item>
        </mat-list>
      </pxb-scorecard>
      `,
    props: {
      headerTitle: text('headerTitle', 'Card Title'),
    },
});
