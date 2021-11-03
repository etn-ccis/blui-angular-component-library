import { text } from '@storybook/addon-knobs';

export const matListStyles = `
    .mat-list-base {
        padding: 8px 0px!important;
    }
    ::ng-deep .mat-list-text {
        padding-left: 0px!important;
    }
`;

export const withBasicConfig = (): any => ({
    styles: [matListStyles],
    template: `
        <blui-score-card [headerTitle]="headerTitle">
            <mat-list blui-body>
                <mat-list-item>Body Content</mat-list-item>
            </mat-list>
        </blui-score-card> 
    `,
    props: {
        headerTitle: text('headerTitle', 'Card Title'),
    },
});
