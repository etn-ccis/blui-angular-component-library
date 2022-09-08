import { Component } from '@angular/core';
import { loremIpsum } from './lorem-ipsum';

export const THREE_LINER = `<div id="app-bar-three-liner-example" class="three-liner-scroll-container">
    <blui-app-bar 
        variant="snap" 
        expandedHeight="200" 
        collapsedHeight="64" 
        scrollThreshold="100" 
        scrollContainerId="app-bar-three-liner-example"
        (collapsedChange)="isCollapsed = $event">
        <button blui-icon mat-icon-button style="margin: 0 24px 0 -8px">
            <mat-icon>menu</mat-icon>
        </button>
        <blui-three-liner title="Title" subtitle="Subtitle" info="Info"
            [style.top.px]="isCollapsed ? 0 : 80">
        </blui-three-liner>
        <div blui-actions style="display: flex; margin: 0 -8px;">
            <mat-icon style="margin: 0 8px">search</mat-icon>
            <mat-icon style="margin: 0 8px">download</mat-icon>
            <mat-icon style="margin: 0 8px">more_vert</mat-icon>
        </div>
    </blui-app-bar>
    <div class="content-body">{{ filler }}</div>
</div>
`;

@Component({
    selector: 'app-three-liner-app-bar-demo',
    template: THREE_LINER,
    styles: [
        `
            .three-liner-scroll-container {
                width: 100%;
                max-width: 450px;
                max-height: 400px;
                overflow: auto;
                position: relative;
            }
            .content-body {
                padding: 16px;
                background: white;
            }
            ::ng-deep .three-liner-scroll-container .blui-app-bar-background {
                background-image: url('../../../../../../assets/farm.jpg') !important;
                background-size: cover !important;
                opacity: 0.5;
            }
        `,
    ],
})
export class ThreeLinerComponent {
    isCollapsed: boolean;
    filler = loremIpsum;
}
