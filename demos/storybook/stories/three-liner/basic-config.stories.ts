import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
         <pxb-three-liner
            [title]="title"
            [subtitle]="subtitle"
            [info]="info">
         </pxb-three-liner>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
    },
});
