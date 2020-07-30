import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';

export const withCustomMenu = (): any => ({
    template: `
       <pxb-dropdown-toolbar [title]="title" [subtitle]="subtitle">
        <ng-container pxb-toolbar-menu>
            <mat-nav-list>
                <pxb-info-list-item (click)="click()"><mat-icon [style.color]="colors.blue[500]" pxb-icon>business</mat-icon><span pxb-title>Atlanta</span></pxb-info-list-item>
                <pxb-info-list-item (click)="click()" [statusColor]="colors.red[500]"><mat-icon [style.color]="colors.red[500]" pxb-icon>house</mat-icon><span pxb-title>Pittsburgh</span></pxb-info-list-item>
                <pxb-info-list-item (click)="click()"><mat-icon [style.color]="colors.blue[500]" pxb-icon>apartment</mat-icon><span pxb-title>New York</span></pxb-info-list-item>
            </mat-nav-list>
        </ng-container>
       </pxb-dropdown-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        colors: Colors,
        click: action('Info list item clicked'),
    },
});
