import {MenuItem} from "@material-ui/core";
import * as Colors from '@pxblue/colors';
import SendIcon from '@material-ui/icons/Send';
import {UserMenu, UserMenuItems} from "@pxblue/react-components";
import {color, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

const tRex = require('../assets/trex.jpeg');

export const stories = storiesOf('User Menu', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../docs/Hero.md') },
});

const defaultMenuItems: UserMenuItems[] = [
   {
      title: 'Email',
      icon: <SendIcon />
   }
];

stories.add('with default values', () => {
    const value = text('value', 'aa');
    return <UserMenu value={value} menuItems={defaultMenuItems} />
});


stories.add('with custom colors', () => {
    const value = text('value', 'aa');
    const backgroundColor = color('backgroundColor', Colors.blue[800]);
    const fontColor = color('fontColor', Colors.blue[50]);
    return <UserMenu
       value={value}
       fontColor={fontColor}
       backgroundColor={backgroundColor}>
    </UserMenu>
});

stories.add('with background image', () => {
    return <UserMenu
       AvatarProps={{src: tRex}}>
    </UserMenu>
});

stories.add('with custom menu child', () => {
   return <UserMenu
      AvatarProps={{src: tRex}}>
      <MenuItem key={'profile'}>Profile</MenuItem>
      <MenuItem key={'account'}>My account</MenuItem>
      <MenuItem key={'logout'}>Logout</MenuItem>
   </UserMenu>
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
