import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
         <blui-three-liner
            [title]="title"
            [subtitle]="subtitle"
            [info]="info">
         </blui-three-liner>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
    },
});
