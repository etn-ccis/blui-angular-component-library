import React, { useState } from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
import EmptyState from '@pxblue/react-components/core/EmptyState';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerFooter, DrawerHeader, DrawerSubheader } from '@pxblue/react-components/core/Drawer';
import { DrawerLayout } from '@pxblue/react-components/core/DrawerLayout';


import DevicesIcon from '@material-ui/icons/Devices'
import { Add, Menu, NotificationsActive, List as ListIcon, Public, Settings, Gavel, Help } from '@material-ui/icons'

import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import { List, Card, ListItem, ListItemText, ListItemSecondaryAction, AppBar, Toolbar, Typography, Select, MenuItem, Divider, Hidden } from '@material-ui/core';
import { ChevronRight, MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity, Device } from '@pxblue/icons-mui';
import Button from "@material-ui/core/Button";

import top from './topology_40.png';
// import farm from './farm.jpg';
import EatonLogo from './EatonLogo.svg';

const locations = [
    "All Locations",
    "Gary Steelworks",
    "Semaine Prochaine"
];

export default () => {
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState(0);
    const [route, setRoute] = useState(0);

    return (
        <DrawerLayout>
            <Drawer open={open} width={300}>
                <DrawerHeader
                    title={'Showcase App'}
                    subtitle={'Components in Context'}
                    backgroundColor={Colors.blue[500]}
                    fontColor={Colors.white[50]}
                    backgroundImage={top}
                    icon={<Menu />}
                    onIconClick={() => setOpen(!open)}
                />
                <DrawerSubheader>
                    <Select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={{ height: 56, padding: 16, width: '100%' }}
                    >
                        {locations.map((loc, ind) => (
                            <MenuItem key={`location${ind}`} value={ind}>{loc}</MenuItem>
                        ))}
                    </Select>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavGroup
                        items={[
                            {
                                title: 'Overview',
                                icon: <ListIcon />,
                                active: route === 0,
                                onClick: () => setRoute(0)
                            },
                            {
                                title: 'Timeline',
                                subtitle: '2 Alarms',
                                icon: <NotificationsActive />,
                                status: Colors.red[500],
                                active: route === 1,
                                onClick: () => setRoute(1)
                            },
                            {
                                title: 'Locations',
                                icon: <Public />,
                                active: route === 2,
                                onClick: () => setRoute(2)
                            },
                            {
                                title: 'Devices',
                                icon: <Device />,
                                active: route === 3,
                                onClick: () => setRoute(3)
                            },
                        ]}
                    />
                    <div style={{ flex: '1 1 0px' }} />
                    <Divider />
                    <DrawerNavGroup
                        items={[
                            {
                                title: 'Settings',
                                icon: <Settings />,
                                active: route === 4,
                                onClick: () => setRoute(4)
                            },
                            {
                                title: 'Legal',
                                icon: <Gavel />,
                                active: route === 5,
                                onClick: () => setRoute(5)
                            },
                            {
                                title: 'Help',
                                icon: <Help />,
                                active: route === 6,
                                onClick: () => setRoute(6)
                            }
                        ]}
                    />
                </DrawerBody>
                <DrawerFooter>
                    <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                        <img src={EatonLogo} style={{ 'margin': '10px' }} alt="Eaton Logo" height={50} width={'auto'} />
                    </div>
                </DrawerFooter>
            </Drawer>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <AppBar position={'static'} color={'primary'}>
                    <Toolbar style={{ padding: '0 16px' }}>
                        <Hidden smUp>
                            <Menu style={{ marginRight: 32 }} onClick={() => setOpen(!open)} />
                        </Hidden>
                        <Typography variant={'h6'}>Showcase</Typography>
                    </Toolbar>
                </AppBar>
                <div style={{ padding: 10, flex: 1, overflow: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <ScoreCard
                            style={{ maxWidth: 400 }}
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
                                <HeroBanner style={{ minWidth: 210 }}>
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
                                <List style={{ padding: 0 }}>
                                    <ListItem>
                                        <ListItemText primary="View Location" />
                                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            }
                        >
                            <List style={{ padding: '16px 0' }}>
                                <InfoListItem dense style={{ height: 36 }}
                                    fontColor={Colors.red[500]}
                                    iconColor={Colors.red[500]}
                                    title={'1 Alarm'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem dense style={{ height: 36 }}
                                    fontColor={Colors.blue[500]}
                                    iconColor={Colors.blue[500]}
                                    title={'1 Event'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem dense style={{ height: 36 }}
                                    title={'Online'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                            </List>
                        </ScoreCard>
                        <ScoreCard
                            style={{ flex: '1 1 0px', maxWidth: 400, marginLeft: 10 }}
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
                                <HeroBanner>
                                    <Hero
                                        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
                                        iconBackgroundColor={Colors.white[50]}
                                        label={'Health'}
                                        iconSize={72}
                                        value={98}
                                        units={'%'}
                                        fontSize={'normal'}
                                    />
                                </HeroBanner>
                            }
                            badgeOffset={-52}
                            actionRow={
                                <List style={{ padding: 0 }}>
                                    <ListItem>
                                        <ListItemText primary="View Location" />
                                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            }
                        >
                            <List style={{ padding: '16px 0' }}>
                                <InfoListItem dense style={{ height: 36 }}
                                    title={'0 Alarms'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem dense style={{ height: 36 }}
                                    fontColor={Colors.blue[500]}
                                    iconColor={Colors.blue[500]}
                                    title={'1 Event'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                                <InfoListItem dense style={{ height: 36 }}
                                    title={'Online'}
                                    icon={<Leaf color={'inherit'} />}
                                />
                            </List>
                        </ScoreCard>

                    </div>

                    <Card style={{ marginTop: 10 }}>
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
            </div>
        </DrawerLayout>
    )
};
