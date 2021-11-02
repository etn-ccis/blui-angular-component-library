import { text } from '@storybook/addon-knobs';

export const withDescription = (): any => ({
    template: `
        <blui-empty-state [title]="title" [description]="description">
            <mat-icon blui-empty-icon>location_off</mat-icon>
        </blui-empty-state>
    `,
    props: {
        title: text('title', 'Location Services Disabled'),
        description: text('description', 'Enable Location Services via Settings to receive GPS information'),
    },
});
