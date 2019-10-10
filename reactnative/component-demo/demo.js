import * as React from 'react';
import { Card, ListItem } from 'react-native-elements';
import {
    HeroBanner,
    Hero,
    ThemeProvider,
    Title,
    ChannelValue,
    wrapIcon,
    Label
} from '@pxblue/react-native-components';

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import _Leaf from '@pxblue/icons-svg/leaf.svg';
import _A from '@pxblue/icons-svg/grade_a.svg';
import _Battery from '@pxblue/icons-svg/battery.svg';

import * as PXBColors from '@pxblue/colors';

const ChartLineVariant = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-line-variant' })
const Battery = wrapIcon({ IconClass: _Battery });
const A = wrapIcon({ IconClass: _A });
const Pie = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-pie' });
const Clock = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'clock-outline' });

export default class App extends React.Component {
    render() {
        // return (
        //     <ThemeProvider>
        //         <HeroBanner divider>
        //     <Hero
        //         label={'Battery'}
        //         value={'Full'}
        //         IconClass={Battery}
        //         iconColor={PXBColors.blue[500]}
        //     />
        //     </HeroBanner>
        //     </ThemeProvider>
        // );
        return (
            <ThemeProvider>
                <Card containerStyle={{ padding: 0 }}>
                    <HeroBanner>
                        <Hero
                            label={'Healthy'}
                            value={96}
                            units={'/100'}
                            IconClass={A}
                            fontSize={'large'}
                            iconColor={PXBColors.green[500]}
                        />
                        <Hero
                            label={'Battery'}
                            value={'Full'}
                            IconClass={Battery}
                            iconColor={PXBColors.blue[500]}
                        />
                        <Hero
                            label={'Estimated'}
                            IconClass={Clock}
                            iconColor={PXBColors.gray[500]}
                        >
                            <ChannelValue fontSize={'large'} value={1} units={'h'} />
                            <ChannelValue fontSize={'large'} value={37} units={'m'} />
                        </Hero>
                        <Hero
                            label={'Loaded'}
                            IconClass={Pie}
                            iconColor={PXBColors.blue[500]}
                        >
                            <ChannelValue fontSize={'large'} value={65} units={'%'} IconClass={ChartLineVariant} />
                        </Hero>
                        <Hero
                            label={'Not Shown'}
                            value={'5th Item'}
                            IconClass={Battery}
                            iconColor={PXBColors.blue[500]}
                        />
                    </HeroBanner>
                    <ListItem
                        topDivider
                        leftIcon={<MatIcon name={'wb-sunny'} size={24} style={{ marginRight: 10 }} />}
                        title={<Title>Temperature</Title>}
                        rightElement={
                            <ChannelValue value={68} units={'°F'} />
                        }
                    />
                    <ListItem
                        topDivider
                        leftIcon={<MatIcon name={'wb-sunny'} size={24} style={{ marginRight: 10 }} />}
                        title={<Title>Temperature</Title>}
                        rightElement={
                            <ChannelValue value={68} units={'°F'} />
                        }
                    />
                    <ListItem
                        topDivider
                        leftIcon={<MatIcon name={'wb-sunny'} size={24} style={{ marginRight: 10 }} />}
                        title={<Title>Temperature</Title>}
                        rightElement={
                            <React.Fragment>
                                <ChannelValue value={1} units={'h'} IconClass={Clock} />
                                <ChannelValue value={24} units={'m'}/>
                            </React.Fragment>
                        }
                    />
                    <ListItem
                        topDivider
                        leftIcon={<MatIcon name={'wb-sunny'} size={24} style={{ marginRight: 10 }} />}
                        title={<Title>Temperature</Title>}
                        rightElement={
                            <ChannelValue value={68} units={'°F'} />
                        }
                    />
                </Card>
            </ThemeProvider>
        );
    }
}