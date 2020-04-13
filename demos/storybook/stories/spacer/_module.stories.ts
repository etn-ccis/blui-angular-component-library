import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS } from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import {withFlexLayout} from "./with-flex-layout.stories";
import {withStaticLayout} from "./with-static-layout.stories";
import {SpacerModule} from "@pxblue/angular-components";
import { withA11y } from '@storybook/addon-a11y';

storiesOf(`${COMPONENT_SECTION_NAME}/Spacer`, module)
    .addDecorator(
        moduleMetadata({
            imports: [SpacerModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Spacer.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add('with flex layout', withFlexLayout)
    .add('with static layout', withStaticLayout);

