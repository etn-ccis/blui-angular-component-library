import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { withBasicConfig } from './with-basic-config.stories';

import { UserMenuModule } from '@pxblue/angular-components';
import { withA11y } from '@storybook/addon-a11y';
import { withNonTextAvatar } from './with-non-text-avatar.stories';
import { MatIconModule } from '@angular/material/icon';
import { withMenuHeader } from './with-menu-header.stories';

storiesOf(`${COMPONENT_SECTION_NAME}/UserMenu`, module)
    .addDecorator(
        moduleMetadata({
            imports: [UserMenuModule, UtilModule, MatIconModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('Spacer.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with non-text avatar', withNonTextAvatar)
    .add('with a menu header', withMenuHeader);
