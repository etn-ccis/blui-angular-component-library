import {MatIcon, MatIconModule} from "@angular/material/icon";
import { EmptyStateModule } from '@pxblue/angular-components';
import {text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";

storiesOf('Empty State', module)
   .addDecorator(
      moduleMetadata({
         imports: [EmptyStateModule, MatIconModule],
      })
   )
   .addDecorator(withKnobs)
   .add('text only', () => ({
      template: `
          <pxb-empty-state [title]="title">
            <!--<mat-icon empty-icon>devices</mat-icon>-->
          </pxb-empty-state>
      `,
      props: {
         title: text('title', 'tdest')
      }
   })
);
