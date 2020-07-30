import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS } from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { DropdownToolbarModule, InfoListItemModule } from '@pxblue/angular-components';
import { withA11y } from '@storybook/addon-a11y';
import { withFullConfig } from './with-full-config.stories';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { withBasicUsage } from './with-basic-usage.stories';
import { withNavIcon } from './with-nav-icon.stories';
import { withCustomMenu } from './with-custom-menu.stories';
import { MatListModule } from '@angular/material/list';

export const dropdownToolbarWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        styles: [
            `
        ::ng-deep .pxb-dropdown-toolbar {
            width: 80vw !important;
        }`,
        ],
        props: {
            ...story.props,
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Dropdown Toolbar`, module)
    .addDecorator(
        moduleMetadata({
            imports: [
                DropdownToolbarModule,
                UtilModule,
                MatIconModule,
                MatMenuModule,
                MatButtonModule,
                InfoListItemModule,
                MatListModule,
            ],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(dropdownToolbarWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('DropdownToolbar.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add('with basic usage', withBasicUsage)
    .add('with nav icon', withNavIcon)
    .add('with custom menu', withCustomMenu)
    .add('with full config', withFullConfig);
