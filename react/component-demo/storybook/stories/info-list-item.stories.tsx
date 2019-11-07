//@ts-ignore
import * as PXBColors from "@pxblue/colors";
//@ts-ignore
import {GradeA, Leaf, Temp, Device} from '@pxblue/icons-mui';
//@ts-ignore
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
//@ts-ignore
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import {boolean, color, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

export const stories = storiesOf('Info List Item', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/InfoListItem.md')}
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
        icon={<GradeA />}
        iconColor={color('iconColor', PXBColors.red[500])}
        divider={boolean('divider', true) ? 'full' : undefined}
    />
});
stories.add('with status and background color', () => {
    return <InfoListItem dense
         title={text('title', 'Info List Item')}
         subtitle={text('subtitle', 'A simple demo')}
         divider={boolean('divider', true) ? 'full' : undefined}
         statusColor={color('statusColor', PXBColors.purple[500])}
         fontColor={color('fontColor', PXBColors.green[500])}
         icon={<GradeA />}
         backgroundColor={color('backgroundColor', PXBColors.blue[50])}
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
        rightComponent={<ChannelValue value={text('value', '15')} units={text('units', 'A') }/>}
    />
});
