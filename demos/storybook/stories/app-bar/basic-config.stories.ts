import { number } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <pxb-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId" 
         variant="snap">
         
         <div>Content</div>
</pxb-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
    },
});
