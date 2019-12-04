import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
import EmptyState from '@pxblue/react-components/core/EmptyState';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
// import { ScoreCard } from './ScoreCard';

import DevicesIcon from '@material-ui/icons/Devices'
import { Add } from '@material-ui/icons'

import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import { List, Card, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { ChevronRight, MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity } from '@pxblue/icons-mui';
import Button from "@material-ui/core/Button";

// import farm from './farm.jpg';
import top from './topology_40.png';

export default ({ ...props }) => (
    <div style={{ padding: 10 }}>
        <ScoreCard
            style={{maxWidth: 400}}
            headerColor={Colors.red[500]}
            headerBackgroundImage={top}
            headerTitle={'Substation 3'}
            headerSubtitle={'High Humidity Alarm'}
            headerInfo={'4 Devices'}
            headerFontColor={Colors.white[50]}
            actionItems={[
                <MoreVert onClick={() => alert('something did')} />,
            ]}
            badge={
                <HeroBanner style={{minWidth: 210}}>
                    <Hero
                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                        label={'Temperature'}
                        iconSize={48}
                        value={98}
                        units={'°F'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                        label={'Humidity'}
                        value={54}
                        units={'%'}
                        iconSize={48}
                        fontSize={'normal'}
                    />
                </HeroBanner>
            }
            badgeOffset={0}
            actionRow={
                <List>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
        >
            <List style={{ padding: '16px 0' }}>
                <InfoListItem dense style={{height: 36}}
                    fontColor={Colors.red[500]}
                    iconColor={Colors.red[500]}
                    title={'1 Alarm'}
                    icon={<Leaf color={'inherit'} />}
                />
                <InfoListItem dense style={{height: 36}}
                    fontColor={Colors.blue[500]}
                    iconColor={Colors.blue[500]}
                    title={'1 Event'}
                    icon={<Leaf color={'inherit'} />}
                />
                <InfoListItem dense style={{height: 36}}
                    title={'Online'}
                    icon={<Leaf color={'inherit'} />}
                />
            </List>
        </ScoreCard>
        <ScoreCard
            style={{ marginTop: 16 }}
            headerColor={Colors.blue[500]}
            headerBackgroundImage={top}
            headerTitle={'Substation 3'}
            headerSubtitle={'Normal'}
            headerInfo={'4 Devices'}
            headerFontColor={Colors.white[50]}
            actionItems={[
                <MoreVert onClick={() => alert('something did')} />,
            ]}
            badge={
                <HeroBanner style={{minWidth: 850}} maxItems={12}>
                    <Hero
                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                        label={'Temperature'}
                        iconSize={48}
                        value={98}
                        units={'°F'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                        label={'Humidity'}
                        value={54}
                        units={'%'}
                        iconSize={48}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                        label={'Temperature'}
                        iconSize={48}
                        value={98}
                        units={'°F'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                        label={'Humidity'}
                        value={54}
                        units={'%'}
                        iconSize={48}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                        label={'Temperature'}
                        iconSize={48}
                        value={98}
                        units={'°F'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                        label={'Humidity'}
                        value={54}
                        units={'%'}
                        iconSize={48}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                        label={'Temperature'}
                        iconSize={48}
                        value={98}
                        units={'°F'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                        label={'Humidity'}
                        value={54}
                        units={'%'}
                        iconSize={48}
                        fontSize={'normal'}
                    />

                </HeroBanner>
            }
            badgeOffset={-40}
            actionRow={
                <List>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
        >
            <List style={{ padding: '16px 0' }}>
                <InfoListItem dense style={{height: 36}}
                    // fontColor={Colors.red[500]}
                    // iconColor={Colors.red[500]}
                    title={'0 Alarms'}
                    icon={<Leaf color={'inherit'} />}
                />
                <InfoListItem dense style={{height: 36}}
                    fontColor={Colors.blue[500]}
                    iconColor={Colors.blue[500]}
                    title={'1 Event'}
                    icon={<Leaf color={'inherit'} />}
                />
                <InfoListItem dense style={{height: 36}}
                    title={'Online'}
                    icon={<Leaf color={'inherit'} />}
                />
            </List>
        </ScoreCard>

        <Card style={{ marginTop: 20 }}>
            <List style={{ color: Colors.gray['800'], padding: 0 }}>
                <HeroBanner divider>
                    <Hero
                        icon={<GradeA fontSize={'inherit'} color={'inherit'} htmlColor={Colors.green[500]} />}
                        label={'Healthy'}
                        value={96}
                        units={'/100'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Pie color={Colors.blue[500]} percent={65} size={36} />}
                        label={'Load'}
                        fontSize={'normal'}
                    >
                        <ChannelValue value={65} units={'%'}
                            icon={<Trend htmlColor={Colors.red[500]} fontSize={'inherit'} />} />
                    </Hero>
                    <Hero
                        icon={<Timer fontSize={'inherit'} color={'inherit'} />}
                        label={'Estimated'}
                        fontSize={'normal'}
                    >
                        <ChannelValue value={1} units={'h'} />
                        <ChannelValue value={26} units={'m'} />
                    </Hero>
                    <Hero
                        icon={<Battery color={Colors.blue[500]} percent={100} size={36} />}
                        value={'Full'}
                        label={'Battery'}
                        fontSize={'normal'}
                    >
                        <ChannelValue value={'Full'} />
                    </Hero>
                </HeroBanner>
                <InfoListItem dense
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
                    icon={<VoltageCircled />}
                    rightComponent={<span><ChannelValue fontSize={16} value={478} units={'V'} />, <ChannelValue fontSize={16} value={479} units={'V'} />, <ChannelValue fontSize={16} value={473} units={'V'} /></span>}
                />
                <InfoListItem
                    title={'Output Voltage'}
                    divider={'full'}
                    avatar
                    statusColor={Colors.red[500]}
                    fontColor={Colors.red[500]}
                    subtitle={['Phase A', 'Phase B', 'Phase C']}
                    icon={<VoltageCircled color={'inherit'} />}
                    rightComponent={<span style={{ color: Colors.red[500] }}><ChannelValue fontSize={16} value={480} units={'V'} />, <ChannelValue fontSize={16} value={480} units={'V'} />, <ChannelValue fontSize={16} value={480} units={'V'} /></span>}
                />
                <InfoListItem dense
                    title={'Output Current'}
                    divider={'full'}
                    icon={<CurrentCircled color={'inherit'} />}
                    rightComponent={<span><ChannelValue fontSize={16} value={15} units={'A'} />, <ChannelValue fontSize={16} value={14.9} units={'A'} />, <ChannelValue fontSize={16} value={15} units={'A'} /></span>}
                />
                <InfoListItem dense
                    title={'Temperature'}
                    divider={'full'}
                    icon={<Temp />}
                    rightComponent={<ChannelValue fontSize={16} icon={<Trend htmlColor={Colors.red[500]} />} value={68} units={'°F'} />}
                />
            </List>
        </Card>
        <Card style={{ marginTop: '10px', padding: '10px' }}>
            <EmptyState
                icon={
                    <DevicesIcon fontSize={'inherit'} />
                }
                title={"No Devices"}
                actions={
                    <Button variant="contained" color="primary">
                        <Add style={{ marginRight: '5px' }} />
                        Add Device
                    </Button>
                }
            />
        </Card>
    </div >
);

