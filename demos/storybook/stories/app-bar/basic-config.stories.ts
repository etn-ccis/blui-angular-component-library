import { number } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <blui-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId" 
         variant="snap">
            <div>Content</div>
        </blui-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
    },
});
