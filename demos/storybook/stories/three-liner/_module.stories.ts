import { MatIconModule } from '@angular/material/icon';
import { AppBarModule, ThreeLinerModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { withA11y } from '@storybook/addon-a11y';
import { withBasicConfig } from './basic-config.stories';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withCustomContent } from './with-custom-content';

storiesOf(`${COMPONENT_SECTION_NAME}/Three Liner`, module)
    .addDecorator(
        moduleMetadata({
            imports: [
                AppBarModule,
                ThreeLinerModule,
                BrowserAnimationsModule,
                MatIconModule,
                UtilModule,
                MatButtonModule,
            ],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('ThreeLiner.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with custom content', withCustomContent);
