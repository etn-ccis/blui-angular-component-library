import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {EmptyStateModule} from '@pxblue/angular-components';
import {text, withKnobs} from "@storybook/addon-knobs";
import {moduleMetadata, storiesOf} from "@storybook/angular";
import '@pxblue/themes/angular/theme.scss'

const wrap = () => storyFn => {
   const story = storyFn();
   console.log(story);
   return {
      ...story,
      template: `<div [style.backgroundColor]="'red'" class="pxb-blue">${story.template}</div>`
   };
};

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
   .addDecorator(wrap())
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
