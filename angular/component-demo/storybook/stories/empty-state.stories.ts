import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {EmptyStateModule} from '@pxblue/angular-components/core';
import {text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";

storiesOf('Components|Empty State', module)
   .addDecorator(
      moduleMetadata({
         imports: [
            EmptyStateModule,
            MatIconModule
         ],
      })
   )
   .addDecorator(withKnobs)
   .add('text only', () => ({
      template: `
          <pxb-empty-state [title]="title">
            <!--<mat-icon>devices</mat-icon>-->
          </pxb-empty-state>
      `,
      props: {
         title: text('title', 'Just Text')
      }
   })
);
