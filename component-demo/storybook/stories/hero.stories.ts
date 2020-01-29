import {MatIconModule} from "@angular/material/icon";
import {ChannelValueModule, HeroModule} from '@pxblue/angular-components';
import {text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";
import {wrap} from "./utils";

storiesOf('Hero', module)
   .addDecorator(
      moduleMetadata({
         imports: [
            HeroModule,
            ChannelValueModule,
            MatIconModule
         ],
      })
   )
   .addDecorator(withKnobs)
   .addDecorator(wrap())
   .add('with basic properties', () => ({
      template: `
          <pxb-hero [label]="title" [value]="value" [units]="units">
            <mat-icon primary [style.color]="blue">fitness_center</mat-icon>
          </pxb-hero>
      `,
      props: {
         label: text('label', 'Efficiency'),
         value: text('value', '94'),
         units: text('units', '%'),
         blue: '#007bc1',
      }
   }))
   .add('with ChannelValue children', () => ({
      template: `
       <pxb-hero [label]="label" [value]="value" [units]="units">
           <mat-icon primary [style.color]="blue">access_time</mat-icon>
           <pxb-channel-value [fontSize]="'large'" [value]="hours" [units]="'h'"></pxb-channel-value>
           <pxb-channel-value [fontSize]="'large'" [value]="minutes" [units]="minutesUnit"></pxb-channel-value>
       </pxb-hero>
   `,
      props: {
         label: text('label', 'Duration'),
         value: text('hours', '1'),
         units: text('minutes', '27'),
         hoursUnit: 'h',
         minutesUnit: 'm'
      }
   })
);
