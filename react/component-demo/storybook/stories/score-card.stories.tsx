
import React from 'react';
//@ts-ignore
import {action} from '@storybook/addon-actions';
//@ts-ignore
import * as PXBColors from "@pxblue/colors";
//@ts-ignore
import { GradeA, Leaf, Temp, GradeA, Device, Moisture as Humidity } from '@pxblue/icons-mui';
import { MoreVert, Search, Mail, ChevronRight, Notifications, ListAlt, Cloud } from '@material-ui/icons';
//@ts-ignore
import { ChannelValue, InfoListItem, ScoreCard, Hero, HeroBanner } from '@pxblue/react-components/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { boolean, color, text, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
//@ts-ignore
import * as Colors from '@pxblue/colors';

const backgroundImage = require('../topology_40.png');

const heros: any[] = [
    <Hero
        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
        label={'Temperature'}
        iconSize={48}
        iconBackgroundColor={Colors.white[50]}
        value={98}
        units={'°F'}
        fontSize={'normal'}
    />,
    <Hero
        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
        label={'Humidity'}
        value={54}
        iconBackgroundColor={Colors.white[50]}
        units={'%'}
        iconSize={48}
        fontSize={'normal'}
    />,
]

export const stories = storiesOf('Score Card', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/ScoreCard.md') }
});

stories.add('minimal configuration', () => {
    return (
        <ScoreCard
            style={{ width: 400, flex: '0 0 auto' }}
            headerTitle={text('Title', 'Card Title')}
            headerSubtitle={text('Subtitle', 'Card Subtitle')}
        >
            <List>
                <ListItem>
                    <ListItemText primary={'Body Content'} />
                </ListItem>
            </List>
        </ScoreCard>
    )
});
stories.add('background and actions', () => {
    return (
        <ScoreCard
            style={{ width: 400, flex: '0 0 auto' }}
            headerTitle={text('Title', 'Substation 3')}
            headerSubtitle={text('Subtitle', 'High Humidity Alarm')}
            headerInfo={text('infotext', '4 Devices')}
            headerColor={color('backgroundColor', PXBColors.red[500])}
            headerFontColor={color('fontColor', PXBColors.white[50])}
            headerBackgroundImage={backgroundImage}
            actionLimit={number('Action Limit', 3, {range: true, min: 1, max: 6, step: 1})}
            actionItems={[
                <MoreVert onClick={action('clicked more')} />,
                <Search onClick={action('clicked search')} />,
                <Mail onClick={action('clicked mail')} />,
                <Notifications onClick={action('clicked alarms')} />,
                <ListAlt onClick={action('clicked list')} />,
                <Cloud onClick={action('clicked cloud')} />
            ].slice(0, number('Actions Length', 1, { range: true, min: 0, max: 6, step: 1 }))}
            actionRow={
                <List style={{ margin: 0 }}>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
        >
            <List>
                <ListItem>
                    <ListItemText primary={'Body Content'} />
                </ListItem>
            </List>
        </ScoreCard>
    )
});
stories.add('with hero badges', () => {
    return (
        <ScoreCard
            style={{ width: 400, flex: '0 0 auto' }}
            headerTitle={'Substation 3'}
            headerSubtitle={'High Humidity Alarm'}
            headerInfo={'4 Devices'}
            headerColor={PXBColors.red[500]}
            headerFontColor={PXBColors.white[50]}
            headerBackgroundImage={backgroundImage}
            actionItems={[
                <MoreVert onClick={action('clicked more')} />,
            ]}
            actionRow={
                <List style={{ margin: 0 }}>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
            badge={
                <HeroBanner>
                    {heros.slice(0, number('heroes.length', 1, { range: true, min: 0, max: 2, step: 1 }))}
                </HeroBanner >
            }
            badgeOffset={0}
        >
            <List>
                <ListItem>
                    <ListItemText primary={'Body Content'} />
                </ListItem>
            </List>
        </ScoreCard>
    )
});
stories.add('with score badge', () => {
    return (
        <ScoreCard
            style={{ width: 400, flex: '0 0 auto' }}
            headerTitle={'Substation 3'}
            headerSubtitle={'Normal'}
            headerInfo={'4 Devices'}
            headerFontColor={PXBColors.white[50]}
            headerBackgroundImage={backgroundImage}
            actionItems={[
                <MoreVert onClick={action('clicked more')} />,
            ]}
            actionRow={
                <List style={{ margin: 0 }}>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
            badge={
                <HeroBanner>
                    <Hero
                        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
                        label={'Grade'}
                        iconSize={72}
                        iconBackgroundColor={Colors.white[50]}
                        value={'98'}
                        units={'/100'}
                        fontSize={'normal'}
                    />
                </HeroBanner >
            }
            badgeOffset={number('badge.offset', -52)}
        >
            <List style={{ padding: '16px 0' }}>
                <InfoListItem dense style={{ height: 36 }}
                    title={'0 Alarms'}
                    icon={<Notifications color={'inherit'} />}
                />
                <InfoListItem dense style={{ height: 36 }}
                    fontColor={Colors.blue[500]}
                    iconColor={Colors.blue[500]}
                    title={'1 Event'}
                    icon={<ListAlt color={'inherit'} />}
                />
                <InfoListItem dense style={{ height: 36 }}
                    title={'Online'}
                    icon={<Cloud color={'inherit'} />}
                />
            </List>
        </ScoreCard>
    )
});
stories.add('full configuration', () => {
    return (
        <ScoreCard
            style={{ width: 400, flex: '0 0 auto' }}
            headerTitle={text('Title', 'Substation 3')}
            headerSubtitle={text('Subtitle', 'High Humidity Alarm')}
            headerInfo={text('infotext', '4 Devices')}
            headerColor={color('backgroundColor', PXBColors.red[500])}
            headerFontColor={color('fontColor', PXBColors.white[50])}
            headerBackgroundImage={boolean('useBackgroundImage', true) ? backgroundImage : undefined}
            actionLimit={number('Action Limit', 3, {range: true, min: 1, max: 6, step: 1})}
            actionItems={[
                <MoreVert onClick={action('clicked more')} />,
                <Search onClick={action('clicked search')} />,
                <Mail onClick={action('clicked mail')} />,
                <Notifications onClick={action('clicked alarms')} />,
                <ListAlt onClick={action('clicked list')} />,
                <Cloud onClick={action('clicked cloud')} />
            ].slice(0, number('Actions Length', 1, { range: true, min: 0, max: 6, step: 1 }))}
            actionRow={
                <List style={{ margin: 0 }}>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
            badge={
                <HeroBanner>
                    {heros.slice(0, number('heroes.length', 1, { range: true, min: 0, max: 2, step: 1 }))}
                </HeroBanner >
            }
            badgeOffset={number('badge.offset', -40)}
        >
            <List style={{ padding: '16px 0' }}>
                <InfoListItem dense style={{ height: 36 }}
                    title={'0 Alarms'}
                    icon={<Notifications color={'inherit'} />}
                />
                <InfoListItem dense style={{ height: 36 }}
                    fontColor={Colors.blue[500]}
                    iconColor={Colors.blue[500]}
                    title={'1 Event'}
                    icon={<ListAlt color={'inherit'} />}
                />
                <InfoListItem dense style={{ height: 36 }}
                    title={'Online'}
                    icon={<Cloud color={'inherit'} />}
                />
            </List>
        </ScoreCard>
    )
});