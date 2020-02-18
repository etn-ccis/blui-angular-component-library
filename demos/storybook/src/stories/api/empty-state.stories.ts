import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule, wrap } from '../../utils';
const markdown = require('../../../../../docs/EmptyState.md');

storiesOf('api/Empty State', module)
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
