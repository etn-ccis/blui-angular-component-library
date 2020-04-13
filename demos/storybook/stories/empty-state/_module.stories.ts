import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmptyStateModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_FULL_CONFIG_STORY_NAME,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { withDescription } from './with-description.stories';
import { withBasicConfig } from './basic-config.stories';
import { withActions } from './with-actions.stories';
import { withFullConfig } from './with-full-config.stories';
import { withA11y } from '@storybook/addon-a11y';

storiesOf(`${COMPONENT_SECTION_NAME}/Empty State`, module)
    .addDecorator(
        moduleMetadata({
            imports: [EmptyStateModule, MatButtonModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('EmptyState.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with description', withDescription)
    .add('with actions', withActions)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig);
