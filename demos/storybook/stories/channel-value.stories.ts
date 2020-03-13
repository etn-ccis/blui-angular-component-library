import { MatIconModule } from '@angular/material/icon';
import { ChannelValueModule } from '@pxblue/angular-components';
import { boolean, color, number, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {getReadMe, getReadMeStory, storyWrapper, UtilModule} from '../src/utils';
import * as Colors from '@pxblue/colors';
import {
   COMPONENT_SECTION_NAME,
   README_STORY_NAME,
   STORY_PARAMS,
   WITH_FULL_CONFIG_STORY_NAME,
   WITH_MIN_PROPS_STORY_NAME
} from '../src/constants';

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
    .add(WITH_MIN_PROPS_STORY_NAME, () => ({
        template: `
          <pxb-channel-value [value]="value"></pxb-channel-value>
      `,
        props: {
            value: text('value', '123'),
        },
    }))
    .add('with units', () => ({
        template: `
          <pxb-channel-value [value]="'123'" [units]="units"></pxb-channel-value>
      `,
        props: {
            units: text('units', 'hz'),
        },
    }))
    .add('with icon', () => ({
        template: `
          <pxb-channel-value [value]="'123'" [units]="'hz'">
            <mat-icon [style.color]="htmlColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
        props: {
            htmlColor: color('icon.htmlColor', Colors.red[500]),
        },
    }))
    .add('with extra large font size', () => ({
        template: `
          <pxb-channel-value [value]="'123'" [units]="'hz'" [fontSize]="fontSize">
            <mat-icon [style.color]="iconColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
        props: {
            fontSize: number('fontSize', 30),
            iconColor: '#CA3C3D',
        },
    }))
    .add(WITH_FULL_CONFIG_STORY_NAME, () => ({
        template: `
          <pxb-channel-value [value]="value" [units]="units" [fontSize]="fontSize" [color]="color" [prefix]="prefix">
            <mat-icon *ngIf="showIcon" [style.color]="htmlColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
        props: {
            value: text('value', '123'),
            units: text('units', 'hz'),
            htmlColor: color('icon.htmlColor', Colors.red[500]),
            showIcon: boolean('Show Icon', true),
            color: color('color', 'blue'),
            fontSize: number('fontSize', 30),
            prefix: boolean('prefix', false),
        },
    }));
