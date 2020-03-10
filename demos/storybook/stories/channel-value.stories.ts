import { MatIconModule } from '@angular/material/icon';
import { ChannelValueModule } from '@pxblue/angular-components';
import { boolean, color, number, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {getReadMe, getReadMeStory, storyWrapper, UtilModule} from '../src/utils';
import {COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS} from '../src/constants';

storiesOf(`${COMPONENT_SECTION_NAME}/Channel Value`, module)
    .addDecorator(
        moduleMetadata({
            imports: [ChannelValueModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('ChannelValue.md') } })
   .add(README_STORY_NAME, getReadMeStory)
    .add('with value', () => ({
        template: `
          <pxb-channel-value [value]="value"></pxb-channel-value>
      `,
        props: {
            value: text('value', '123'),
        },
    }))
    .add('with units', () => ({
        template: `
          <pxb-channel-value [value]="value" [units]="units"></pxb-channel-value>
      `,
        props: {
            value: text('value', '123', '_'),
            units: text('units', 'hz', '_'),
        },
    }))
    .add('with icon', () => ({
        template: `
          <pxb-channel-value [value]="value" [units]="units">
            <mat-icon [style.color]="iconColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
        props: {
            value: text('value', '123'),
            units: text('units', 'hz'),
            iconColor: '#CA3C3D',
        },
    }))
    .add('with extra large font size', () => ({
        template: `
          <pxb-channel-value [value]="value" [units]="units" [fontSize]="fontSize">
            <mat-icon [style.color]="iconColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
        props: {
            value: text('value', '123'),
            units: text('units', 'hz'),
            fontSize: number('fontSize', 30),
            iconColor: '#CA3C3D',
        },
    }))
    .add('with all props', () => ({
        template: `
          <pxb-channel-value [value]="value" [units]="units" [fontSize]="fontSize" [color]="color" [prefix]="prefix">
            <mat-icon [style.color]="iconColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
        props: {
            value: text('value', '123'),
            units: text('units', 'hz'),
            iconColor: '#CA3C3D',
            color: color('color', 'blue'),
            fontSize: number('fontSize', 30),
            prefix: boolean('prefix', false),
        },
    }));
