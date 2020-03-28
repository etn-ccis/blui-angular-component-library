import { MatIconModule } from '@angular/material/icon';
import { ScoreCardModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { MatListModule } from '@angular/material/list';
import { withBasicConfig } from './with-basic-config.stories';
import { withCustomHeader } from './with-custom-header.stories';
import { withActions } from './with-actions.stories';

export const scorecardContainer = () => (storyFn): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div style="width: 400px">${story.template}</div>`,
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Scorecard`, module)
    .addDecorator(
        moduleMetadata({
            imports: [ScoreCardModule, UtilModule, MatIconModule, MatListModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addDecorator(scorecardContainer())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Hero.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with custom header', withCustomHeader)
    .add('with actions', withActions);
