//@ts-ignore
import * as PXBColors from "@pxblue/colors";
//@ts-ignore
import { GradeA, Leaf, Temp, Device } from '@pxblue/icons-mui';
//@ts-ignore
import { ChannelValue, InfoListItem } from '@pxblue/react-components/core';
import { List } from '@material-ui/core';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
const README = require('./../../../docs/InfoListItem.md').default;

export const stories = storiesOf('Info List Item', module);
stories.addDecorator(withKnobs);
stories.addParameters({
   readme: {
      sidebar: README,
   },
});

stories.add('basic list item', () => {
    return <InfoListItem dense
        title={text('Title', 'Info List Item')}
        subtitle={text('Subtitle', 'A simple demo')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
    />
});
stories.add('with icon', () => {
    return <InfoListItem dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        icon={<Leaf />}
        iconColor={color('iconColor', PXBColors.green[500])}
        divider={boolean('divider', true) ? 'full' : undefined}
    />
});
stories.add('with status and background color', () => {
    return <InfoListItem dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        divider={boolean('divider', true) ? 'full' : undefined}
        statusColor={color('statusColor', PXBColors.green[500])}
        fontColor={color('fontColor', PXBColors.green[500])}
        icon={<Leaf />}
        backgroundColor={color('backgroundColor', PXBColors.blue[50])}
    />
});
stories.add('with avatar ', () => {
    return <InfoListItem dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        avatar
        statusColor={color('statusColor', PXBColors.green[500])}
        icon={<GradeA />}
    />
});
stories.add('with long text', () => {
    return <InfoListItem dense
        title={text('title', 'This is a really really really really really really really really long title')}
        subtitle={text('subtitle', 'this is a really really really really really really really really really really long subtitle')}
        divider={boolean('divider', true) ? 'full' : undefined}
        icon={<Leaf />}
    />
});
stories.add('array for subtitles', () => {
    return <InfoListItem dense
        title={text('Title', 'Temperature')}
        subtitle={['4', <Leaf fontSize={'inherit'} />, 'leaves']}
        subtitleSeparator={text('separator', '-')}
        divider={'full'}
        icon={<Temp />}
    />
});
stories.add('with custom control', () => {
    return <InfoListItem dense
        title={text('title', 'Test')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
        icon={<Device />}
        rightComponent={<ChannelValue value={text('value', '15')} units={text('units', 'A')} />}
    />
});
stories.add('in a full list', () => {
    return (
        <List style={{ color: PXBColors.gray['800'], padding: 0 }}>
            <InfoListItem dense
                title={'Status'}
                divider={'full'}
                statusColor={PXBColors.green[500]}
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
                rightComponent={<span><ChannelValue fontSize={16} value={478} units={'V'} />, <ChannelValue fontSize={16} value={479} units={'V'} />, <ChannelValue fontSize={16} value={473} units={'V'} /></span>}
            />
            <InfoListItem
                title={'Output Voltage'}
                divider={'full'}
                avatar
                statusColor={PXBColors.red[500]}
                fontColor={PXBColors.red[500]}
                subtitle={['Phase A', 'Phase B', 'Phase C']}
                icon={<GradeA color={'inherit'} />}
                rightComponent={<span style={{ color: PXBColors.red[500] }}><ChannelValue fontSize={16} value={480} units={'V'} />, <ChannelValue fontSize={16} value={480} units={'V'} />, <ChannelValue fontSize={16} value={480} units={'V'} /></span>}
            />
            <InfoListItem dense
                title={'Output Current'}
                divider={'full'}
                icon={<Device color={'inherit'} />}
                rightComponent={<span><ChannelValue fontSize={16} value={15} units={'A'} />, <ChannelValue fontSize={16} value={14.9} units={'A'} />, <ChannelValue fontSize={16} value={15} units={'A'} /></span>}
            />
            <InfoListItem dense
                title={'Temperature'}
                divider={'full'}
                icon={<Temp />}
                rightComponent={<ChannelValue fontSize={16} icon={<Leaf htmlColor={PXBColors.green[500]} />} value={68} units={'°F'} />}
            />
        </List>
    );
});
