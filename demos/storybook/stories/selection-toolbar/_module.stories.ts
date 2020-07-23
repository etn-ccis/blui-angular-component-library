import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS } from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { SelectionToolbarModule } from '@pxblue/angular-components';
import { withA11y } from '@storybook/addon-a11y';
import { withFullConfig } from './with-full-config.stories';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

storiesOf(`${COMPONENT_SECTION_NAME}/Selection Toolbar`, module)
    .addDecorator(
        moduleMetadata({
            imports: [SelectionToolbarModule, UtilModule, MatIconModule, MatMenuModule, MatButtonModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('SelectionToolbar.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add('with full config', withFullConfig);
