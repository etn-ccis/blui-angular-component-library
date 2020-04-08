import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {InfoListItemModule, ChannelValueModule} from "@pxblue/angular-components";
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS, WITH_FULL_CONFIG_STORY_NAME,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { withBasicConfig } from './with-basic-config.stories';
import { withIcon } from "./with-icon.stories";
import { withSubtitle } from "./with-subtitle.stories";
import {withStatus} from "./with-status.stories";
import {withLeftComponent} from "./with-left-component.stories";
import {withRightComponent} from "./with-right-component.stories";
import {withFullConfig} from "./with-full-config.stories";
import {MatRippleModule} from "@angular/material/core";
import {withinList} from "./within-list.stories";
import {withArraySubtitle} from "./with-array-for-subtitle.stories";

export const infoListItemWrapper = () => (storyFn): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div style="width: 500px; background-color: white">${story.template}</div>`,
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Info List Item`, module)
    .addDecorator(
        moduleMetadata({
            imports: [InfoListItemModule, MatRippleModule, ChannelValueModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addDecorator(infoListItemWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('InfoListItem.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with subtitle', withSubtitle)
    .add('with icon', withIcon)
    .add('with array for subtitle', withArraySubtitle)
    .add('with status', withStatus)
    .add('with left component', withLeftComponent)
    .add('with right component', withRightComponent)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig)
    .add('within a full list', withinList);

