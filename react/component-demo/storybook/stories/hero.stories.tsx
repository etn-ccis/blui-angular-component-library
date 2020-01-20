import React from 'react';

//@ts-ignore
import * as Colors from '@pxblue/colors';
//@ts-ignore
import Hero from '@pxblue/react-components/core/Hero';
//@ts-ignore
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
//@ts-ignore
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp } from '@pxblue/icons-mui';

import {text, number, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';


export const stories = storiesOf('Hero', module);
stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown: require('./../../../docs/Hero.md')}
});

stories.add('with basic properties', () => (
    <Hero
        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.blue[500]}/>}
        label={text('label', 'Efficiency')}
        value={text('value', '94')}
        units={text('units', '%')}
    />
));

stories.add('with ChannelValue children', () => (
    <Hero
        label={text('label', 'Duration')}
        icon={<Leaf fontSize={'inherit'} htmlColor={Colors.green[500]}/>}>
        <ChannelValue fontSize={'large'} value={number('hours', 1)} units={'h'}/>
        <ChannelValue fontSize={'large'} value={number('minutes', 27)} units={'m'}/>
    </Hero>
));
