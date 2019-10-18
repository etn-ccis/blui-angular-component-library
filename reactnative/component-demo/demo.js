import * as React from 'react';
import { View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import {
    HeroBanner,
    Hero,
    Header,
    ThemeProvider,
    H6,
    ChannelValue,
    InfoListItem,
    wrapIcon
} from '@pxblue/react-native-components';

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import _A from '@pxblue/icons-svg/grade_a.svg';
import _Battery from '@pxblue/icons-svg/battery.svg';

import * as PXBColors from '@pxblue/colors';
const backgroundImage = require('./storybook/assets/farm.jpg');

const ChartLineVariant = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-line-variant' })
const Battery = wrapIcon({ IconClass: _Battery });
const A = wrapIcon({ IconClass: _A });
const Pie = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-pie' });
const Clock = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'clock-outline' });
const MailIcon = wrapIcon({ IconClass: MatIcon, name: 'mail' });
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu' });
const MoreIcon = wrapIcon({ IconClass: MatIcon, name: 'more-vert' });

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <View style={{ flex: 1, backgroundColor: PXBColors.gray[50] }}>
                    <Header
                        expandable={true}
                        // startExpanded={true}
                        // backgroundColor={'green'}
                        title={'Custom Title'}
                        subtitle={'Custom Subtitle with Really Long Length'}
                        navigation={{ icon: MenuIcon, onPress: () => { } }}
                        actionItems={[
                            { icon: MailIcon, onPress: () => { } },
                            { icon: MoreIcon, onPress: () => { } },
                        ]}
                        backgroundImage={backgroundImage}
                        searchableConfig={{ placeholder: 'Search', autoFocus: true }}
                    />
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
                            title={<H6>Temperature</H6>}
                            rightElement={
                                <ChannelValue value={68} units={'°F'} />
                            }
                        />
                        <ListItem
                            topDivider
                            leftIcon={<MatIcon name={'wb-sunny'} size={24} style={{ marginRight: 10 }} />}
                            title={<H6>Temperature</H6>}
                            rightElement={
                                <ChannelValue value={68} units={'°F'} />
                            }
                        />
                        <ListItem
                            topDivider
                            leftIcon={<MatIcon name={'wb-sunny'} size={24} style={{ marginRight: 10 }} />}
                            title={<H6>Temperature</H6>}
                            rightElement={
                                <React.Fragment>
                                    <ChannelValue value={1} units={'h'} IconClass={Clock} />
                                    <ChannelValue value={24} units={'m'} />
                                </React.Fragment>
                            }
                        />
                    </Card>
                    <Card containerStyle={{ padding: 0 }}>
                        <InfoListItem
                            title={'Emerson Field West'}
                            subtitle={['DG 100', 'EDR 5000', 'Online']}
                            color={PXBColors.green[500]}
                            hidePadding={true}
                            IconClass={Battery}
                            onPress={() => { }}
                        />
                        <InfoListItem
                            title={'South Hills Farm'}
                            subtitle={'Offline'}
                            IconClass={Pie}
                            hidePadding={false}
                            color={PXBColors.red[500]}
                            onPress={() => { }}
                        />
                        <InfoListItem
                            title={'Cherry East'}
                            subtitle={['DG 100', 'EDR 5000', 'Online']}
                            subtitleSeparator={'/'}
                            hidePadding={false}
                            // color={PXBColors.blue[500]}
                            onPress={() => { }}
                        />
                    </Card>
                </View>
            </ThemeProvider>
        );
    }
}