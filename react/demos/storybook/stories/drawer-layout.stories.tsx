import { Typography } from '@material-ui/core';
import { Apps, FormatListBulleted, Gavel, Help, NotificationsActive, PinDrop, Settings } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { DrawerLayout } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
// @ts-ignore
import EatonLogo from '../assets/EatonLogo.svg';

export const stories = storiesOf('Drawer Layout', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/DrawerLayout.md') },
});

const defaultBody = (
    <DrawerBody>
        <DrawerNavGroup
            items={[
                {
                    title: 'Overview',
                    onClick: action('Overview'),
                    icon: <Apps />,
                },
                {
                    title: 'Timeline',
                    onClick: action('Timeline'),
                    icon: <FormatListBulleted />,
                },
                {
                    title: 'Locations',
                    onClick: action('Locations'),
                    icon: <PinDrop />,
                },
                {
                    title: 'Devices',
                    onClick: action('Devices'),
                    icon: <NotificationsActive />,
                },
                {
                    title: 'Settings',
                    onClick: action('Settings'),
                    icon: <Settings />,
                },
                {
                    title: 'Legal',
                    onClick: action('Legal'),
                    icon: <Gavel />,
                },
                {
                    title: 'Help',
                    onClick: action('Help'),
                    icon: <Help />,
                },
            ]}
        />
    </DrawerBody>
);

stories.add('basic usage', () => {
    const open = boolean('Open', true);
    const width = number('Width', 350, {
        range: true,
        min: 200,
        max: 700,
        step: 50,
    });

    return (
        <DrawerLayout
            drawer={
                <Drawer open={open} width={width}>
                    <DrawerHeader
                        icon={<MenuIcon />}
                        titleContent={
                            <div style={{ paddingLeft: '20px', paddingTop: '15px' }}>
                                <Typography variant="subtitle2" style={{ fontWeight: 100 }}>
                                    PX Blue
                                </Typography>
                                <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                    DrawerLayout
                                </Typography>
                            </div>
                        }
                    />
                    {defaultBody}
                    <DrawerFooter>
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
                </Drawer>
            }
        >
            <div
                style={{
                    backgroundColor: '#b7b7b7',
                    fontSize: '16pt',
                    color: 'white',
                    height: '100%',
                    padding: '30px',
                    boxSizing: 'border-box',
                }}
            >
                Body content goes here.
            </div>
        </DrawerLayout>
    );
});
