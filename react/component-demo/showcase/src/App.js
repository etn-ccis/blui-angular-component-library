import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
import EmptyState from '@pxblue/react-components/core/EmptyState';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import Drawer from '@pxblue/react-components/core/Drawer';
import DevicesIcon from '@material-ui/icons/Devices'
import {Add, ArrowDropDown, Dashboard, Devices, Gavel, Help, PinDrop, Settings, Toc} from '@material-ui/icons'

import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import {Card, List} from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import {Battery, Pie} from '@pxblue/react-progress-icons';
import {CurrentCircled, GradeA, Leaf, Temp, VoltageCircled} from '@pxblue/icons-mui';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Background from './background.png';
import EatonLogo from "./EatonLogo.svg";
// Material-UI Icons
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

export default ({ ...props }) => (
    <>
    <Drawer
        header = {{
            style: {
                backgroundImage: `url(${Background})`,
                color: 'white'
            },
            content:
                <div style={{'paddingLeft': '40px'}}>
                    <Typography variant="subtitle2">Project</Typography>
                    <Typography variant="h6" style={{'marginTop': '-10px'}}>Washington</Typography>
                </div>
            }
        }
        subheader = { {
            content:
                <ExpansionPanel style={{
                    'WebkitBoxShadow': 'none',
                    'MozBoxShadow': 'none',
                    'BoxShadow': 'none',
                }}>
                    <ExpansionPanelSummary
                        expandIcon={<ArrowDropDown />}
                    >
                        <Typography variant={'h6'}>All Locations</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        } }

        body = { {
            navGroups: [ {
                links: [
                    {
                        title:'Overview',
                        onClick: () => { alert('overview') },
                        icon:<Dashboard/>,
                    },
                    {
                        title:'Timeline',
                        onClick: () => { alert('timeline') },
                        icon:<Toc/>
                    },
                    {
                        title:'Locations',
                        onClick: () => { alert('locations') },
                        icon:<PinDrop/>
                    },
                    {
                        title:'Devices',
                        onClick: () => { alert('devices') },
                        icon:<Devices/>
                    },
                ]
            },
            {
                title:
                    <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                        <div>About</div>
                        <div>Software Version v1.0.3</div>
                    </div>,
                links: [
                    {
                        title:'User Guide',
                        onClick: () => { alert('user guide') },
                        icon:<MoveToInboxIcon/>
                    },
                    {
                        title:'License Agreement',
                        onClick: () => { alert('license agreement') },
                        icon:<SendIcon/>
                    }
                ]
            }
            ]
        } }
        footer = {{
            navGroups: [{
                links: [
                    {
                        title: 'Settings',
                        onClick: () => { alert('settings') },
                        icon: <Settings/>
                    },
                    {
                        title: 'Legal',
                        onClick: () => { alert('legal') },
                        icon: <Gavel/>
                    },
                    {
                        title: 'Help',
                        onClick: () => { alert('help') },
                        icon: <Help/>
                    },
                ]
            }],
            content:
                <div style={{'display': 'flex', 'justifyContent': 'left'}}>
                    <img src={EatonLogo} style={{'margin': '10px'}} alt="Eaton Logo" height={50} width={'auto'}/>
                </div>
        }}
    />
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
                    icon={<VoltageCircled color={'inherit'}/>}
                    rightComponent={<span style={{color: Colors.red[500]}}><ChannelValue fontSize={16} value={480} units={'V'} />, <ChannelValue fontSize={16} value={480} units={'V'} />, <ChannelValue fontSize={16} value={480} units={'V'} /></span>}
                />
                <InfoListItem dense
                    title={'Output Current'}
                    divider={'full'}
                    icon={<CurrentCircled color={'inherit'}/>}
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
    </>
);

