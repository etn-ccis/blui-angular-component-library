import {CommonModule} from "@angular/common";
import {HeroBannerModule, ChannelValueModule} from '@pxblue/angular-components';
import {number, text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";
import {wrap} from "./utils";

storiesOf('Components|Hero Banner', module)
   .addDecorator(
      moduleMetadata({
         imports: [
            CommonModule,
            HeroBannerModule,
            ChannelValueModule
         ],
      })
   )
   .addDecorator(withKnobs)
   .addDecorator(wrap())
   .add('text only', () => ({
      template: `
          <pxb-hero-banner [divider]="false">
             <pxb-hero *ngIf="count > 0" [label]="'Health'" [value]="96" [units]="'/100'"></pxb-hero>
             <pxb-hero *ngIf="count > 1" [label]="'Load'" [value]="90" [units]="'%'"></pxb-hero>
             <pxb-hero *ngIf="count > 2" [label]="'Temp'" [value]="96" [units]="'C'"></pxb-hero>
             <pxb-hero *ngIf="count > 3" [label]="'Battery'" [value]="96" [units]="'/100'"></pxb-hero>
          </pxb-hero-banner>
      `,
      props: {
         count: number('count', 4, { range: true, min: 0, max: 4, step: 1 })
      }
   })
);
