import { text } from '@storybook/addon-knobs';

export const withNavIcon = (): any => ({
    template: `
       <pxb-selection-toolbar [title]="title" [subtitle]="state.selected || subtitle">
            <button mat-icon-button pxb-icon (click)="clickPXBIcon()" aria-label="menu icon">
                <mat-icon>menu</mat-icon>
            </button>
        <ng-container pxb-menu>
            <button mat-menu-item (click)="updateSubtitle('Test Item 1', state)">Test Item 1</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 2', state)">Test Item 2</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 3', state)">Test Item 3</button>
        </ng-container>
       </pxb-selection-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        updateSubtitle: (text: string, state): void => {
            state.selected = text;
        },
        state: {
            selected: undefined,
        },
        clickPXBIcon: (): void => {
            // eslint-disable-next-line no-console
            console.log('pxb icon clicked...');
        },
    },
});
