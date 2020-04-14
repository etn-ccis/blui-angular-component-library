import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFlexLayout = (): any => ({
    styles: [
        `
        .horizontal {
            width: 300px;
            height: 50px;
            display: flex;
            align-items: stretch;
        }
        .vertical {
            width: 300px;
            height: 150px;
            display: flex;
            flex-direction: column;
        }
    `,
    ],
    template: `
        <div class="mat-h4">Horizontal</div>
        <div class="horizontal">
            <pxb-spacer [flex]="flex1" [style.backgroundColor]="colors.blue[300]">1</pxb-spacer>
            <pxb-spacer [flex]="flex2" [style.background]="colors.yellow[300]">2</pxb-spacer>
            <pxb-spacer [flex]="flex3" [style.background]="colors.red[300]">3</pxb-spacer>
        </div>
        <div class="mat-h4">Vertical</div>
        <div class="vertical">
            <pxb-spacer [flex]="flex1" [style.backgroundColor]="colors.blue[300]">1</pxb-spacer>
            <pxb-spacer [flex]="flex2" [style.background]="colors.yellow[300]">2</pxb-spacer>
            <pxb-spacer [flex]="flex3" [style.background]="colors.red[300]">3</pxb-spacer>
        </div>
    `,
    props: {
        flex1: number('Item 1 Flex', 1, { range: true, min: 1, max: 5, step: 1 }),
        flex2: number('Item 2 Flex', 1, { range: true, min: 1, max: 5, step: 1 }),
        flex3: number('Item 3 Flex', 1, { range: true, min: 1, max: 5, step: 1 }),
        colors: Colors,
    },
});
