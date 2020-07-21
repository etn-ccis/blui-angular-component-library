import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, isDarkMode, storyWrapper, UtilModule } from '../../src/utils';
import { withBasicConfig } from './with-basic-config.stories';

import { UserMenuModule, InfoListItemModule, SpacerModule } from '@pxblue/angular-components';
import { withA11y } from '@storybook/addon-a11y';
import { withNonTextAvatar } from './with-non-text-avatar.stories';
import { MatIconModule } from '@angular/material/icon';
import { withMenuHeader } from './with-menu-header.stories';
import { withCustomMenu } from './with-custom-menu.stories';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as Colors from '@pxblue/colors';
import { withinToolbar } from './within-a-toolbar.stories';
import { withFullConfig } from './with-full-config.stories';

export const withinToolbarWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div style="width: 80%;" [style.backgroundColor]="getDecoratorBgColor()">${story.template}</div>`,
        styles: [`:host { display: flex; width: 100%; justify-content: center;}`],
        props: {
            ...story.props,
            getDecoratorBgColor: (): string => (isDarkMode() ? Colors.black[900] : 'white'),
        },
    };
};

const userMenuReadMe = getReadMe('UserMenu.md');

storiesOf(`${COMPONENT_SECTION_NAME}/User Menu`, module)
    .addDecorator(
        moduleMetadata({
            imports: [
                MatToolbarModule,
                UserMenuModule,
                InfoListItemModule,
                MatListModule,
                MatDividerModule,
                UtilModule,
                MatIconModule,
            ],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: userMenuReadMe },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with non-text avatar', withNonTextAvatar)
    .add('with a menu header', withMenuHeader)
    .add('with custom menu', withCustomMenu)
    .add('with full config', withFullConfig);

storiesOf(`${COMPONENT_SECTION_NAME}/User Menu`, module)
    .addDecorator(
        moduleMetadata({
            imports: [MatToolbarModule, UserMenuModule, SpacerModule, MatDividerModule, UtilModule, MatIconModule],
        })
    )
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(withinToolbarWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: userMenuReadMe },
    })
    .add('within a toolbar', withinToolbar);
