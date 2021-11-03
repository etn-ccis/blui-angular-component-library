import { MatIconModule } from '@angular/material/icon';
import { MobileStepperModule } from '@brightlayer-ui/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { getReadMe, getReadMeStory, isDarkMode, storyWrapper, UtilModule } from '../../src/utils';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { withBasicConfig } from './basic-config.stories';
import { withA11y } from '@storybook/addon-a11y';
import * as Colors from '@brightlayer-ui/colors';
import { MatDividerModule } from '@angular/material/divider';
import { withFullConfig } from './with-full-config.stories';
import { MatButtonModule } from '@angular/material/button';

export const mobileStepperWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div [style.backgroundColor]="getDecoratorBgColor()">${story.template}</div>`,
        props: {
            ...story.props,
            getDecoratorBgColor: (): string => (isDarkMode() ? Colors.black[900] : 'white'),
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Mobile Stepper`, module)
    .addDecorator(
        moduleMetadata({
            imports: [MatIconModule, MobileStepperModule, MatButtonModule, MatDividerModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(mobileStepperWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('MobileStepper.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with full config', withFullConfig);
