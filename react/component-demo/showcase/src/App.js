import React, { useState } from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
import EmptyState from '@pxblue/react-components/core/EmptyState';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerSubheader } from '@pxblue/react-components/core/Drawer';

import DevicesIcon from '@material-ui/icons/Devices'
import { Add } from '@material-ui/icons'

import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import {List, Card, ListItem, ListItemText, ListItemSecondaryAction, AppBar, Toolbar} from '@material-ui/core';
import { ChevronRight, MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp, Moisture as Humidity } from '@pxblue/icons-mui';
import Button from "@material-ui/core/Button";

import top from './topology_40.png';

export default () => {
    const [open, setOpen] = useState(true);
    return (
        <>
        <Drawer open={open}>
        <DrawerHeader
    title={'DrawerTitle'}
    subtitle={'Drawer Subtitle'}
    backgroundColor={Colors.purple[500]}
    textColor={Colors.orange[500]}
    headerBackgroundImage={top}
    // icon={null}
    onClick={()=> setOpen(!open)}
    // content={<>
    // <Button onClick={()=>setOpen(!open)}>Hello World</Button>
    // </>}
    />
    </Drawer>
        <AppBar>
            <Toolbar>
                Test
            </Toolbar>
        </AppBar>
    <div style={{ padding: 10 }}>

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
        <List style={{ margin: 0 }}>
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
    <Button style={{width: '100%'}} onClick={() => setOpen(!open)}>Toggle</Button>
    </div >
    </>
)};
