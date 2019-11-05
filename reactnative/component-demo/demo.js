import * as React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import {
    HeroBanner,
    Hero,
    Header,
    ThemeProvider,
    H6, Body,
    ChannelValue,
    ScoreCard,
    InfoListItem,
    wrapIcon,
    EmptyState
} from '@pxblue/react-native-components';

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import _A from '@pxblue/icons-svg/grade_a.svg';
import _Temp from '@pxblue/icons-svg/temp.svg';
import _Humidity from '@pxblue/icons-svg/moisture';
import _Battery from '@pxblue/icons-svg/battery.svg';

import * as PXBColors from '@pxblue/colors';
const backgroundImage = require('./storybook/assets/farm.jpg');

const ChartLineVariant = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-line-variant' })
const Battery = wrapIcon({ IconClass: _Battery });
const A = wrapIcon({ IconClass: _A });
const Temp = wrapIcon({ IconClass: _Temp });
const Humidity = wrapIcon({ IconClass: _Humidity });
const Pie = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-pie' });
const Clock = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'clock-outline' });
const MailIcon = wrapIcon({ IconClass: MatIcon, name: 'mail' });
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu' });
const MoreIcon = wrapIcon({ IconClass: MatIcon, name: 'more-vert' });

const PADDING = 10;

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <View style={{ flex: 1, backgroundColor: PXBColors.gray[50] }}>
                    <Header
                        expandable={true}
                        title={'South Tin Mill'}
                        subtitle={'Gary Steel Works'}
                        info={'Online'}
                        navigation={{ icon: MenuIcon, onPress: () => { } }}
                        actionItems={[
                            { icon: MailIcon, onPress: () => { } },
                            { icon: MoreIcon, onPress: () => { } },
                        ]}
                        backgroundImage={backgroundImage}
                        searchableConfig={{ placeholder: 'Search', autoFocus: true }}
                    />
                    <ScrollView>
                        <Card>
                            <EmptyState 
                                title={'Nothing Found'} 
                                description={'Not a single thing'}
                                IconClass={ChartLineVariant} 
                                actions={<Button title={'Add a Device'} type={'outline'} />}
                                // iconSize={200} 
                                // iconColor={'red'}
                            />
                        </Card>
                        <Card containerStyle={{ padding: 0, margin: PADDING, marginBottom: PADDING }}>
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
                        <InfoListItem
                            title={'Emerson Field West'}
                            subtitle={['DG 100', 'EDR 5000', 'Online']}
                            statusColor={PXBColors.red[500]}
                            fontColor={PXBColors.purple[500]}
                            hidePadding={true}
                            backgroundColor={'white'}
                            IconClass={Battery}
                            avatar
                            // dense
                            rightComponent={<MatIcon name={'mail'} size={24} color={PXBColors.black[500]} />}
                            divider={'partial'}
                            onPress={() => { }}
                        />
                        <InfoListItem
                            title={'South Hills Farm'}
                            subtitle={'Offline'}
                            backgroundColor={'white'}
                            statusColor={PXBColors.orange[500]}
                            divider={'full'}
                            IconClass={Pie}
                            hidePadding={false}
                            color={PXBColors.red[500]}
                            rightComponent={<ChannelValue value={15} units={'A'} />}
                            onPress={() => { }}
                        />
                        <InfoListItem
                            title={'Cherry East'}
                            backgroundColor={'white'}
                            subtitle={['DG 100', 'EDR 5000', 'Online']}
                            subtitleSeparator={'/'}
                            hidePadding
                            onPress={() => { }}
                        />
                        <ScoreCard
                            style={{ margin: PADDING }}
                            headerTitle={'Portland Datacenter Long Name'}
                            headerSubtitle={'6 UPS Devices'}
                            headerInfo={'Attention Required'}
                            headerBackgroundImage={backgroundImage}
                            actionItems={[
                                { icon: MoreIcon, onPress: () => { } }
                            ]}
                            badgeOffset={-55}
                            badge={
                                <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>
                                    <Hero
                                        label={'Score'}
                                        iconSize={48}
                                        iconColor={PXBColors.green[500]}
                                        value={98}
                                        units={'/100'}
                                        IconClass={A}
                                    />
                                </HeroBanner>
                            }
                            actionRow={
                                <ScoreCard.ListItem label={'View Location'} onPress={() => { }} />
                            }
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <ListItem
                                    containerStyle={{ margin: 0, padding: 0, marginBottom: 8 }}
                                    leftIcon={<MatIcon name={'notifications'} size={24} color={PXBColors.red[500]} />}
                                    title={<Body color={'error'}>1 Alarm</Body>}
                                />
                                <ListItem
                                    containerStyle={{ margin: 0, padding: 0, marginBottom: 8 }}
                                    leftIcon={<MatIcon name={'info'} size={24} color={PXBColors.blue[500]} />}
                                    title={<Body color={'primary'}>1 Event</Body>}
                                />
                                <ListItem
                                    containerStyle={{ margin: 0, padding: 0 }}
                                    leftIcon={<MatIcon name={'cloud'} size={24} />}
                                    title={<Body>Online</Body>}
                                />
                            </View>
                        </ScoreCard>
                        <ScoreCard
                            style={{ margin: PADDING, marginTop: 0 }}
                            headerColor={PXBColors.red[500]}
                            headerTitle={'Substation 3'}
                            headerSubtitle={'High Humidity Alarm'}
                            headerInfo={'5 Devices'}
                            headerBackgroundImage={backgroundImage}
                            actionItems={[
                                { icon: MailIcon, onPress: () => { } },
                                { icon: MoreIcon, onPress: () => { } }
                            ]}
                            badge={
                                <HeroBanner style={{ flex: 0, minWidth: 180, justifyContent: 'flex-end' }}>
                                    <Hero
                                        label={'Temperature'}
                                        iconColor={PXBColors.black[500]}
                                        iconSize={70}
                                        value={69}
                                        units={'°F'}
                                        IconClass={Temp}
                                    />
                                    <Hero
                                        label={'Humidity'}
                                        iconSize={70}
                                        iconColor={PXBColors.blue[200]}
                                        value={78}
                                        units={'%'}
                                        IconClass={Humidity}
                                    />
                                </HeroBanner>
                            }
                            actionRow={
                                <ScoreCard.ListItem label={'View Location'} onPress={() => { }} />
                            }
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <ListItem
                                    containerStyle={{ margin: 0, padding: 0, marginBottom: 8 }}
                                    leftIcon={<MatIcon name={'notifications'} size={24} color={PXBColors.red[500]} />}
                                    title={<Body color={'error'}>1 Alarm</Body>}
                                />
                                <ListItem
                                    containerStyle={{ margin: 0, padding: 0, marginBottom: 8 }}
                                    leftIcon={<MatIcon name={'info'} size={24} color={PXBColors.blue[500]} />}
                                    title={<Body color={'primary'}>1 Event</Body>}
                                />
                                <ListItem
                                    containerStyle={{ margin: 0, padding: 0 }}
                                    leftIcon={<MatIcon name={'cloud'} size={24} />}
                                    title={<Body>Online</Body>}
                                />
                            </View>
                        </ScoreCard>
                        <SafeAreaView />
                    </ScrollView>

                </View>
            </ThemeProvider>
        );
    }
}