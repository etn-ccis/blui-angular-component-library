import {
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    IconButton,
    TextField,
    Typography,
} from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';
import {
    Accessibility,
    AddAPhoto,
    AirportShuttle,
    Dashboard,
    Devices,
    FitnessCenter,
    NotificationsActive,
    PinDrop,
    Search,
    Toc,
} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import {
    Drawer,
    DrawerHeader,
    DrawerSubheader,
    DrawerBody,
    DrawerFooter,
    DrawerNavGroup,
    NavItem,
} from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import { boolean, color, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { storiesOf } from '@storybook/react';
import React from 'react';

const EatonLogo = require('../assets/EatonLogo.svg');
const topologyBgImage = require('../assets/topology_40.png');
const farmBgImage = require('../assets/farm.jpg');

export const stories = storiesOf('Drawer', module);

stories.addParameters({
    notes: { markdown: require('./../../../docs/Drawer.md') },
});

type DrawerState = {
    selected: string;
};

const store = new Store<DrawerState>({
    selected: '',
});

const userGuide = 'User Guide';
const license = 'License';
const accessibility = 'Accessibility';
const notifications = 'Notifications';

export const padDrawer = (drawer: JSX.Element): JSX.Element => (
    <div style={{ padding: 20, display: 'flex', height: '100%' }}>{drawer}</div>
);

export const defaultDrawerBody = (state: DrawerState): JSX.Element => (
    <DrawerBody>
        <DrawerNavGroup
            title={'Default Navigation Group'}
            items={[
                {
                    title: userGuide,
                    onClick: (): void => {
                        store.set({ selected: userGuide });
                    },
                    icon: <MoveToInboxIcon />,
                    active: state.selected === userGuide,
                },
                {
                    title: license,
                    onClick: (): void => {
                        store.set({ selected: license });
                    },
                    icon: <SendIcon />,
                    active: state.selected === license,
                },
                {
                    title: accessibility,
                    onClick: (): void => {
                        store.set({ selected: accessibility });
                    },
                    icon: <Accessibility />,
                    active: state.selected === accessibility,
                },
                {
                    title: notifications,
                    onClick: (): void => {
                        store.set({ selected: notifications });
                    },
                    icon: <NotificationsActive />,
                    active: state.selected === notifications,
                },
            ]}
        />
        <div style={{ flex: '1 1 0px' }} />
    </DrawerBody>
);

stories.add(
    'with standard inputs',
    (): JSX.Element => {
        const drawerGroupId = 'Drawer';
        const headerGroupId = 'Header';
        const bodyGroupId = 'Body';
        const footerGroupId = 'Footer';

        const open = boolean('Open', true, drawerGroupId);
        const width = number(
            'Width',
            350,
            {
                range: true,
                min: 200,
                max: 700,
                step: 50,
            },
            drawerGroupId
        );

        // Header
        const headerTitle = text('title', 'PX Blue Drawer', headerGroupId);
        const headerSubtitle = text('subtitle', 'Organize your menu items here', headerGroupId);

        const headerIconOptions = select('icon', ['Menu', 'Fitness', 'None'], 'Menu', headerGroupId);
        let headerIcon: JSX.Element;
        switch (headerIconOptions) {
            case 'Menu':
                headerIcon = <MenuIcon />;
                break;
            case 'Fitness':
                headerIcon = <FitnessCenter />;
                break;
            default:
                headerIcon = <></>;
        }
        const headerFontColor = color('fontColor', Colors.white[50], headerGroupId);
        const headerBackgroundColor = color('backgroundColor', Colors.blue[800], headerGroupId);
        const headerBackground = select('backgroundImage', ['None', 'Pattern'], 'Pattern', headerGroupId);
        const headerBackgroundImage = headerBackground === 'Pattern' ? topologyBgImage : '';

        // Body
        const groupTitle1 = text('title1', 'NavGroup 1', bodyGroupId);
        const groupTitle2 = text('title2', 'NavGroup 2', bodyGroupId);
        const bodyFontColor = color('fontColor', Colors.black[500], bodyGroupId);
        const bodyIconColor = color('iconColor', Colors.blue[500], bodyGroupId);
        const bodyBackgroundColor = color('backgroundColor', Colors.white[50], bodyGroupId);
        const bodyActiveFontColor = color('activeFontColor', Colors.blue[500], bodyGroupId);
        const bodyActiveIconColor = color('activeIconColor', Colors.blue[500], bodyGroupId);
        const bodyActiveBackgroundColor = color('activeBackgroundColor', Colors.blue[50], bodyGroupId);
        const bodyChevron = boolean('chevron', false, bodyGroupId);
        const bodyDividers = boolean('showDividers', true, bodyGroupId);

        const numberLinksGroup1 = number(
            'links1',
            4,
            {
                range: true,
                min: 0,
                max: 6,
                step: 1,
            },
            bodyGroupId
        );
        const numberLinksGroup2 = number(
            'links2',
            2,
            {
                range: true,
                min: 0,
                max: 4,
                step: 1,
            },
            bodyGroupId
        );

        const overview = 'Overview';
        const timeline = 'Timeline';
        const locations = 'Locations';
        const devices = 'Devices';
        const photos = 'Photos';
        const schedule = 'Schedule';
        const agreement = 'License Agreement';

        const links1 = (state: any): NavItem[] =>
            [
                {
                    title: overview,
                    onClick: (): void => {
                        store.set({ selected: overview });
                    },
                    icon: <Dashboard />,
                    active: state.selected === overview,
                },
                {
                    title: timeline,
                    onClick: (): void => {
                        store.set({ selected: timeline });
                    },
                    icon: <Toc />,
                    active: state.selected === timeline,
                },
                {
                    title: locations,
                    onClick: (): void => {
                        store.set({ selected: locations });
                    },
                    icon: <PinDrop />,
                    active: state.selected === locations,
                },
                {
                    title: devices,
                    subtitle: '5 new warnings',
                    statusColor: Colors.yellow[500],
                    onClick: (): void => {
                        store.set({ selected: devices });
                    },
                    icon: <Devices />,
                    active: state.selected === devices,
                },
                {
                    title: photos,
                    onClick: (): void => {
                        store.set({ selected: photos });
                    },
                    icon: <AddAPhoto />,
                    active: state.selected === photos,
                },
                {
                    title: schedule,
                    onClick: (): void => {
                        store.set({ selected: schedule });
                    },
                    icon: <AirportShuttle />,
                    active: state.selected === schedule,
                },
            ].slice(0, numberLinksGroup1);

        const links2 = (state: any): NavItem[] =>
            [
                {
                    title: userGuide,
                    onClick: (): void => {
                        store.set({ selected: userGuide });
                    },
                    icon: <MoveToInboxIcon />,
                    active: state.selected === userGuide,
                },
                {
                    title: agreement,
                    subtitle: 'For Eaton employees only',
                    onClick: (): void => {
                        store.set({ selected: agreement });
                    },
                    icon: <SendIcon />,
                    active: state.selected === agreement,
                },
                {
                    title: accessibility,
                    onClick: (): void => {
                        store.set({ selected: accessibility });
                    },
                    icon: <Accessibility />,
                    active: state.selected === accessibility,
                },
                {
                    title: notifications,
                    onClick: (): void => {
                        store.set({ selected: notifications });
                    },
                    icon: <NotificationsActive />,
                    active: state.selected === notifications,
                },
            ].slice(0, numberLinksGroup2);

        // Footer
        const showFooter = boolean('show footer', true, footerGroupId);
        const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

        return padDrawer(
            <State store={store}>
                {(state): JSX.Element[] => [
                    <Drawer open={open} width={width} key={'drawer'}>
                        <DrawerHeader
                            title={headerTitle}
                            subtitle={headerSubtitle}
                            icon={headerIcon}
                            backgroundImage={headerBackgroundImage}
                            fontColor={headerFontColor}
                            backgroundColor={headerBackgroundColor}
                        />

                        <DrawerBody
                            iconColor={bodyIconColor}
                            fontColor={bodyFontColor}
                            backgroundColor={bodyBackgroundColor}
                            activeFontColor={bodyActiveFontColor}
                            activeBackgroundColor={bodyActiveBackgroundColor}
                            activeIconColor={bodyActiveIconColor}
                            chevron={bodyChevron}
                        >
                            <DrawerNavGroup divider={bodyDividers} items={links1(state)} title={groupTitle1} />
                            <DrawerNavGroup
                                divider={bodyDividers}
                                items={links2(state)}
                                content={
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>{groupTitle2}</div>
                                        <div>Software Version v1.0.3</div>
                                    </div>
                                }
                            />
                        </DrawerBody>

                        {showFooter && (
                            <DrawerFooter backgroundColor={footerBackgroundColor}>
                                <Divider />
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={EatonLogo}
                                        style={{ margin: '10px' }}
                                        alt="Eaton Logo"
                                        height={50}
                                        width={'auto'}
                                    />
                                </div>
                            </DrawerFooter>
                        )}
                    </Drawer>,
                ]}
            </State>
        );
    }
);

stories.add(
    'with custom header',
    (): JSX.Element => {
        const open = boolean('Open', true);
        return padDrawer(
            <State store={store}>
                {(state): JSX.Element[] => [
                    <Drawer open={open} key={'drawer'}>
                        <DrawerHeader
                            backgroundImage={farmBgImage}
                            backgroundOpacity={0.5}
                            icon={<MenuIcon />}
                            titleContent={
                                <div style={{ zIndex: 1, paddingLeft: '20px', paddingTop: '15px' }}>
                                    <Typography variant="subtitle2">Customizable</Typography>
                                    <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                        Header Content Goes Here
                                    </Typography>
                                </div>
                            }
                        />
                        {defaultDrawerBody(state)}
                    </Drawer>,
                ]}
            </State>
        );
    }
);

stories.add(
    'with subheader',
    (): JSX.Element => {
        const open = boolean('Open', true);
        const label = 'content';
        const valuesObj = {
            Filter: 'Filter',
            Accordion: 'Accordion',
        };
        const defaultValue = 'Filter';
        const optionsObj = {
            display: 'inline-radio' as OptionsKnobOptionsDisplay,
        };

        const value = optionsKnob(label, valuesObj, defaultValue, optionsObj);

        const filter = (
            <TextField
                id="outlined-basic"
                label="filter"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
        const accordion = (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );

        return padDrawer(
            <State store={store}>
                {(state): JSX.Element[] => [
                    <Drawer open={open} key={'drawer'}>
                        <DrawerHeader icon={<MenuIcon />} title={'Subheader Demo'} />
                        <DrawerSubheader>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '20px',
                                }}
                            >
                                {value === 'Filter' ? filter : accordion}
                            </div>
                        </DrawerSubheader>
                        {defaultDrawerBody(state)}
                    </Drawer>,
                ]}
            </State>
        );
    }
);
