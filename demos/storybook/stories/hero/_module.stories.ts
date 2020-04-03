import { MatIconModule } from '@angular/material/icon';
import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
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
import { withinBanner } from './within-a-banner.stories';
import { withFullConfig } from './with-full-config.stories';
import { withIconColor } from './with-icon-color.stories';
import { withChannelValueChildren } from './with-channelValue-children.stories';
import { withValueUnits } from './with-value-and-units.stories';
import { withBasicConfig } from './with-basic-config.stories';

storiesOf(`${COMPONENT_SECTION_NAME}/Hero`, module)
    .addDecorator(
        moduleMetadata({
            imports: [HeroModule, ChannelValueModule, UtilModule, MatIconModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addParameters({ ...STORY_PARAMS, notes: { markdown: getReadMe('Hero.md') } })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add('with value and units', withValueUnits)
    .add('with ChannelValue children', withChannelValueChildren)
    .add('with icon colors', withIconColor)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig)
    .add('within a HeroBanner', withinBanner);
