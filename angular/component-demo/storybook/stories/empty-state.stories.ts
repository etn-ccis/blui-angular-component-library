import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {EmptyStateModule} from '@pxblue/angular-components';
import {text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";
import {wrap} from "./utils";

storiesOf('Components|Empty State', module)
   .addDecorator(
      moduleMetadata({
         imports: [
            EmptyStateModule,
            MatButtonModule,
            MatIconModule,
            MatRippleModule,
         ],
      })
   )
   .addDecorator(withKnobs)
   .addDecorator(wrap())
   .add('as text only', () => ({
      template: `
          <pxb-empty-state [title]="title">
            <!--<mat-icon>devices</mat-icon>-->
          </pxb-empty-state>
      `,
      props: {
         title: text('title', 'No Alarms Found')
      }
   }))
   .add('as a placeholder', () => ({
      template: `
          <pxb-empty-state [title]="title" [description]="description">
            <div empty-icon>(icon)</div>
            <button actions mat-stroked-button color="primary">Primary</button>
          </pxb-empty-state>
      `,
      props: {
         title: text('title', 'Predictions Page Coming Soon'),
         description: text('description', 'A fully redesigned predictions page is coming in our next release!')
      }
   })
);
