import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withStaticLayout = (): any => ({
    styles: [
        `
        .horizontal {
            height: 50px;
            display: flex;
            align-items: stretch;
        }
        .vertical {
            width: 300px;
            display: flex;
            flex-direction: column;
        }
    `,
    ],
    template: `
        <div class="mat-h4">Horizontal</div>
        <div class="horizontal">
            <pxb-spacer [width]="flex1" [style.backgroundColor]="colors.blue[300]">1</pxb-spacer>
            <pxb-spacer [width]="flex2" [style.background]="colors.yellow[300]">2</pxb-spacer>
            <pxb-spacer [width]="flex3" [style.background]="colors.red[300]">3</pxb-spacer>
        </div>
        <div class="mat-h4">Vertical</div>
        <div class="vertical">
            <pxb-spacer [height]="flex1" [style.backgroundColor]="colors.blue[300]">1</pxb-spacer>
            <pxb-spacer [height]="flex2" [style.background]="colors.yellow[300]">2</pxb-spacer>
            <pxb-spacer [height]="flex3" [style.background]="colors.red[300]">3</pxb-spacer>
        </div>
      `,
    props: {
        flex1: number('Item 1 Size (px)', 60, { range: true, min: 20, max: 100, step: 10 }),
        flex2: number('Item 2 Size (px)', 60, { range: true, min: 20, max: 100, step: 10 }),
        flex3: number('Item 3 Size (px)', 60, { range: true, min: 20, max: 100, step: 10 }),
        colors: Colors,
    },
});
