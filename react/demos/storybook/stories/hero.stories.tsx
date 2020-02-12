import React from 'react';

import * as Colors from '@pxblue/colors';
import { Hero, ChannelValue } from '@pxblue/react-components';
//@ts-ignore
import { GradeA, Leaf } from '@pxblue/icons-mui';

import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const stories = storiesOf('Hero', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/Hero.md') },
});

stories.add('with basic properties', () => (
    <Hero
        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.blue[500]} />}
        label={text('label', 'Efficiency')}
        value={text('value', '94')}
        units={text('units', '%')}
    />
));

stories.add('with ChannelValue children', () => (
    <Hero label={text('label', 'Duration')} icon={<Leaf fontSize={'inherit'} htmlColor={Colors.green[500]} />}>
        <ChannelValue fontSize={'large'} value={number('hours', 1)} units={'h'} />
        <ChannelValue fontSize={'large'} value={number('minutes', 27)} units={'m'} />
    </Hero>
));
