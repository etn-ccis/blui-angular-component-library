import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { wrap } from '../src/utils';
import { WelcomeModule } from '../src/welcome';

storiesOf('Intro/Welcome', module)
    .addDecorator(
        moduleMetadata({
            imports: [WelcomeModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(wrap())
    .add('to px blue', () => ({
        template: `<welcome></welcome>`,
        options: {
           showPanel: false
        }
    }));
