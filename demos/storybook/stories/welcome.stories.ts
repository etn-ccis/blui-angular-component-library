import { moduleMetadata, storiesOf } from '@storybook/angular';
import { storyWrapper } from '../src/utils';
import { WelcomeModule } from '../src/welcome/welcome.component';

storiesOf('Intro/Welcome', module)
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
    .add('to px blue', () => ({
        template: `<welcome></welcome>`,
    }));
