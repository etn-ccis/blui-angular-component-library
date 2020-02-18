import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule, wrap } from '../../utils';
const markdown = require('../../../../../docs/ChannelValue.md');

storiesOf('api/Channel Value', module)
    .addDecorator(
        moduleMetadata({
            imports: [UtilModule],
        })
    )
    .addDecorator(wrap())
    .addParameters({
        notes: { markdown },
    })
    .add('Documentation', () => ({
        template: `<documentation></documentation>`,
    }));
