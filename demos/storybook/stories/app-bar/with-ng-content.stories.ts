import { number } from '@storybook/addon-knobs';

export const withNgContent = (): any => ({
    template: `
        <pxb-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         [(isCollapsed)]="isCollapsed"
         variant="snap">
             <pxb-three-liner [style.top.px]="isCollapsed ? 0 : expandedYOffset">
                <pxb-channel-value style="color: white" pxb-title value="Temperature"></pxb-channel-value>
                <div pxb-subtitle>subtitle</div>
                 <div pxb-info class="info"
                    [matMenuTriggerFor]="dropdownToolbarMenu"
                    #menuTrigger="matMenuTrigger"
                >
                    <span>Menu</span>
                    <mat-icon style="font-size: inherit; margin: 0 4px">arrow_drop_down</mat-icon>
                </div>
            </pxb-three-liner>
        </pxb-app-bar>

        <mat-menu #dropdownToolbarMenu="matMenu" [overlapTrigger]="false">
            <mat-list-item>Item 1</mat-list-item>
            <mat-list-item>Item 2</mat-list-item>
            <mat-list-item>Item 3</mat-list-item>
        </mat-menu>
    `,
    props: {
        collapsedHeight: number('collapsedHeight', 64),
        expandedHeight: number('expandedHeight', 200),
        scrollThreshold: number('scrollThreshold', 100),
        isCollapsed: undefined,
        expandedYOffset: number('Expanded Y Offset', 80),
    },
});
