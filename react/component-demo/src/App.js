import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
import EmptyState from '@pxblue/react-components/core/EmptyState';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import {List, ListItem, ListItemIcon, ListItemText, Card, Tab, Tabs} from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp } from '@pxblue/icons-mui';
import Button from "@material-ui/core/Button";

export default ({ ...props }) => (
    <React.Fragment>
        <Card>
            <List style={{color: Colors.gray['800'], padding: 0}}>
                <HeroBanner divider>
                    <Hero
                        icon={<GradeA fontSize={'inherit'} color={'inherit'} nativeColor={Colors.green[500]} />}
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
                        <ChannelValue value={65} units={'%'} icon={<Trend nativeColor={Colors.red[500]} fontSize={'inherit'} />} />
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
                <ListItem divider>
                    <ListItemIcon><Leaf/></ListItemIcon>
                    <ListItemText style={{paddingLeft: 0}} primary={'Status'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                    <ListItemText
                        style={{padding: 0}}
                        primary={<ChannelValue value={'Online, ESS+'} />}
                        primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                    </ListItemText>
                </ListItem>
                <ListItem divider>
                    <ListItemIcon><VoltageCircled/></ListItemIcon>
                    <ListItemText style={{paddingLeft: 0}} primary={'Input Voltage'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                    <ListItemText
                        style={{padding: 0}}
                        primary={
                            <span>
                                <ChannelValue value={478} units={'V'} />, <ChannelValue value={479} units={'V'} />, <ChannelValue value={473} units={'V'} />
                            </span>
                        }
                        primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                    </ListItemText>
                </ListItem>
                <ListItem divider style={{color: Colors.red['500']}}>
                    <ListItemIcon style={{color: 'inherit'}}><VoltageCircled /></ListItemIcon>
                    <ListItemText style={{paddingLeft: 0}} primary={'Output Voltage'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                    <ListItemText
                        style={{padding: 0}}
                        primary={
                            <span>
                                <ChannelValue value={480} units={'V'} />, <ChannelValue value={480} units={'V'} />, <ChannelValue value={480} units={'V'} />
                            </span>
                        }
                        primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                    </ListItemText>
                </ListItem>
                <ListItem divider>
                    <ListItemIcon><CurrentCircled/></ListItemIcon>
                    <ListItemText style={{paddingLeft: 0}} primary={'Output Current'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                    <ListItemText
                        style={{padding: 0}}
                        primary={
                            <span>
                                <ChannelValue value={15} units={'A'} />, <ChannelValue value={15} units={'A'} />, <ChannelValue value={14.9} units={'A'} />
                            </span>
                        }
                        primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><Temp/></ListItemIcon>
                    <ListItemText style={{paddingLeft: 0}} primary={'Temperature'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                    <ListItemText
                        style={{padding: 0}}
                    primary={<ChannelValue icon={<Trend nativeColor={Colors.red[500]}/>} value={68} units={'°F'} />}
                        primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                    </ListItemText>
                </ListItem>
            </List>
        </Card>
        <Card style={{marginTop: '10px'}}>
            <Tabs>
                <Tab label={"ACTION"} />
                <Tab label={"TEXT ONLY"} />
                <Tab label={"PLACEHOLDER"} />
                <Tab label={"SUB-CONTENT"} />
            </Tabs>
            <EmptyState
                icon={<TrendingUpIcon style={{ fontSize: '100px', marginBottom: '15px' }} />}
                title={'Predictions Page Coming Soon'}
                description={'A fully redesigned predictions page is coming in our next release!'}
                actions={ <Button title="LEARN MORE" type={'outline'} /> }
            />
        </Card>
    </React.Fragment>
)
