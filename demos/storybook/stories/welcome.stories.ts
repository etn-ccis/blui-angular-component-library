import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
import {withKnobs} from "@storybook/addon-knobs";
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {UtilModule, wrap} from './utils';

storiesOf('Welcome', module)
    .addDecorator(
        moduleMetadata({
            imports: [HeroModule, ChannelValueModule, UtilModule],
        })
    )
   .addDecorator(wrap())
   .addDecorator(withKnobs)
    .add('to px blue', () => ({
        template: `hi`,
    }));
