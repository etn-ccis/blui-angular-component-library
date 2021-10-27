import { number } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';

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
        .horizontal, .vertical {
            color: black;
        }
        .mat-h4 {
            text-align: center;
            margin-top: 20px;
        }
    `,
    ],
    template: `
        <div class="mat-h4">Horizontal</div>
        <div class="horizontal">
            <blui-spacer [width]="flex1" [style.backgroundColor]="colors.blue[300]">1</blui-spacer>
            <blui-spacer [width]="flex2" [style.background]="colors.yellow[300]">2</blui-spacer>
            <blui-spacer [width]="flex3" [style.background]="colors.red[300]">3</blui-spacer>
        </div>
        <div class="mat-h4">Vertical</div>
        <div class="vertical">
            <blui-spacer [height]="flex1" [style.backgroundColor]="colors.blue[300]">1</blui-spacer>
            <blui-spacer [height]="flex2" [style.background]="colors.yellow[300]">2</blui-spacer>
            <blui-spacer [height]="flex3" [style.background]="colors.red[300]">3</blui-spacer>
        </div>
      `,
    props: {
        flex1: number('Item 1 Size (px)', 60, {
            range: true,
            min: 20,
            max: 100,
            step: 10,
        }),
        flex2: number('Item 2 Size (px)', 60, {
            range: true,
            min: 20,
            max: 100,
            step: 10,
        }),
        flex3: number('Item 3 Size (px)', 60, {
            range: true,
            min: 20,
            max: 100,
            step: 10,
        }),
        colors: Colors,
    },
});
