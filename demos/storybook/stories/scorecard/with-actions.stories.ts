import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
const backgroundImage = require('../../assets/topology_40.png');

export const withActions = (): any => ({
    styles: [`
        /deep/ .pxb-scorecard-header-overlay { 
            background-image: url(${backgroundImage});
        }`
    ],
    template: `
          <pxb-scorecard 
              [actionLimit]="actionLimit"
              [headerTitle]="'Substation 3'"
              [headerSubtitle]="'High Humidity Alarm'"
              [headerInfo]="'4 Devices'"
              [headerColor]="headerColor"
              [headerFontColor]="headerFontColor"
          >
            <mat-list>
                <mat-list-item>Body Content</mat-list-item>
            </mat-list>
            
            <mat-list>
                <mat-list-item>
                View Location
                </mat-list-item>
            </mat-list>
        </pxb-scorecard>
      `,
    props: {
        headerColor: Colors.red[500],
        headerFontColor: Colors.white[50],
        actionLimit: number('actionLimit', 3, { range: true, min: 1, max: 6, step: 1 }),
    },
});
