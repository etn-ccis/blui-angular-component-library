import { text, number } from '@storybook/addon-knobs';

export const withFullConfig = (): any => ({
    template: `
       <pxb-selection-toolbar [title]="title" [subtitle]="state.selected || subtitle">
            <button mat-icon-button pxb-icon (click)="clickPXBIcon()">
                <mat-icon>menu</mat-icon>
            </button>
        <ng-container pxb-menu>
            <button mat-menu-item (click)="updateSubtitle('Test Item 1', state)">Test Item 1</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 2', state)">Test Item 2</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 3', state)">Test Item 3</button>
        </ng-container>
        <div pxb-right-content>
            <button mat-icon-button *ngIf="count > 0" (click)="clickRightContentIcon('home')"><mat-icon>home</mat-icon></button>
            <button mat-icon-button *ngIf="count > 1" (click)="clickRightContentIcon('work')"><mat-icon>work</mat-icon></button>
            <button mat-icon-button *ngIf="count > 2" (click)="clickRightContentIcon('settings')"><mat-icon>settings</mat-icon></button>
        </div>
       </pxb-selection-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        count: number('right content icon count', 3, { range: true, min: 0, max: 3, step: 1 }),
        updateSubtitle: (text: string, state) => {
            state.selected = text;
        },
        state: {
            selected: undefined,
        },
        clickPXBIcon: () => {
            console.log('pxb icon clicked...');
        },
        clickRightContentIcon: (text: string) => {
            console.log(text, 'icon clicked...');
        },
    },
});
