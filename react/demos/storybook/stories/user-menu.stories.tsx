import {MenuItem} from "@material-ui/core";
import {Email, Settings} from "@material-ui/icons";
import SendIcon from '@material-ui/icons/Send';
import * as Colors from '@pxblue/colors';
import {UserMenu, UserMenuGroup} from "@pxblue/react-components";
import {color, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

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
            icon: <SendIcon/>
         },
         {
            title: 'Account Settings',
            icon: <Settings/>,
         },
         {
            title: 'Contact Us',
            icon: <Email/>,
         },
      ]
   }
];

stories.add('with default colors', () => {
    const value = text('value', 'aa');
    return <UserMenu value={value} menuGroups={defaultMenuItems} />
});


stories.add('with custom colors', () => {
    const value = text('value', 'aa');
    const backgroundColor = color('backgroundColor', Colors.blue[800]);
    const fontColor = color('fontColor', Colors.blue[50]);
    return <UserMenu
       value={value}
       fontColor={fontColor}
       backgroundColor={backgroundColor}
       menuGroups={defaultMenuItems}>
    </UserMenu>
});

stories.add('with background image', () => {
    return <UserMenu
       AvatarProps={{src: tRex}}>
    </UserMenu>
});


stories.add('with menu header', () => {
   const menuTitle = text('menuTitle', 'Menu Title');
   const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
   return <UserMenu
      menuGroups={defaultMenuItems}
      menuTitle={menuTitle}
      menuSubtitle={menuSubtitle}
      value={'EM'} />;
});

stories.add('with custom menu body', () => {
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
