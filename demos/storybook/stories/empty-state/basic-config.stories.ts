import { text } from '@storybook/addon-knobs';
import { invertRTL } from '../../src/utils';

export const withBasicConfig = (): any => ({
    template: `
        <blui-empty-state [title]="title">
            <mat-icon blui-empty-icon [style.transform]="invertRTL()">not_listed_location</mat-icon>
        </blui-empty-state>
    `,
    props: {
        title: text('title', 'Location Unknown'),
        invertRTL: invertRTL,
    },
});
