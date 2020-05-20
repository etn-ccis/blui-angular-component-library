import { MatIconModule } from '@angular/material/icon';
import { ChannelValueModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_FULL_CONFIG_STORY_NAME,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { withBasicConfig } from './basic-config.stories';
import { withIcon } from './with-icon.stories';
import { withFontSize } from './with-font-size.stories';
import { withFullConfig } from './with-full-config.stories';
import { withUnits } from './with-units.stories';
import { withA11y } from '@storybook/addon-a11y';

storiesOf(`${COMPONENT_SECTION_NAME}/Channel Value`, module)
    .addDecorator(
        moduleMetadata({
            imports: [ChannelValueModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('ChannelValue.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with units', withUnits)
    .add('with icon', withIcon)
    .add('with fontSize', withFontSize)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig);
