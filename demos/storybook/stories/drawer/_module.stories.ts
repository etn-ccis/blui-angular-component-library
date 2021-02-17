import { MatIconModule } from '@angular/material/icon';
import { DrawerModule, ListItemTagModule } from '@pxblue/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';
import { withBasicConfig } from './basic-config.stories';
import { withCustomHeader } from './with-custom-header.stories';
import { MatButtonModule } from '@angular/material/button';
import { withSubheader } from './with-subheader.stories';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { withMultiNavGroups } from './with-multiple-nav-groups.stories';
import { withFooter } from './with-footer.stories';
import { MatDividerModule } from '@angular/material/divider';
import { withNestedNavItems } from './with-nested-nav-items.stories';
import { withinDrawerLayoutRail } from './within-drawer-layout-rail.stories';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { withFullConfig } from './with-full-config.stories';
import { withinDrawerLayout } from './within-drawer-layout.stories';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { withNavRail } from './with-nav-rail.stories';

export const drawerWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    const storyStyles: string = story.styles ? story.styles[0] : '';
    return {
        ...story,
        template: `<div style="box-sizing: border-box; height: 100%;">${story.template}</div>`,
        styles: [
            `
            :host { 
                display: flex; 
                height: 100%; 
                width: 100%;
            }
            ${storyStyles}
            `,
        ],
        props: {
            state: { selected: undefined, open: true },
            toggleDrawer: (state): void => {
                state.open = !state.open;
            },
            setActive: (id: string, state: { selected: string }): void => {
                state.selected = id;
            },
            ...story.props,
        },
    };
};

storiesOf(`${COMPONENT_SECTION_NAME}/Drawer`, module)
    .addDecorator(
        moduleMetadata({
            imports: [
                DrawerModule,
                ListItemTagModule,
                UtilModule,
                MatFormFieldModule,
                MatDividerModule,
                MatInputModule,
                MatButtonModule,
                MatIconModule,
                MatCardModule,
                BrowserAnimationsModule,
            ],
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
    .add('with custom header', withCustomHeader)
    .add('with subheader', withSubheader)
    .add('with multiple nav groups', withMultiNavGroups)
    .add('with nested nav items', withNestedNavItems)
    .add('with a footer', withFooter)
    .add('with a nav rail', withNavRail)
    .add('with full config', withFullConfig);

storiesOf(`${COMPONENT_SECTION_NAME}/Drawer`, module)
    .addDecorator(
        moduleMetadata({
            imports: [
                MatToolbarModule,
                DrawerModule,
                UtilModule,
                MatFormFieldModule,
                MatDividerModule,
                MatInputModule,
                MatButtonModule,
                MatIconModule,
                BrowserAnimationsModule,
            ],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Drawer.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add('within a Drawer Layout', withinDrawerLayout)
    .add('within a Drawer Layout as rail', withinDrawerLayoutRail);
