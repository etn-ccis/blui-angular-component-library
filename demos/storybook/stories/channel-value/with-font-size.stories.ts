import { number } from '@storybook/addon-knobs';

export const withExtraLargeFont = (): any => ({
    template: `
        <pxb-channel-value [value]="'123'" [units]="'hz'" [fontSize]="fontSize">
            <mat-icon [style.color]="iconColor">trending_up</mat-icon>
        </pxb-channel-value>
    `,
    props: {
        fontSize: number('fontSize', 30),
        iconColor: '#CA3C3D',
    },
});
