import { MatIconModule } from "@angular/material/icon";
import {
  ChannelValueModule,
  HeroBannerModule
} from "@pxblue/angular-components";
import { number, withKnobs } from "@storybook/addon-knobs";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { wrap } from "./utils";

storiesOf("Hero Banner", module)
  .addDecorator(
    moduleMetadata({
      imports: [HeroBannerModule, ChannelValueModule, MatIconModule]
    })
  )
  .addDecorator(withKnobs)
  .addDecorator(wrap())
  .add("with heroes", () => ({
    template: `
          <pxb-hero-banner [divider]="false">
             <pxb-hero *ngIf="count > 0" [label]="'Health'" [value]="96" [units]="'/100'">
                <mat-icon primary [style.color]="green">fitness_center</mat-icon>
             </pxb-hero>
             <pxb-hero *ngIf="count > 1" [label]="'Load'" [value]="90" [units]="'%'">
                <mat-icon primary [style.color]="yellow">equalizer</mat-icon>
            </pxb-hero>
             <pxb-hero *ngIf="count > 2" [label]="'Temp'" [value]="96" [units]="'C'">
                <mat-icon primary [style.color]="green">wb_cloudy</mat-icon>
             </pxb-hero>
             <pxb-hero *ngIf="count > 3" [label]="'Battery'" [value]="96" [units]="'/100'">
                <mat-icon primary [style.color]="green">battery_charging_full</mat-icon>
            </pxb-hero>
          </pxb-hero-banner>
      `,
    props: {
      count: number("count", 4, { range: true, min: 0, max: 4, step: 1 }),
      green: "#39b620",
      yellow: "#f0cb2f"
    }
  }));
