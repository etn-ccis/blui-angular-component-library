import { text } from '@storybook/addon-knobs';
import { isDarkMode } from '../../src/utils';
import * as Colors from '@brightlayer-ui/colors';
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
            #blui-app-bar-container {
                width: 90%; 
                max-height: 70vh; 
                overflow: auto; 
                position: relative
            }
        `,
    ],
    template: `
        <div id="blui-app-bar-container" [style.backgroundColor]="getDecoratorBgColor()">
            <blui-app-bar [scrollContainerId]="scrollContainerId" 
                variant="snap" 
                (collapsedChange)="isCollapsed = $event">
                <blui-three-liner [style.top.px]="isCollapsed ? 0 : 80">
                    <div blui-title>{{title}}</div>
                    <div blui-subtitle>{{subtitle}}</div>
                    <div blui-info>{{info}}</div>
                 </blui-three-liner>
            </blui-app-bar>
            <div style="padding: 16px; height: 100vh;">
                {{fillerContent}}
             </div>
        </div>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', 'info'),
        scrollContainerId: 'blui-app-bar-container',
        getDecoratorBgColor: (): string => (isDarkMode() ? Colors.black[900] : 'white'),
        fillerContent: fillerContent,
        isCollapsed: undefined,
    },
});
