import * as Colors from '@pxblue/colors';
import {boolean, color, text} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export const withFullConfig = (): any => ({
    template: `
        <pxb-info-list-item
            matRipple
            style="display:flex; cursor: pointer"
            [wrapSubtitle]="wrapSubtitle"
            [wrapTitle]="wrapTitle"
            [title]="title"
            [subtitle]="subtitle"
            [statusColor]="statusColor"
            [hidePadding]="hidePadding"
            [dense]="dense"
            [chevron]="chevron"
            (click)="action()">
            <mat-icon *ngIf="showIcon" [style.color]="colors.blue[500]" icon>assignment</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        title: text('title', 'Info List Item'),
        subtitle: text('subtitle', 'this is a subtitle within an InfoListItem'),
        statusColor: color('statusColor', Colors.yellow[500]),
        showIcon: boolean('Show Icon', true),
        hidePadding: boolean('hidePadding', false),
        chevron: boolean('chevron', true),
        dense: boolean('dense', false),
        wrapTitle: boolean('wrapTitle', false),
        wrapSubtitle: boolean('wrapSubtitle', false),
        action: action('InfoListItem clicked'),
        colors: Colors
    }
});
