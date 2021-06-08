import { number, text } from '@storybook/addon-knobs';

export const withNgContent = (): any => ({
    styles: [`
       ::ng-deep .pxb-app-bar-content.collapsed .info {
            margin-top: -8px;
        }
    `],
    template: `
        <pxb-app-bar
         [expandedHeight]="expandedHeight"
         [collapsedHeight]="collapsedHeight"
         [scrollThreshold]="scrollThreshold"
         [scrollContainerId]="scrollContainerId"
         mode="dynamic">
             <pxb-app-bar-dynamic-content>
                <pxb-channel-value style="color: white" pxb-title value="Temperature"></pxb-channel-value>
                <div pxb-subtitle>subtitle</div>
                 <div pxb-info class="info"
                    [matMenuTriggerFor]="dropdownToolbarMenu"
                    #menuTrigger="matMenuTrigger"
                >
                    <span>Menu</span>
                    <mat-icon style="font-size: inherit; margin: 0 4px">arrow_drop_down</mat-icon>
                </div>
            </pxb-app-bar-dynamic-content>
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
    },
});
