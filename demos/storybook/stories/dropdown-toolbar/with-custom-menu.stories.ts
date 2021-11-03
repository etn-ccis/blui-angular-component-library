import { text } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { action } from '@storybook/addon-actions';

export const withCustomMenu = (): any => ({
    template: `
       <blui-dropdown-toolbar [title]="title" [subtitle]="state.selected || subtitle">
          <mat-nav-list blui-toolbar-menu [style.paddingTop.px]="0">
            <blui-info-list-item [dense]=true (click)="click(); updateSubtitle('Atlanta', state)">
                <mat-icon blui-icon [style.color]="colors.blue[500]" style="transform: unset">business</mat-icon>
                <span blui-title>Atlanta</span>
            </blui-info-list-item>
            <blui-info-list-item [dense]=true (click)="click(); updateSubtitle('Pittsburgh', state)" [statusColor]="colors.red[500]">
                <mat-icon blui-icon [style.color]="colors.red[500]" style="transform: unset">house</mat-icon>
                <span blui-title>Pittsburgh</span>
            </blui-info-list-item>
            <blui-info-list-item [dense]=true (click)="click(); updateSubtitle('New York', state)">
                <mat-icon blui-icon [style.color]="colors.blue[500]" style="transform: unset">apartment</mat-icon>
                <span blui-title>New York</span>
            </blui-info-list-item>
          </mat-nav-list>
       </blui-dropdown-toolbar>
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
