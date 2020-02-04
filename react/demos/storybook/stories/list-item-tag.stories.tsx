import { ListItemTag } from '@pxblue/react-components';

import * as Colors from '@pxblue/colors';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

export const stories = storiesOf('List Item Tag', module);

stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/ListItemTag.md') },
});

stories.add(
    'with label',
    () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemTag label={text('label', 'In progress')} />
            <span style={{ width: 8 }}></span>
        </div>
    ),
    { actions: false }
);

stories.add('with different colors', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ListItemTag
            label={text('label', 'active')}
            backgroundColor={color('backgroundColor', Colors.gold['500'])}
            fontColor={color('fontColor', Colors.black['500'])}
            onClick={action('ListItemTag: onClick')}
        />
    </div>
));
