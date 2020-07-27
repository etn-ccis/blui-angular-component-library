import { text, number } from '@storybook/addon-knobs';

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
        <div pxb-right-content>
            <button mat-icon-button *ngIf="count > 0"><mat-icon>home</mat-icon></button>
            <button mat-icon-button *ngIf="count > 1"><mat-icon>work</mat-icon></button>
            <button mat-icon-button *ngIf="count > 2"><mat-icon>settings</mat-icon></button>
        </div>
       </pxb-selection-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        count: number('right content icon count', 3, { range: true, min: 0, max: 3, step: 1 }),
    },
});
