import * as Colors from '@pxblue/colors';
import { text } from '@storybook/addon-knobs';

export const withArraySubtitle = (): any => ({
    template: `
        <pxb-info-list-item title="Info List Item" [subtitle]="subtitle" [subtitleSeparator]="subtitleSeparator">
            <mat-icon [style.color]="colors.green[500]" icon>eco</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
        subtitle: [4, '🍂', 'leaves'],
        subtitleSeparator: text('subtitleSeparator', '___'),
    },
});
