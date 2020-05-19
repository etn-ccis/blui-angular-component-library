import { MatIconModule } from '@angular/material/icon';
import { DrawerHeaderModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { CommonModule } from '@angular/common';
import { withA11y } from '@storybook/addon-a11y';
import { withBasicConfig } from './basic-config.stories';

export const drawerContainer = () => (storyFn): any => {
    const story = storyFn();
    return {
        ...story,
        template: `${story.template}`,
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Drawer`, module)
    .addDecorator(
        moduleMetadata({
            imports: [DrawerHeaderModule, UtilModule, MatIconModule, CommonModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(drawerContainer())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('Drawer.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig);
