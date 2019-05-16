import React from 'react';
import HeroChannel from './HeroChannel';
import HeroBanner from './HeroBanner';
import ChannelValue from './ChannelValue';
import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';

import { List, ListItem, ListItemIcon, ListItemText, Card } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA, Leaf, CurrentCircled, VoltageCircled, Temp } from '@pxblue/icons-mui';


export default ({ ...props }) => (
    <Card>
        <List style={{color: Colors.gray['800'], padding: 0}}>
            <HeroBanner divider>
                <HeroChannel
                    icon={<GradeA fontSize={'inherit'} color={'inherit'} nativeColor={Colors.green[500]} />}
                    label={'Healthy'}
                    value={96}
                    units={'/100'}
                />
                <HeroChannel
                    icon={<Pie fontSize={'inherit'} color={Colors.blue[500]} percent={65} size={36} />}
                    label={'Load'}
                >
                    <ChannelValue value={65} units={'%'} icon={<Trend nativeColor={Colors.red[500]} fontSize={'inherit'} />} />
                </HeroChannel>
                <HeroChannel
                    icon={<Timer fontSize={'inherit'} color={'inherit'} />}
                    label={'Estimated'}
                >
                    <ChannelValue value={1} units={'h'} />
                    <ChannelValue value={26} units={'m'} />
                </HeroChannel>
                <HeroChannel
                    icon={<Battery fontSize={'inherit'} color={Colors.blue[500]} percent={100} size={36} />}
                    value={'Full'}
                    label={'Battery'}
                >
                    <ChannelValue value={'Full'} />
                </HeroChannel>
            </HeroBanner>
            <ListItem divider>
                <ListItemIcon><Leaf/></ListItemIcon>
                <ListItemText primary={'Status'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                <ListItemText 
                    style={{padding: 0}}
                    primary={<ChannelValue value={'Online, ESS+'} />} 
                    primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                </ListItemText>
            </ListItem>
            <ListItem divider>
                <ListItemIcon><VoltageCircled/></ListItemIcon>
                <ListItemText primary={'Input Volt.'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
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
                <ListItemText primary={'Output Voltage'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
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
                <ListItemText primary={'Output Current'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
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
                <ListItemText primary={'Temperature'} primaryTypographyProps={{color: 'inherit'}}></ListItemText>
                <ListItemText 
                    style={{padding: 0}}
                primary={<ChannelValue icon={<Trend nativeColor={Colors.red[500]}/>} value={68} units={'°F'} />}
                    primaryTypographyProps={{color: 'inherit', style: {textAlign: 'right'}}}>
                </ListItemText>
            </ListItem>
        </List>
    </Card>
)