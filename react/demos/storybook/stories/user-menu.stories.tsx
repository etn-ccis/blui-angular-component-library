import {action} from "@storybook/addon-actions";
import React from 'react';
import * as Colors from '@pxblue/colors';
import {boolean, color, text, withKnobs} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {DrawerNavGroup, UserMenu, Drawer, DrawerBody } from "@pxblue/react-components";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import {Avatar, MenuItem} from "@material-ui/core";
const EatonLogo = require('../assets/EatonLogo.svg');

export const stories = storiesOf('User Menu', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/Hero.md') },
});

stories.add('with default values', () => {
    const value = text('value', 'aa');
    return <UserMenu value={value}/>
});

stories.add('with custom colors', () => {
    const value = text('value', 'aa');
    const backgroundColor = color('backgroundColor', Colors.blue[800]);
    const fontColor = color('fontColor', Colors.blue[50]);
    const handleClose = () => {};
    const AvatarProps = {
    };
    return <UserMenu
       value={value}
       fontColor={fontColor}
       backgroundColor={backgroundColor}
       AvatarProps={AvatarProps}>

        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>

    </UserMenu>
});

stories.add('with background image', () => {
    return <Avatar src={EatonLogo}>dd</Avatar>
});


/*
stories.add('goal', () => {
    const open = boolean('open', false);
    const value = text('value', 'aa');
    return <UserMenu value={two letters}

    content={{[{title:'', items:[]},{}]}} avatarProps={// Props that are passed int ointeral avatar (e.g. src, )}>

            // Child content goes here
            // Looks like a mini drawer
    </UserMenu>
});*/
