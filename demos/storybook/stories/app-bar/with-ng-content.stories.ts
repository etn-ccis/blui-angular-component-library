import { number } from '@storybook/addon-knobs';

export const withNgContent = (): any => ({
    template: `
        <pxb-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         (collapsedChange)="isCollapsed = $event"
         variant="snap">
             <pxb-three-liner [style.top.px]="isCollapsed ? 0 : expandedYOffset">
                <pxb-channel-value style="color: white" pxb-title value="Temperature"></pxb-channel-value>
                <div pxb-subtitle>Subtitle</div>
                 <div pxb-info class="info"
                    [matMenuTriggerFor]="dropdownToolbarMenu"
                    #menuTrigger="matMenuTrigger"
                    style="display: flex; align-items: center; cursor: pointer;"
                >
                    <span>Menu</span>
                    <mat-icon style="font-size: inherit; width: 16px; height: 16px;">arrow_drop_down</mat-icon>
                </div>
            </pxb-three-liner>
        </pxb-app-bar>

        <mat-menu #dropdownToolbarMenu="matMenu" [overlapTrigger]="false">
            <button mat-menu-item>Item 1</button>
            <button mat-menu-item>Item 2</button>
            <button mat-menu-item>Item 3</button>
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
