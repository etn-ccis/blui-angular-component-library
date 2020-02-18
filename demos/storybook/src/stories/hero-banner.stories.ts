import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
import { number, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule, wrap } from '../utils';
import * as Colors from '@pxblue/colors';
const markdown = require('../../../../docs/Hero.md');

storiesOf('components/Hero Banner', module)
    .addDecorator(
        moduleMetadata({
            imports: [HeroModule, ChannelValueModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(wrap())
    .addParameters({
        notes: { markdown },
    })
    .add('Documentation', () => ({
        template: `<documentation></documentation>`,
    }))
    .add('with heroes', () => ({
        template: `
          <pxb-hero-banner [divider]="false">
             <pxb-hero *ngIf="count > 0" [label]="'Health'" [value]="96" [units]="'/100'">
                <i primary [style.color]="green" class="pxb-grade_a"></i>
             </pxb-hero>
             <pxb-hero *ngIf="count > 1" [label]="'Load'" [value]="90" [units]="'%'">
                <i primary [style.color]="yellow" class="pxb-current_circled"></i>
            </pxb-hero>
             <pxb-hero *ngIf="count > 2" [label]="'Temp'" [value]="96" [units]="'C'">
                <i primary [style.color]="green" class="pxb-temp"></i>
             </pxb-hero>
             <pxb-hero *ngIf="count > 3" [label]="'Battery'" [value]="96" [units]="'/100'">
                <i primary [style.color]="green" class="pxb-battery"></i>
            </pxb-hero>
          </pxb-hero-banner>
      `,
        props: {
            count: number('count', 4, { range: true, min: 0, max: 4, step: 1 }),
            green: Colors.green[500],
            yellow: Colors.yellow[500],
        },
    }));
