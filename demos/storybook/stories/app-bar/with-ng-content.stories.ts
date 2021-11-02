import { number } from '@storybook/addon-knobs';

export const withNgContent = (): any => ({
    template: `
        <blui-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         (collapsedChange)="isCollapsed = $event"
         variant="snap">
             <blui-three-liner [style.top.px]="isCollapsed ? 0 : expandedYOffset">
                <blui-channel-value style="color: white" blui-title value="Temperature"></blui-channel-value>
                <div blui-subtitle>Subtitle</div>
                 <div blui-info class="info"
                    [matMenuTriggerFor]="dropdownToolbarMenu"
                    #menuTrigger="matMenuTrigger"
                    style="display: flex; align-items: center; cursor: pointer;"
                >
                    <span>Menu</span>
                    <mat-icon style="font-size: inherit; width: 16px; height: 16px;">arrow_drop_down</mat-icon>
                </div>
            </blui-three-liner>
        </blui-app-bar>

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
