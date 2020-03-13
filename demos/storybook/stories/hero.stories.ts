import { MatIconModule } from '@angular/material/icon';
import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
import * as Colors from '@pxblue/colors';
import { boolean, color, number, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_FULL_CONFIG_STORY_NAME,
    WITH_MIN_PROPS_STORY_NAME,
} from '../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../src/utils';

storiesOf(`${COMPONENT_SECTION_NAME}/Hero`, module)
    .addDecorator(
        moduleMetadata({
            imports: [HeroModule, ChannelValueModule, UtilModule, MatIconModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Hero.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, () => ({
        template: `
          <pxb-hero [label]="label">
             <i primary class="pxb-grade_a"></i>
          </pxb-hero>
      `,
        props: {
            label: text('label', 'Efficiency'),
        },
    }))
    .add('with value and units', () => ({
        template: `
          <pxb-hero [label]="'Efficiency'" [value]="value" [units]="units">
             <i primary class="pxb-grade_b"></i>
          </pxb-hero>
      `,
        props: {
            value: text('value', '94'),
            units: text('units', '%'),
        },
    }))
    .add('with ChannelValue children', () => ({
        template: `
      <pxb-hero [label]="'Duration'">
      <mat-icon primary>schedule</mat-icon>
        <pxb-channel-value [value]="hours" units="h"></pxb-channel-value>
        <pxb-channel-value [value]="minutes" units="m"></pxb-channel-value>
      </pxb-hero>
   `,
        props: {
            hours: text('ChannelValue.hours', '1'),
            minutes: text('ChannelValue.minutes', '27'),
        },
    }))
    .add('with icon colors', () => ({
        template: `
          <pxb-hero [label]="'Temperature'" [value]="38" [units]="'°C'">
             <i primary [style.color]="iconColor" [style.backgroundColor]="iconBg" class="pxb-temp"></i>
          </pxb-hero>
      `,
        props: {
            iconColor: color('primary.style.color', Colors.red[500]),
            // iconBg: color('primary.style.backgroundColor', Colors.white[500])
        },
    }))
    .add(WITH_FULL_CONFIG_STORY_NAME, () => ({
        template: `
          <pxb-hero [label]="label" [value]="value" [units]="units">
             <i primary [style.color]="iconColor" class="pxb-fan"></i>
           <mat-icon *ngIf="showSecondary" secondary>trending_up</mat-icon>
          </pxb-hero>
      `,
        props: {
            label: text('label', 'Velocity'),
            value: text('value', '470'),
            units: text('units', 'RPM'),
            showSecondary: boolean('Show Secondary Icon', true),
            iconColor: color('primary.style.color', Colors.blue[500]),
        },
    }))
    .add('in a HeroBanner', () => ({
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
