import { Avatar, Divider, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import { Email, Settings } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import { UserMenu, UserMenuGroup } from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
const EatonLogo = require('../assets/EatonLogo.svg');

const tRex = require('../assets/trex.jpeg');

export const stories = storiesOf('User Menu', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/UserMenu.md') },
});

const defaultMenuItems: UserMenuGroup[] = [
    {
        fontColor: '',
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
    const useStyles = makeStyles({
        root: {
            color: color('fontColor', Colors.white[50], 'Avatar'),
            backgroundColor: color('backgroundColor', Colors.blue[800], 'Avatar'),
        },
        paper: {
            backgroundColor: color('backgroundColor', Colors.blue[50], 'Menu'),
        },
    });
    const classes = useStyles();
    const avatar = <Avatar classes={{ root: classes.root }}>CD</Avatar>;
    defaultMenuItems[0].fontColor = color('fontColor', Colors.gray[500], 'Menu');
    defaultMenuItems[0].iconColor = color('iconColor', Colors.blue[800], 'Menu');
    return <UserMenu avatar={avatar} menuGroups={defaultMenuItems} MenuProps={{ classes: { paper: classes.paper } }} />;
});

stories.add('with a non-text avatar', () => {
    const tRexAvatar = <Avatar src={tRex} />;
    const iconAvatar = (
        <Avatar>
            <SendIcon />
        </Avatar>
    );
    return (
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
            <UserMenu avatar={tRexAvatar} menuGroups={defaultMenuItems} />
            <UserMenu avatar={iconAvatar} menuGroups={defaultMenuItems} />
        </div>
    );
});

stories.add('with menu header', () => {
    const avatar = <Avatar>EM</Avatar>;
    const menuTitle = text('menuTitle', 'Menu Title');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
    return <UserMenu avatar={avatar} menuGroups={defaultMenuItems} menuTitle={menuTitle} menuSubtitle={menuSubtitle} />;
});

type UserMenuState = {
    open: boolean;
};
const store = new Store<UserMenuState>({
    open: false,
});
stories.add('with custom menu', () => {
    const open = (): void => {
        store.set({ open: true });
    };
    const close = (): void => {
        store.set({ open: false });
    };
    const avatar = <Avatar src={tRex} />;
    store.set({ open: false });
    const menu = (state: any): JSX.Element => (
        <Menu open={state.open} onClose={close}>
            <div key={'header'} style={{ position: 'relative', padding: 10 }}>
                <Typography variant={'h6'}>Welcome, </Typography>
                <Typography style={{ fontWeight: 600, marginTop: '-10px' }} variant={'h3'}>
                    T-Rex
                </Typography>
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
                />
            </div>
            <Divider key={'divider-1'} />
            <MenuItem onClick={close} key={'account'}>
                My Account
            </MenuItem>
            <MenuItem onClick={close} key={'logout'}>
                Logout
            </MenuItem>
            <Divider key={'divider-2'} />
            <img
                key={'footer'}
                alt={'tRex'}
                style={{ textAlign: 'center', padding: '12px 16px 0 16px', height: 40 }}
                src={EatonLogo}
            />
        </Menu>
    );

    return (
        <State store={store}>
            {(state): JSX.Element => <UserMenu avatar={avatar} onOpen={open} menu={menu(state)} />}
        </State>
    );
});
