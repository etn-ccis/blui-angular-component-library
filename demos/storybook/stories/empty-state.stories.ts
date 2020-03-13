import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmptyStateModule } from '@pxblue/angular-components';
import { action } from '@storybook/addon-actions';
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import * as Colors from '@pxblue/colors';
import {
   COMPONENT_SECTION_NAME,
   README_STORY_NAME,
   STORY_PARAMS,
   WITH_FULL_CONFIG_STORY_NAME,
   WITH_MIN_PROPS_STORY_NAME
} from '../src/constants';
import {getReadMe, getReadMeStory, storyWrapper, UtilModule} from '../src/utils';

storiesOf(`${COMPONENT_SECTION_NAME}/Empty State`, module)
    .addDecorator(
        moduleMetadata({
            imports: [EmptyStateModule, MatButtonModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('EmptyState.md') } })
   .add(README_STORY_NAME, getReadMeStory)
   .add(WITH_MIN_PROPS_STORY_NAME, () => ({
      template: `
          <pxb-empty-state [title]="title">
            <mat-icon empty-icon>not_listed_location</mat-icon>
          </pxb-empty-state>
      `,
      props: {
         title: text('title', 'Location Unknown'),
      },
   }))
    .add('with description', () => ({
        template: `
          <pxb-empty-state [title]="title" [description]="description">
            <mat-icon empty-icon>location_off</mat-icon>
          </pxb-empty-state>
      `,
        props: {
            title: text('title', 'Location Services Disabled'),
           description: text('description', 'Enable Location Services via Settings to receive GPS information'),
        },
    }))

   .add('with actions', () => ({
      template: `
          <pxb-empty-state [title]="title" [description]="description">
            <mat-icon empty-icon>devices</mat-icon>
            <button actions mat-raised-button color="primary" (click)="click()">
                <mat-icon>add_circle</mat-icon>
                {{actionText}}
             </button>
          </pxb-empty-state>
      `,
      props: {
         title: text('title', 'No Devices'),
         description: text('description', 'Not a single one'),
         click: action('button clicked'),
         actionText: text('Action Text', 'Add Device')
      },
   }))
      .add(WITH_FULL_CONFIG_STORY_NAME, () => ({
         template: `
          <pxb-empty-state [title]="title" [description]="description">
            <mat-icon empty-icon [style.color]="color" [style.fontSize.px]="fontSize">trending_up</mat-icon>
            <button actions mat-raised-button color="primary" (click)="click()">
                <mat-icon>add_circle</mat-icon>
                {{actionText}}
             </button>
          </pxb-empty-state>
      `,
         props: {
            title: text('title', 'Predictions Page Coming Soon'),
            description: text('description', 'A fully redesigned predictions page is coming in our next release!'),
            click: action('button clicked'),
            actionText: text('Action Text', 'Learn More'),
            color: color('Icon Color', Colors.blue[500]),
            fontSize: number('Icon Font Size', 90),
         },
      }));
