import { text } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { matListStyles } from './with-basic-config.stories';
const backgroundImage = require('../../assets/topology_40.png');

export const withCustomHeaderStyles = `
    ${matListStyles}
    ::ng-deep .blui-score-card .blui-score-card-header-background {
        background-image: url(${backgroundImage});
    }`;

export const withCustomHeader = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep blui-score-card .blui-root .blui-header {
            background-color: ${Colors.blue[500]};
            color: ${Colors.white[50]};
        }`,
    ],
    template: `
        <blui-score-card
            [class.root.header.color]="test"
            [headerTitle]="headerTitle"
            [headerSubtitle]="headerSubtitle"
            [headerInfo]="headerInfo"
        >
            <mat-list blui-body>
                <mat-list-item>Body Content</mat-list-item>
            </mat-list>
        </blui-score-card>
    `,
    props: {
        headerTitle: text('headerTitle', 'Card Title'),
        headerSubtitle: text('headerSubtitle', 'Card Subtitle'),
        headerInfo: text('headerInfo', '4 Devices'),
    },
});
