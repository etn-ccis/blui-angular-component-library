import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmptyStateModule } from '@pxblue/angular-components';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule, wrap } from '../src/utils';

storiesOf('playground/Empty State', module)
    .addDecorator(
        moduleMetadata({
            imports: [EmptyStateModule, MatButtonModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(wrap())
    .add('with action', () => ({
        template: `
          <pxb-empty-state [title]="title">
            <mat-icon empty-icon>devices</mat-icon>
            <button actions mat-raised-button color="primary" (click)="click()">
                <mat-icon>add_circle</mat-icon>
                {{actionText}}
             </button>
          </pxb-empty-state>
      `,
        props: {
            title: text('title', 'No Devices'),
            click: action('button clicked'),
            actionText: text('action text', 'ADD DEVICE'),
        },
    }))
    .add('as text only', () => ({
        template: `
          <pxb-empty-state [title]="title">
            <mat-icon empty-icon>notification_important</mat-icon>
          </pxb-empty-state>
      `,
        props: {
            title: text('title', 'No Alarms Found'),
        },
    }))
    .add('as a placeholder', () => ({
        template: `
          <pxb-empty-state [title]="title" [description]="description">
            <mat-icon empty-icon>trending_up</mat-icon>
            <button actions mat-stroked-button color="primary" (click)="click()">LEARN MORE</button>
         </pxb-empty-state>
      `,
        props: {
            title: text('title', 'Predictions Page Coming Soon'),
            description: text('description', 'A fully redesigned predictions page is coming in our next release!'),
            click: action('button clicked'),
        },
    }));
