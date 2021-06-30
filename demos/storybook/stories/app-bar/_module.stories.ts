import { MatIconModule } from '@angular/material/icon';
import { AppBarModule, ChannelValueModule, ThreeLinerModule } from '@pxblue/angular-components';
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
import { withVariants } from './with-variants.stories';
import { withDynamicContent } from './with-dynamic-content.stories';
import { withNgContent } from './with-ng-content.stories';
import { withFullConfig } from './with-full-config.stories';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

export const appBarWrapper = () => (storyFn: any): any => {
    const story = storyFn();
    const storyStyles: string = story.styles ? story.styles[0] : '';
    return {
        ...story,
        template: `
                <div id="pxb-app-bar-container" style="width: 90%; max-height: 70vh; overflow: auto; position: relative" [style.backgroundColor]="getDecoratorBgColor()">
                    ${story.template}
                    <div style="height: 100vh; padding: 16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
                    </div>
                </div>`,
        styles: [
            `
            :host { 
                display: flex; width: 100%; justify-content: center;
            } 
            ::ng-deep .mat-typography {
                justify-content: center;
                display: flex;
            }
            ${storyStyles}
            `,
        ],
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
            imports: [
                AppBarModule,
                ThreeLinerModule,
                BrowserAnimationsModule,
                ChannelValueModule,
                MatIconModule,
                MatFormFieldModule,
                UtilModule,
                MatButtonModule,
                MatSelectModule,
                MatInputModule,
                MatMenuModule,
                MatListModule,
            ],
        })
    )
    .addDecorator(withKnobs)
    // @accessibility
    .addDecorator(withA11y)
    .addDecorator(appBarWrapper())
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('AppBar.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with variants', withVariants)
    .add('with dynamic content', withDynamicContent)
    .add('with ng-content', withNgContent)
    .add('with full config', withFullConfig);
