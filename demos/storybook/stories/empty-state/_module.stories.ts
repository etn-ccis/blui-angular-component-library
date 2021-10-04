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
import { getReadMe, getReadMeStory, storyWrapper, UtilModule, isDarkMode } from '../../src/utils';
import { withDescription } from './with-description.stories';
import { withBasicConfig } from './basic-config.stories';
import { withActions } from './with-actions.stories';
import { withFullConfig } from './with-full-config.stories';
import { withinACardConfig } from './within-a-card.stories';
import { withA11y } from '@storybook/addon-a11y';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Colors from '@pxblue/colors';

export const useWhiteBackground = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div [style.backgroundColor]="getDecoratorBgColor()" id="white-background-story-wrapper">${story.template}</div>`,
        styles: [
            `#white-background-story-wrapper {
                width: 100vw; height: 100vh; 
                display: flex; 
                align-items: center; 
                justify-content: center;
            }`,
        ],
        props: {
            ...story.props,
            getDecoratorBgColor: (): string => (isDarkMode() ? Colors.darkBlack[900] : 'white'),
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Empty State`, module)
    .addDecorator(
        moduleMetadata({
            imports: [BrowserAnimationsModule, EmptyStateModule, MatButtonModule, MatIconModule, UtilModule, MatExpansionModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(useWhiteBackground())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('EmptyState.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with description', withDescription)
    .add('with actions', withActions)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig)
    .add('within a card', withinACardConfig);
