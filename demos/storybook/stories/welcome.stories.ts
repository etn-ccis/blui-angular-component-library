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
    .add('Brightlayer UI Angular Components', () => ({
        template: `<welcome></welcome>`,
        styles: [`:host { width: 100%; height: 100%;}`],
    }));
