import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule, wrap } from '../utils';
import * as Colors from '@pxblue/colors';
const markdown = require('../../../../docs/Hero.md');

storiesOf('components/Hero', module)
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
    }));
