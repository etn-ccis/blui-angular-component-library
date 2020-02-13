import React from 'react';
import * as Colors from '@pxblue/colors';
import { Spacer } from '@pxblue/react-components';
import { Typography } from '@material-ui/core';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const stories = storiesOf('Spacer', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/Spacer.md') },
});

stories.add('flex layout', () => {
    const flex1 = number('Item 1 Flex', 1, { range: true, min: 1, max: 5, step: 1 });
    const flex2 = number('Item 2 Flex', 1, { range: true, min: 1, max: 5, step: 1 });
    const flex3 = number('Item 3 Flex', 1, { range: true, min: 1, max: 5, step: 1 });

    return (
        <>
            <Typography>Horizontal</Typography>
            <div style={{ width: 300, height: 50, display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
                <Spacer flex={flex1} style={{ background: Colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer flex={flex2} style={{ background: Colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer flex={flex3} style={{ background: Colors.red[300] }}>
                    3
                </Spacer>
            </div>
            <Typography style={{ marginTop: 20 }}>Vertical</Typography>
            <div style={{ width: 300, height: 150, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <Spacer flex={flex1} style={{ background: Colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer flex={flex2} style={{ background: Colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer flex={flex3} style={{ background: Colors.red[300] }}>
                    3
                </Spacer>
            </div>
        </>
    );
});
stories.add('static layout', () => {
    const size1 = number('Item 1 Size (px)', 60, { range: true, min: 20, max: 100, step: 20 });
    const size2 = number('Item 2 Size (px)', 60, { range: true, min: 20, max: 100, step: 20 });
    const size3 = number('Item 3 Size (px)', 60, { range: true, min: 20, max: 100, step: 20 });

    return (
        <>
            <Typography>Horizontal</Typography>
            <div style={{ width: 300, height: 50, display: 'inline' }}>
                <Spacer width={size1} style={{ background: Colors.blue[300], display: 'inline-block' }}>
                    1
                </Spacer>
                <Spacer width={size2} style={{ background: Colors.yellow[300], display: 'inline-block' }}>
                    2
                </Spacer>
                <Spacer width={size3} style={{ background: Colors.red[300], display: 'inline-block' }}>
                    3
                </Spacer>
            </div>
            <Typography style={{ marginTop: 20 }}>Vertical</Typography>
            <div style={{ width: 300, height: 300 }}>
                <Spacer height={size1} style={{ background: Colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer height={size2} style={{ background: Colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer height={size3} style={{ background: Colors.red[300] }}>
                    3
                </Spacer>
            </div>
        </>
    );
});
