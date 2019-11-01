import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
import EmptyState from '@pxblue/react-components/core/EmptyState';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';

import DevicesIcon from '@material-ui/icons/Devices'
import { Add } from '@material-ui/icons'

import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import { List, Card } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp } from '@pxblue/icons-mui';
import Button from "@material-ui/core/Button";

export default ({ ...props }) => (
    <div style={{padding: 10}}>
        <Card>
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
                    rightComponent={<ChannelValue value={'Online, ESS+'} />}
                />
                <InfoListItem
                    title={'Input Voltage'}
                    divider={'full'}
                    subtitle={['Phase A, Phase B, Phase C']}
                    icon={<VoltageCircled />}
                    rightComponent={<span><ChannelValue value={478} units={'V'} />, <ChannelValue value={479} units={'V'} />, <ChannelValue value={473} units={'V'} /></span>}
                />
                <InfoListItem
                    title={'Output Voltage'}
                    divider={'full'}
                    statusColor={Colors.red[500]}
                    fontColor={Colors.red[500]}
                    subtitle={['Phase A, Phase B, Phase C']}
                    icon={<VoltageCircled color={'inherit'}/>}
                    rightComponent={<span style={{color: Colors.red[500]}}><ChannelValue value={480} units={'V'} />, <ChannelValue value={480} units={'V'} />, <ChannelValue value={480} units={'V'} /></span>}
                />
                <InfoListItem dense
                    title={'Output Current'}
                    divider={'full'}
                    icon={<CurrentCircled color={'inherit'}/>}
                    rightComponent={<span><ChannelValue value={15} units={'A'} />, <ChannelValue value={14.9} units={'A'} />, <ChannelValue value={15} units={'A'} /></span>}
                />
                <InfoListItem dense
                    title={'Temperature'}
                    divider={'full'}
                    icon={<Temp />}
                    rightComponent={<ChannelValue icon={<Trend htmlColor={Colors.red[500]} />} value={68} units={'°F'} />}
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

