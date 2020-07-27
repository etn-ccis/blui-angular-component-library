import { text } from '@storybook/addon-knobs';

export const withFullConfig = (): any => ({
    template: `
       <pxb-selection-toolbar [title]="title" [subtitle]="subtitle">
            <button mat-icon-button pxb-icon>
                <mat-icon>menu</mat-icon>
            </button>
        <ng-container pxb-menu>
            <button mat-menu-item>Test Item 1</button>
            <button mat-menu-item>Test Item 2</button>
            <button mat-menu-item>Test Item 3</button>
        </ng-container>
        <button mat-icon-button pxb-right-content>
                <mat-icon>home</mat-icon>
            </button>
       </pxb-selection-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
    },
});
