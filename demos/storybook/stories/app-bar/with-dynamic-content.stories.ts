import { number, text } from '@storybook/addon-knobs';

export const withDynamicContent = (): any => ({
    template: `
        <pxb-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         variant="snap">
         <pxb-app-bar-dynamic-content
            [title]="title"
            [subtitle]="subtitle"
            [info]="info">
        </pxb-app-bar-dynamic-content>
</pxb-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
    },
});
