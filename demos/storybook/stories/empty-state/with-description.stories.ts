import { text } from '@storybook/addon-knobs';

export const withDescription = (): any => ({
    template: `
          <pxb-empty-state [title]="title" [description]="description">
            <mat-icon empty-icon>location_off</mat-icon>
          </pxb-empty-state>
      `,
    props: {
        title: text('title', 'Location Services Disabled'),
        description: text('description', 'Enable Location Services via Settings to receive GPS information'),
    },
});
