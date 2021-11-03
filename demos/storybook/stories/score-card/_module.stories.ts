import { MatIconModule } from '@angular/material/icon';
import { ScoreCardModule, HeroModule, InfoListItemModule } from '@brightlayer-ui/angular-components';
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
import { MatListModule } from '@angular/material/list';
import { withBasicConfig } from './with-basic-config.stories';
import { withCustomHeader } from './with-custom-header.stories';
import { withActions } from './with-actions.stories';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { withHeroes } from './with-heroes.stories';
import { withScoreBadge } from './with-score-badge.stories';
import { withFullConfig } from './with-full-config.stories';
import { withA11y } from '@storybook/addon-a11y';

export const scorecardContainer = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div style="width: 400px">${story.template}</div>`,
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Score Card`, module)
    .addDecorator(
        moduleMetadata({
            imports: [
                ScoreCardModule,
                HeroModule,
                InfoListItemModule,
                UtilModule,
                MatIconModule,
                MatListModule,
                MatButtonModule,
                CommonModule,
            ],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(scorecardContainer())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('ScoreCard.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with custom header', withCustomHeader)
    .add('with actions', withActions)
    .add('with heroes', withHeroes)
    .add('with score badge', withScoreBadge)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig);
