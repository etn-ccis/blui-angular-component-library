import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { boolean, number, text, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

export const stories = storiesOf('Channel Value', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/ChannelValue.md') },
});

stories.add(
    'with value',
    () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ChannelValue value={text('value', text('value', '123'))} />
        </div>
    ),
    { actions: false }
);
stories.add('with units', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue value={text('value', text('value', '123'))} units={text('units', 'hz')} />
    </div>
));
stories.add('with icon', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
            icon={<Trend htmlColor={Colors.red[500]} />}
        />
    </div>
));
stories.add('with extraLarge font size', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
            icon={<Trend htmlColor={Colors.red[500]} />}
            fontSize={number('font size', 30)}
        />
    </div>
));
stories.add('with all props', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
            color={color('textColor', Colors.red[500])}
            icon={<Trend htmlColor={Colors.red[500]} />}
            fontSize={number('font size', 30)}
            prefix={boolean('prefix', false)}
        />
    </div>
));
