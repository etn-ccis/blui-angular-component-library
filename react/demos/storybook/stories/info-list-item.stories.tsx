import React from 'react';
import * as Colors from '@pxblue/colors';
//@ts-ignore
import { GradeA, Leaf, Temp, Device } from '@pxblue/icons-mui';
import { ChannelValue, InfoListItem } from '@pxblue/react-components';
import { List } from '@material-ui/core';
import { boolean, color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const stories = storiesOf('Info List Item', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/InfoListItem.md') },
});

stories.add('basic list item', () => (
    <InfoListItem
        dense
        title={text('Title', 'Info List Item')}
        subtitle={text('Subtitle', 'A simple demo')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
    />
));
stories.add('with icon', () => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        icon={<Leaf />}
        iconColor={color('iconColor', Colors.green[500])}
        divider={boolean('divider', true) ? 'full' : undefined}
    />
));
stories.add('with status and background color', () => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        divider={boolean('divider', true) ? 'full' : undefined}
        statusColor={color('statusColor', Colors.green[500])}
        fontColor={color('fontColor', Colors.green[500])}
        icon={<Leaf />}
        backgroundColor={color('backgroundColor', Colors.blue[50])}
    />
));
stories.add('with avatar ', () => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        avatar
        statusColor={color('statusColor', Colors.green[500])}
        icon={<GradeA />}
    />
));
stories.add('with long text', () => (
    <InfoListItem
        dense
        title={text('title', 'This is a really really really really really really really really long title')}
        subtitle={text(
            'subtitle',
            'this is a really really really really really really really really really really long subtitle'
        )}
        divider={boolean('divider', true) ? 'full' : undefined}
        icon={<Leaf />}
    />
));
stories.add('array for subtitles', () => (
    <InfoListItem
        dense
        title={text('Title', 'Temperature')}
        subtitle={['4', <Leaf key={'subtitle-element'} fontSize={'inherit'} />, 'leaves']}
        subtitleSeparator={text('separator', '-')}
        divider={'full'}
        icon={<Temp />}
    />
));
stories.add('with custom control', () => (
    <InfoListItem
        dense
        title={text('title', 'Test')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
        icon={<Device />}
        rightComponent={<ChannelValue value={text('value', '15')} units={text('units', 'A')} />}
    />
));
stories.add('with custom leftComponent', () => (
    <InfoListItem
        dense
        title={text('title', 'Test')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
        icon={<Device />}
        leftComponent={<ChannelValue value={text('value', '15')} units={text('units', 'A')} />}
    />
));
stories.add('in a full list', () => (
    <List style={{ color: Colors.gray['800'], padding: 0 }}>
        <InfoListItem
            dense
            title={'Status'}
            divider={'full'}
            statusColor={Colors.green[500]}
            subtitleSeparator={'/'}
            icon={<Leaf color={'inherit'} />}
            rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />}
        />
        <InfoListItem
            title={'Input Voltage'}
            divider={'full'}
            avatar
            subtitle={['Phase A', 'Phase B', 'Phase C']}
            icon={<GradeA />}
            rightComponent={
                <span>
                    <ChannelValue fontSize={16} value={478} units={'V'} />,{' '}
                    <ChannelValue fontSize={16} value={479} units={'V'} />,{' '}
                    <ChannelValue fontSize={16} value={473} units={'V'} />
                </span>
            }
        />
        <InfoListItem
            title={'Output Voltage'}
            divider={'full'}
            avatar
            statusColor={Colors.red[500]}
            fontColor={Colors.red[500]}
            subtitle={['Phase A', 'Phase B', 'Phase C']}
            icon={<GradeA color={'inherit'} />}
            rightComponent={
                <span style={{ color: Colors.red[500] }}>
                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                    <ChannelValue fontSize={16} value={480} units={'V'} />
                </span>
            }
        />
        <InfoListItem
            dense
            title={'Output Current'}
            divider={'full'}
            icon={<Device color={'inherit'} />}
            rightComponent={
                <span>
                    <ChannelValue fontSize={16} value={15} units={'A'} />,{' '}
                    <ChannelValue fontSize={16} value={14.9} units={'A'} />,{' '}
                    <ChannelValue fontSize={16} value={15} units={'A'} />
                </span>
            }
        />
        <InfoListItem
            dense
            title={'Temperature'}
            divider={'full'}
            icon={<Temp />}
            rightComponent={
                <ChannelValue fontSize={16} icon={<Leaf htmlColor={Colors.green[500]} />} value={68} units={'°F'} />
            }
        />
    </List>
));
