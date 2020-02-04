import { ListItemTag } from '@pxblue/react-components';

import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { boolean, number, text, withKnobs, color, select } from '@storybook/addon-knobs';
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
            <ListItemTag label={text('label','In progress')} /><span style={{width: 8}}></span>
        </div>
    ),
    { actions: false }
);

{/* <ListItemTag label={'active'} backgroundColor={Colors.green['500']} /><span style={{width: 8}}></span>
            <ListItemTag label={'error'} backgroundColor={Colors.gray['500']} fontColor={Colors.gold['500']} /> */}

stories.add('with different colors', () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ListItemTag 
            label={text('label', 'active')} 
            backgroundColor={color('backgroundColor', Colors.gold['500'])}
            fontColor={color('fontColor', Colors.black['500'])}
            onClick={() => alert('You clicked me!')}
        />
    </div>
));
