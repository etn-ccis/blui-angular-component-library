import {text} from '@storybook/addon-knobs';

export const withCustomContent = (): any => ({
    template: `
         <pxb-three-liner>
            <div pxb-title>{{title}}</div>
            <div pxb-subtitle>{{subtitle}}</div>
            <div pxb-info>{{info}}</div>
         </pxb-three-liner>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
    },
});
