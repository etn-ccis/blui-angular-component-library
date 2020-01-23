import React from 'react';

import * as Colors from '@pxblue/colors';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
//@ts-ignore
import { GradeA, Leaf, CurrentCircled, Temp } from '@pxblue/icons-mui';
import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const stories = storiesOf('Hero Banner', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/Hero.md') },
});

const heroes = [
    <Hero
        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
        label={'Healthy'}
        value={96}
        units={'/100'}
    />,
    <Hero
        icon={<CurrentCircled fontSize={'inherit'} htmlColor={Colors.yellow[500]} />}
        label={'Load'}
        value={'90'}
        units={'%'}
        fontSize={'normal'}
    />,
    <Hero icon={<Temp fontSize={'inherit'} htmlColor={Colors.green[500]} />} label={'Temp'} value={55} units={'C'} />,
    <Hero
        icon={<Leaf fontSize={'inherit'} htmlColor={Colors.green[500]} />}
        label={'Battery'}
        value={96}
        units={'/100'}
    />,
];

stories.add('with a variety of heroes', () => (
    <HeroBanner>{heroes.slice(0, number('count', 4, { range: true, min: 0, max: 4, step: 1 }))}</HeroBanner>
));
