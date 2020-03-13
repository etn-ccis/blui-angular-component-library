import { moduleMetadata, storiesOf } from '@storybook/angular';
import { storyWrapper } from '../src/utils';
import { WelcomeModule } from '../src/welcome/welcome.component';

storiesOf('Intro/Overview', module)
    .addDecorator(
        moduleMetadata({
            imports: [WelcomeModule],
        })
    )
    .addParameters({
        options: {
            showPanel: false,
        },
    })
    .addDecorator(storyWrapper())
    .add('PX Blue Angular Components', () => ({
        template: `<welcome></welcome>`,
    }));
