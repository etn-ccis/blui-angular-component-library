import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withNavIcon = (): any => ({
    template: `
       <pxb-selection-toolbar [title]="title" [subtitle]="state.selected || subtitle">
            <button mat-icon-button pxb-nav-icon (click)="clickPXBIcon()" aria-label="menu icon">
                <mat-icon *ngIf="navIcon === 'menu'">menu</mat-icon>
                <mat-icon *ngIf="navIcon === 'arrow_back'">arrow_back</mat-icon>
            </button>
        <ng-container pxb-toolbar-menu>
            <button mat-menu-item (click)="updateSubtitle('Test Item 1', state)">Test Item 1</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 2', state)">Test Item 2</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 3', state)">Test Item 3</button>
        </ng-container>
       </pxb-selection-toolbar>
    `,
    props: {
        navIcon: select('nav icon', ['menu', 'arrow_back'], 'menu'),
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        updateSubtitle: (str: string, state): void => {
            state.selected = str;
        },
        state: {
            selected: undefined,
        },
        clickPXBIcon: (): void => {
            action('pxb icon clicked...');
        },
    },
});
