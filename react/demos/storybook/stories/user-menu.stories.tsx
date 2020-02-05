import { MenuItem } from '@material-ui/core';
import { Email, Settings } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import { UserMenu, UserMenuGroup } from '@pxblue/react-components';
import { color, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {action} from "@storybook/addon-actions";

const tRex = require('../assets/trex.jpeg');

export const stories = storiesOf('User Menu', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/UserMenu.md') },
});

/*
const useStyles = makeStyles((theme: Theme) =>
   createStyles({
       pxbRoot: {},
       pxbLabel: {},
   })
); */

const defaultMenuItems: UserMenuGroup[] = [
    {
        items: [
            {
                title: 'Log Out',
                icon: <SendIcon />,
                onClick: action('Log Out Selected')
            },
            {
                title: 'Account Settings',
                icon: <Settings />,
                onClick: action('Account Settings Selected')
            },
            {
                title: 'Contact Us',
                icon: <Email />,
                onClick: action('Contact Us Selected')
            },
        ],
    },
];

stories.add('with default colors', () => {
    const value = text('value', 'AB');
    return <UserMenu value={value} menuGroups={defaultMenuItems} />;
});

stories.add('with custom colors', () => {
    const value = text('value', 'CD');
    const backgroundColor = color('backgroundColor', Colors.blue[800]);
    const fontColor = color('fontColor', Colors.blue[50]);
    return (
        <UserMenu value={value} fontColor={fontColor} backgroundColor={backgroundColor} menuGroups={defaultMenuItems} />
    );
});

stories.add('with a non-text avatar', () => {
    return (
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
            <UserMenu avatarProps={{ src: tRex }} />
            <UserMenu avatarProps={{ children: <SendIcon /> }} />
        </div>
    );
});

stories.add('with menu header', () => {
    const width = number('width', 300, { range: true, step: 10, min: 100, max: 500 });
    const menuTitle = text('menuTitle', 'Menu Title');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
    return (
        <UserMenu
            width={width}
            menuGroups={defaultMenuItems}
            menuTitle={menuTitle}
            menuSubtitle={menuSubtitle}
            value={'EM'}
        />
    );
});

stories.add('with custom menu body', () => {
    return (
        <UserMenu avatarProps={{ src: tRex }}>
            <MenuItem key={'profile'}>Profile</MenuItem>
            <MenuItem key={'account'}>My account</MenuItem>
            <MenuItem key={'logout'}>Logout</MenuItem>
        </UserMenu>
    );
});
