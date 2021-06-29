import { number, select } from '@storybook/addon-knobs';

export const withModes = (): any => ({
    template: `
        <pxb-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         [(isCollapsed)]="isCollapsed"
         [variant]="variant">
            <div [style.top.px]="isCollapsed ? 0 : expandedYOffset">Content</div>
        </pxb-app-bar>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
        variant: select('variant', ['snap', 'collapsed', 'expanded'], 'snap'),
        expandedYOffset: number('Expanded Y Offset', 80),
        isCollapsed: undefined,
    },
});
