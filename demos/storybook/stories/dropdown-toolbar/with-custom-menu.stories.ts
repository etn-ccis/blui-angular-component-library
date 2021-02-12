import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';

export const withCustomMenu = (): any => ({
    template: `
       <pxb-dropdown-toolbar [title]="title" [subtitle]="state.selected || subtitle">
          <mat-nav-list pxb-toolbar-menu [style.paddingTop.px]="0">
            <pxb-info-list-item [dense]=true (click)="click(); updateSubtitle('Atlanta', state)">
                <mat-icon pxb-icon [style.color]="colors.blue[500]" style="transform: unset">business</mat-icon>
                <span pxb-title>Atlanta</span>
            </pxb-info-list-item>
            <pxb-info-list-item [dense]=true (click)="click(); updateSubtitle('Pittsburgh', state)" [statusColor]="colors.red[500]">
                <mat-icon pxb-icon [style.color]="colors.red[500]" style="transform: unset">house</mat-icon>
                <span pxb-title>Pittsburgh</span>
            </pxb-info-list-item>
            <pxb-info-list-item [dense]=true (click)="click(); updateSubtitle('New York', state)">
                <mat-icon pxb-icon [style.color]="colors.blue[500]" style="transform: unset">apartment</mat-icon>
                <span pxb-title>New York</span>
            </pxb-info-list-item>
          </mat-nav-list>
       </pxb-dropdown-toolbar>
    `,
    props: {
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        colors: Colors,
        click: action('Info list item clicked'),
        updateSubtitle: (str: string, state): void => {
            state.selected = str;
        },
        state: {
            selected: undefined,
        },
    },
});
