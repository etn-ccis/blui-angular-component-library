import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule, wrap } from '../../utils';
const markdown = require('../../../../../docs/Hero.md');

storiesOf('api/Hero Banner', module)
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
