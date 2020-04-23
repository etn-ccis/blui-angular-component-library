import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <pxb-empty-state [title]="title">
            <mat-icon emptyIcon>not_listed_location</mat-icon>
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'Location Unknown'),
    },
});
