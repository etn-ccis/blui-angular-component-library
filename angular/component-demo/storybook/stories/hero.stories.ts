import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HeroModule, ChannelValueModule} from '@pxblue/angular-components';
import {text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";

storiesOf('Components|Hero', module)
   .addDecorator(
      moduleMetadata({
         imports: [
            CommonModule,
            FormsModule,
            HeroModule,
            ChannelValueModule,
            MatIconModule
         ],
      })
   )
   .addDecorator(withKnobs)
   .add('text only', () => ({
      template: `
          <pxb-hero [label]="title" [value]="value" [units]="units">
          </pxb-hero>
      `,
      props: {
         label: text('label', 'Efficiency'),
         value: text('value', '94'),
         units: text('units', '%')
      }
   }))
   .add('with channel value children', () => ({
      template: `
       <pxb-hero [label]="label" [value]="value" [units]="units">
           <pxb-channel-value [fontSize]="'large'" [value]="hours" [units]="'h'"></pxb-channel-value>
           <pxb-channel-value [fontSize]="'large'" [value]="minutes" [units]="'m'"></pxb-channel-value>
       </pxb-hero>
   `,
      props: {
         label: text('label', 'Duration'),
         value: text('hours', '1'),
         units: text('minutes', '27')
      }
   })
);
