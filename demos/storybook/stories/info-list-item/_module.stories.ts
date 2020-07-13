import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { InfoListItemModule, ChannelValueModule } from '@pxblue/angular-components';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_FULL_CONFIG_STORY_NAME,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, isDarkMode, storyWrapper, UtilModule } from '../../src/utils';
import { withBasicConfig } from './with-basic-config.stories';
import { withIcon } from './with-icon.stories';
import { withSubtitle } from './with-subtitle.stories';
import { withStatus } from './with-status.stories';
import { withFullConfig } from './with-full-config.stories';
import { MatRippleModule } from '@angular/material/core';
import { withinList } from './within-list.stories';
import { withA11y } from '@storybook/addon-a11y';
import { withRightContent } from './with-right-content.stories';
import { withLeftContent } from './with-left-content.stories';
import * as Colors from '@pxblue/colors';

export const infoListItemWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div style="width: 90%;" [style.backgroundColor]="getDecoratorBgColor()">${story.template}</div>`,
        styles: [`:host { display: flex; width: 100%; justify-content: center;}`],
        props: {
            ...story.props,
            getDecoratorBgColor: (): string => (isDarkMode() ? Colors.black[900] : 'white'),
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Info List Item`, module)
    .addDecorator(
        moduleMetadata({
            imports: [InfoListItemModule, MatRippleModule, ChannelValueModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(infoListItemWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('InfoListItem.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with subtitle', withSubtitle)
    .add('with icon', withIcon)
    .add('with status', withStatus)
    .add('with left content', withLeftContent)
    .add('with right content', withRightContent)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig)
    .add('within a full list', withinList);
