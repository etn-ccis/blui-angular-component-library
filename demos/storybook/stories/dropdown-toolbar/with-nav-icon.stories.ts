import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { invertRTL } from '../../src/utils';

export const withNavIcon = (): any => ({
    template: `
       <blui-dropdown-toolbar [title]="title" [subtitle]="state.selected || subtitle">
            <button mat-icon-button blui-nav-icon (click)="clickbluiIcon()" aria-label="menu icon">
                <mat-icon *ngIf="navIcon === 'menu'">menu</mat-icon>
                <mat-icon *ngIf="navIcon === 'arrow_back'" [style.transform]="invertRTL()">arrow_back</mat-icon>
            </button>
        <ng-container blui-toolbar-menu>
            <button mat-menu-item (click)="updateSubtitle('Test Item 1', state)">Test Item 1</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 2', state)">Test Item 2</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 3', state)">Test Item 3</button>
        </ng-container>
       </blui-dropdown-toolbar>
    `,
    props: {
        navIcon: select('blui-nav-icon', ['menu', 'arrow_back'], 'menu'),
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        updateSubtitle: (str: string, state): void => {
            state.selected = str;
        },
        state: {
            selected: undefined,
        },
        clickbluiIcon: action('blui nav icon clicked'),
        invertRTL: invertRTL,
    },
});
