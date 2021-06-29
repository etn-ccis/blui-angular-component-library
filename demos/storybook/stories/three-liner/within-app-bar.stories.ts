import { text } from '@storybook/addon-knobs';
import { isDarkMode } from '../../src/utils';
import * as Colors from '@pxblue/colors';
import { fillerContent } from './_module.stories';

export const withinAppBar = (): any => ({
    styles: [
        `
            :host { 
                display: flex; width: 100%; justify-content: center;
            } 
            ::ng-deep .mat-typography {
                justify-content: center;
                display: flex;
            }
            #pxb-app-bar-container {
                width: 90%; 
                max-height: 70vh; 
                overflow: auto; 
                position: relative
            }
        `,
    ],
    template: `
        <div id="pxb-app-bar-container" [style.backgroundColor]="getDecoratorBgColor()">
            <pxb-app-bar [scrollContainerId]="scrollContainerId" 
                variant="snap" 
                (collapsedChange)="isCollapsed = $event">
                <pxb-three-liner [style.top.px]="isCollapsed ? 0 : 80">
                    <div pxb-title>{{title}}</div>
                    <div pxb-subtitle>{{subtitle}}</div>
                    <div pxb-info>{{info}}</div>
                 </pxb-three-liner>
            </pxb-app-bar>
            <div style="padding: 16px; height: 100vh;">
                {{fillerContent}}
             </div>
        </div>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
        scrollContainerId: 'pxb-app-bar-container',
        getDecoratorBgColor: (): string => (isDarkMode() ? Colors.black[900] : 'white'),
        fillerContent: fillerContent,
        isCollapsed: undefined,
    },
});
