import { MatIconModule } from '@angular/material/icon';
import { AppBarModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { getReadMe, getReadMeStory, isDarkMode, storyWrapper, UtilModule } from '../../src/utils';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { withA11y } from '@storybook/addon-a11y';
import { withBasicConfig } from './basic-config.stories';
import * as Colors from '@pxblue/colors';

export const appBarWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        template: `
                <div id="pxb-app-bar-container" style="width: 90%; max-height: 70vh; overflow: auto; position: relative" [style.backgroundColor]="getDecoratorBgColor()">
                    ${story.template}
                    <div [style.height.vh]="100"></div>
                </div>`,
        styles: [`:host { display: flex; width: 100%; justify-content: center;}`],
        props: {
            ...story.props,
            scrollContainerId: 'pxb-app-bar-container',
            getDecoratorBgColor: (): string => (isDarkMode() ? Colors.black[900] : 'white'),
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/App Bar`, module)
    .addDecorator(
        moduleMetadata({
            imports: [AppBarModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(appBarWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('ChannelValue.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig);
