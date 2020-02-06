import {Avatar, Divider, MenuItem, Typography} from '@material-ui/core';
import { Email, Settings } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import { UserMenu, UserMenuGroup } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { color, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
const EatonLogo = require('../assets/EatonLogo.svg');

const tRex = require('../assets/trex.jpeg');

export const stories = storiesOf('User Menu', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/UserMenu.md') },
});

const defaultMenuItems: UserMenuGroup[] = [
    {
        items: [
            {
                title: 'Log Out',
                icon: <SendIcon />,
                onClick: action('Log Out Selected'),
            },
            {
                title: 'Account Settings',
                icon: <Settings />,
                onClick: action('Account Settings Selected'),
            },
            {
                title: 'Contact Us',
                icon: <Email />,
                onClick: action('Contact Us Selected'),
            },
        ],
    },
];

stories.add('with default colors', () => {
    const value = text('value', 'AB');
    const avatar = <Avatar>{value}</Avatar>;
    return <UserMenu avatar={avatar} menuGroups={defaultMenuItems} />;
});

stories.add('with custom colors', () => {
    const value = text('value', 'CD');
    const avatar = <Avatar>{value}</Avatar>;
    const backgroundColor = color('backgroundColor', Colors.blue[800]);
    const fontColor = color('fontColor', Colors.blue[50]);
    return (
        <UserMenu avatar={avatar} fontColor={fontColor} backgroundColor={backgroundColor} menuGroups={defaultMenuItems} />
    );
});

stories.add('with a non-text avatar', () => {
   const tRexAvatar = <Avatar src={tRex} />;
   const iconAvatar = <Avatar children={<SendIcon />} />;
    return (
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
            <UserMenu avatar={tRexAvatar} />
            <UserMenu avatar={iconAvatar} />
        </div>
    );
});

stories.add('with menu header', () => {
    const avatar = <Avatar>EM</Avatar>;
    const width = number('width', 250, { range: true, step: 10, min: 100, max: 500 });
    const menuTitle = text('menuTitle', 'Menu Title');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
    return (
        <UserMenu
            avatar={avatar}
            width={width}
            menuGroups={defaultMenuItems}
            menuTitle={menuTitle}
            menuSubtitle={menuSubtitle}
        />
    );
});

stories.add('with custom menu body', () => {
    const avatar = <Avatar src={tRex} />;
    return (
        <UserMenu avatar={avatar}>
            <div style={{ position: 'relative', padding: 10}}>
                <Typography variant={'h6'}>Welcome, </Typography>
                <Typography  style={{fontWeight: 600, marginTop: '-10px'}} variant={'h3'}>T-Rex</Typography>
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '100%',
                        width: '100%',
                        opacity: 0.2,
                        backgroundSize: 'cover',
                        backgroundImage: `url(${tRex})`,
                    }}
                >
                    &nbsp;
                </div>
            </div>
            <Divider />
            <MenuItem key={'account'}>My Account</MenuItem>
            <MenuItem key={'logout'}>Logout</MenuItem>
            <Divider />
            <img alt={'tRex'} style={{ textAlign: 'center', padding: '12px 16px 0 16px', height: 40 }} src={EatonLogo} />
        </UserMenu>
    );
});
