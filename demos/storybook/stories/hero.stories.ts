import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS} from '../src/constants';
import {getReadMe, UtilModule, storyWrapper, getReadMeStory} from '../src/utils';
import * as Colors from '@pxblue/colors';

storiesOf(`${COMPONENT_SECTION_NAME}/Hero`, module)
    .addDecorator(
        moduleMetadata({
            imports: [HeroModule, ChannelValueModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Hero.md') } })
   .add(README_STORY_NAME, getReadMeStory)
    .add('with basic properties', () => ({
        template: `
          <pxb-hero [label]="label" [value]="value" [units]="units">
             <i primary [style.color]="blue" class="pxb-grade_a"></i>
          </pxb-hero>
      `,
        props: {
            label: text('label', 'Efficiency'),
            value: text('value', '94'),
            units: text('units', '%'),
            blue: Colors.blue[500],
        },
    }))
    .add('with ChannelValue children', () => ({
        template: `
      <pxb-hero [label]="label">
        <i primary [style.color]="blue" class="pxb-leaf"></i>
        <pxb-channel-value [value]="hours" units="h"></pxb-channel-value>
        <pxb-channel-value [value]="minutes" units="m"></pxb-channel-value>
      </pxb-hero>
   `,
        props: {
            label: text('label', 'Duration'),
            hours: text('hours', '1'),
            minutes: text('minutes', '27'),
            blue: Colors.blue[500],
        },
    }))
    .add('in a banner', () => ({
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
