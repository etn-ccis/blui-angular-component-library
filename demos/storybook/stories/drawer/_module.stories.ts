import {MatIconModule} from '@angular/material/icon';
import {DrawerModule} from '@pxblue/angular-components';
import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {COMPONENT_SECTION_NAME, README_STORY_NAME, STORY_PARAMS, WITH_MIN_PROPS_STORY_NAME,} from '../../src/constants';
import {getReadMe, getReadMeStory, storyWrapper, UtilModule} from '../../src/utils';
import {withA11y} from '@storybook/addon-a11y';
import {withBasicConfig} from './basic-config.stories';
import {withCustomHeader} from './with-custom-header.stories';
import {MatButtonModule} from "@angular/material/button";

export const drawerWrapper = () => (storyFn): any => {
    const story = storyFn();
    return {
        ...story,
        template: `<div style="box-sizing: border-box; height: 100%; padding: 16px">${story.template}</div>`,
        styles: [`:host { display: flex; height: 100%; justify-content: center;}`],props: {
            ...story.props,
            state: { selected: undefined, open: true },
            toggleDrawer: (state): void => { state.open = !state.open },
            setActive: (id: string, state: { selected: string }): void => { state.selected = id },
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Drawer`, module)
    .addDecorator(
        moduleMetadata({
            imports: [DrawerModule, UtilModule, MatButtonModule, MatIconModule],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addDecorator(drawerWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Drawer.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with custom header', withCustomHeader);
