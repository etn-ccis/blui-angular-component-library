import { text, number, select } from '@storybook/addon-knobs';

export const withFullConfig = (): any => ({
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
        <div>
            <button mat-icon-button *ngIf="count > 0" (click)="clickRightContentIcon('home')" aria-label="home icon" style="margin-right: -8px;"><mat-icon>home</mat-icon></button>
            <button mat-icon-button *ngIf="count > 1" (click)="clickRightContentIcon('work')" aria-label="work icon" style="margin-right: -8px;"><mat-icon>work</mat-icon></button>
            <button mat-icon-button *ngIf="count > 2" (click)="clickRightContentIcon('settings')" aria-label="settings icon" style="margin-right: -8px;"><mat-icon>settings</mat-icon></button>
        </div>
       </pxb-selection-toolbar>
    `,
    props: {
        navIcon: select('nav icon', ['menu', 'arrow_back'], 'menu'),
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        count: number('right content icon count', 3, { range: true, min: 0, max: 3, step: 1 }),
        updateSubtitle: (str: string, state): void => {
            state.selected = str;
        },
        state: {
            selected: undefined,
        },
        clickPXBIcon: (): void => {
            // eslint-disable-next-line no-console
            console.log('pxb icon clicked...');
        },
        clickRightContentIcon: (str: string): void => {
            // eslint-disable-next-line no-console
            console.log(str, 'icon clicked...');
        },
    },
});
