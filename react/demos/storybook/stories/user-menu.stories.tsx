import {action} from "@storybook/addon-actions";
import React from 'react';

import {text, withKnobs} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { UserMenu } from "@pxblue/react-components";

export const stories = storiesOf('User Menu', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/Hero.md') },
});

stories.add('with text', () => {
    const open = false;
    const value = text('value', 'aa');
    return <UserMenu value={value} open={open} onClick={() => {} }/>;
});
