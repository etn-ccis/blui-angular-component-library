import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { matListStyles } from './with-basic-config.stories';
const backgroundImage = require('../../assets/topology_40.png');

export const withCustomHeaderStyles = `
    ${matListStyles} 
    ::ng-deep pxb-scorecard .header-background {
        background-image: url(${backgroundImage});
    }`;

export const withCustomHeader = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep pxb-scorecard .root .header {
            background-color: ${Colors.red[500]};
            color: ${Colors.white[50]};
        }`,
    ],
    template: `
      <pxb-scorecard 
          [class.root.header.color]="test"
          [headerTitle]="headerTitle"
          [headerSubtitle]="headerSubtitle"
          [headerInfo]="headerInfo"
      >
      <mat-list body>
          <mat-list-item>Body Content</mat-list-item>
      </mat-list>
    </pxb-scorecard>
  `,
    props: {
        headerTitle: text('headerTitle', 'Card Title'),
        headerSubtitle: text('headerSubtitle', 'Card Subtitle'),
        headerInfo: text('headerInfo', '4 Devices'),
    },
});
