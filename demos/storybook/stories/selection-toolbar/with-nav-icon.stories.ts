import { text } from '@storybook/addon-knobs';

export const withNavIcon = (): any => ({
    styles: [
        `
       ::ng-deep .pxb-selection-toolbar {
           width: 600px !important;
       }
    `,
    ],
    template: `
       <pxb-selection-toolbar [title]="title" [subtitle]="subtitle">
            <button mat-icon-button pxb-icon>
                <mat-icon>menu</mat-icon>
            </button>
        <ng-container pxb-menu>
            <button mat-menu-item>
                <span>Test Item 1</span>
            </button>
            <button mat-menu-item>
                <span>Test Item 2</span>
            </button>
            <button mat-menu-item>
                <span>Test Item 3</span>
            </button>
        </ng-container>
       </pxb-selection-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
    },
});
