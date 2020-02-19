import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UtilModule } from '../src/utils';

const heroMd = require('../../../docs/Hero.md');
const channelValueMd = require('../../../docs/ChannelValue.md');
const emptyStateMd = require('../../../docs/EmptyState.md');

storiesOf('api/Documentation', module)
    .addDecorator(
        moduleMetadata({
            imports: [UtilModule],
        })
    )
    .addParameters({
        notes: { markdown: heroMd },
    })
    .add('Hero', () => ({
        template: `<documentation></documentation>`,
    }));

storiesOf('api/Documentation', module)
    .addDecorator(
        moduleMetadata({
            imports: [UtilModule],
        })
    )
    .addParameters({
        notes: { markdown: channelValueMd },
    })
    .add('Channel Value', () => ({
        template: `<documentation></documentation>`,
    }));

storiesOf('api/Documentation', module)
    .addDecorator(
        moduleMetadata({
            imports: [UtilModule],
        })
    )
    .addParameters({
        notes: { markdown: emptyStateMd },
    })
    .add('Empty State', () => ({
        template: `<documentation></documentation>`,
    }));
