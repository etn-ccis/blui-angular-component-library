import {color, text} from "@storybook/addon-knobs";
import * as Colors from '@pxblue/colors';
const backgroundImage = require('../../assets/topology_40.png');

export const withCustomHeader = (): any => ({
    template: `
          <pxb-scorecard 
              [headerTitle]="headerTitle"
              [headerSubtitle]="headerSubtitle"
              [headerInfo]="headerInfo"
              [headerColor]="headerColor"
              [headerFontColor]="headerFontColor"
          >
          <mat-list>
                <mat-list-item>Body Content</mat-list-item>
            </mat-list>
</pxb-scorecard>
      `,
    styles: [`
        /deep/ .pxb-scorecard-header { 
            background-image: url(${backgroundImage});
            background-size: cover;
            background-opacity: .03;
            background-position: center;
     }`],
    props: {
        headerTitle: text('headerTitle', 'Card Title'),
        headerSubtitle: text('headerSubtitle', 'Card Subtitle'),
        headerInfo: text('headerInfo', '4 Devices'),
        headerColor: color('headerColor', Colors.red[500]),
        headerFontColor: color('headerFontColor', Colors.white[50])
    },
});