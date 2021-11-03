import { number } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';

export const withinBanner = (): any => ({
    template: `
        <blui-hero-banner [style.borderColor]="borderColor" [style.width.px]="bannerWidth" 
            style="border: solid 1px; border-radius: 4px">
            <blui-hero *ngIf="count > 0" [label]="'Health'" [value]="96" [units]="'/100'" [unitSpace]="'hide'">
                <i blui-primary [style.color]="green" class="blui-grade_a"></i>
            </blui-hero>
            <blui-hero *ngIf="count > 1" [label]="'Load'" [value]="90" [units]="'%'">
                <i blui-primary [style.color]="yellow" class="blui-current_circled"></i>
            </blui-hero>
            <blui-hero *ngIf="count > 2" [label]="'Temp'" [value]="96" [units]="'°C'">
                <i blui-primary [style.color]="green" class="blui-temp"></i>
            </blui-hero>
            <blui-hero *ngIf="count > 3" [label]="'Battery'" [value]="96" [units]="'/100'" [unitSpace]="'hide'">
                <i blui-primary [style.color]="green" class="blui-battery"></i>
            </blui-hero>
        </blui-hero-banner>
    `,
    props: {
        count: number('count', 4, { range: true, min: 1, max: 4, step: 1 }),
        bannerWidth: number('width', 400, { range: true, min: 350, max: 600, step: 50 }),
        green: Colors.green[500],
        yellow: Colors.yellow[500],
        borderColor: Colors.gray[200],
    },
});
