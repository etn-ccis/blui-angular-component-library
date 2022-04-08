import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS,} from '../../src/constants';
import {getReadMe, getReadMeStory, storyWrapper, UtilModule} from '../../src/utils';
import {withA11y} from '@storybook/addon-a11y';

storiesOf(`${COMPONENT_SECTION_NAME}/Toolbar Menu`, module)
    .addDecorator(
        moduleMetadata({
            imports: [UtilModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('ToolbarMenu.md') } })
    .add(README_STORY_NAME, getReadMeStory);
