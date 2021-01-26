import * as Colors from '@pxblue/colors';
import { boolean, color, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withFullConfig = (): any => ({
    template: `
        <pxb-info-list-item
            [style.color]="colors.black[500]"
            matRipple
            style="display:flex; cursor: pointer"
            [iconAlign]="iconAlign"
            [wrapSubtitle]="wrapSubtitle"
            [wrapTitle]="wrapTitle"
            [avatar]="avatar"
            [statusColor]="statusColor"
            [hidePadding]="hidePadding"
            [dense]="dense"
            [chevron]="chevron"
            (click)="action()">
            <div pxb-title>{{title}}</div>
            <div pxb-subtitle>{{subtitle}}</div>
            <div pxb-info>{{info}}</div>
            <mat-icon  pxb-icon *ngIf="showIcon" 
                [style.color]="iconColor"
                [style.lineHeight.px]="24"
                [style.fontSize.px]="24"
                [style.backgroundColor]="getBgColor(avatar, statusColor)">
                devices
            </mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        title: text('title', 'Info List Item'),
        subtitle: text('subtitle', 'this is a subtitle within an InfoListItem'),
        info: text('info', 'this is a third line of text'),
        statusColor: color('statusColor', Colors.blue[500]),
        showIcon: boolean('Show Icon', true),
        hidePadding: boolean('hidePadding', false),
        chevron: boolean('chevron', true),
        dense: boolean('dense', false),
        wrapTitle: boolean('wrapTitle', false),
        wrapSubtitle: boolean('wrapSubtitle', false),
        iconAlign: select('iconAlign', ['left', 'center', 'right'], 'left'),
        iconColor: color('icon color', Colors.black[500]),
        avatar: boolean('avatar', false),
        action: action('InfoListItem clicked'),
        getBgColor: (avatar: boolean, statusColor: string): string => (avatar ? statusColor : 'unset'),
        colors: Colors,
    },
});
