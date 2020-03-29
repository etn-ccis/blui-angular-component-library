import { color, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
const backgroundImage = require('../../assets/topology_40.png');

export const demoStyles = [`
    /deep/ .pxb-scorecard .header-overlay { 
        background-image: url(${backgroundImage});
    } 
    /deep/ .mat-list-text {
        padding-left: 0px!important;
    }
`];

export const withCustomHeader = (): any => ({
    styles: demoStyles,
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
