import { ChannelValueModule, HeroModule } from '@pxblue/angular-components';
import {withKnobs} from "@storybook/addon-knobs";
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {UtilModule, wrap} from '../utils';

storiesOf('Intro/Welcome', module)
    .addDecorator(
        moduleMetadata({
            imports: [HeroModule, ChannelValueModule, UtilModule],
        })
    )
   .addDecorator(withKnobs)
   .addDecorator(wrap())
    .add('to px blue', () => ({
        template: `hi, welcome to px blue component library`,
    }));
