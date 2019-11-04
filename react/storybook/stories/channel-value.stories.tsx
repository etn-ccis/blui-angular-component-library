import React from 'react';

//@ts-ignore
import * as Colors from '@pxblue/colors';
//@ts-ignore
//@ts-ignore
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
//@ts-ignore
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp } from '@pxblue/icons-mui';

import Trend from '@material-ui/icons/TrendingUp';
import {text, number, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';


export const stories = storiesOf('Channel Value', module);
stories.addDecorator(withKnobs);


stories.add('with value', () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ChannelValue
            value={text('value', text('value', '123'))}
        />
    </div>
));
stories.add('with units', () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
        />
    </div>
));
stories.add('with icon', () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
            icon={<Trend htmlColor={Colors.red[500]}/>}
        />
    </div>
));
stories.add('with extraLarge font size', () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
            icon={<Trend htmlColor={Colors.red[500]}/>}
            fontSize={number('font size', 20)}
        />
    </div>
));
stories.add('with all props', () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ChannelValue
            value={text('value', text('value', '123'))}
            units={text('units', 'hz')}
            color={text('color', 'blue')}
            icon={<Trend htmlColor={Colors.red[500]}/>}
            fontSize={number('font size', 20)}
            prefix={boolean('prefix', false)}
        />
    </div>
));