import { color, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import {matListStyles} from "./with-basic-config.stories";
const backgroundImage = require('../../assets/topology_40.png');

export const withCustomHeaderStyles = `
    ${matListStyles}
    /deep/ .pxb-scorecard .header-overlay { 
        background-image: url(${backgroundImage});
    }`;

export const withCustomHeader = (): any => ({
    styles: [withCustomHeaderStyles],
    template: `
          <pxb-scorecard 
              [headerTitle]="headerTitle"
              [headerSubtitle]="headerSubtitle"
              [headerInfo]="headerInfo"
              [headerColor]="headerColor"
              [headerFontColor]="headerFontColor"
          >
          <mat-list content>
                <mat-list-item>Body Content</mat-list-item>
            </mat-list>
        </pxb-scorecard>
      `,
    props: {
        headerTitle: text('headerTitle', 'Card Title'),
        headerSubtitle: text('headerSubtitle', 'Card Subtitle'),
        headerInfo: text('headerInfo', '4 Devices'),
        headerColor: color('headerColor', Colors.red[500]),
        headerFontColor: color('headerFontColor', Colors.white[50]),
    },
});
