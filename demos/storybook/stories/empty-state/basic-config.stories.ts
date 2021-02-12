import { text } from '@storybook/addon-knobs';
import { invertRTL } from '../../src/utils';

export const withBasicConfig = (): any => ({
    template: `
        <pxb-empty-state [title]="title">
            <mat-icon pxb-empty-icon [style.transform]="invertRTL()">not_listed_location</mat-icon>
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'Location Unknown'),
        invertRTL: invertRTL,
    },
});
