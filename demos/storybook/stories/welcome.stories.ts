import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {WelcomeModule} from "../src/welcome";

storiesOf('Intro/Welcome', module)
    .addDecorator(
        moduleMetadata({
            imports: [WelcomeModule],
        })
    )
    .addDecorator(withKnobs)
    .add('to px blue', () => ({
        template: `<welcome></welcome>`,
    }));
