import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from "@material-ui/core";
import {
   ArrowDropDown,
   Dashboard,
   Devices,
   FitnessCenter,
   Gavel,
   Help,
   Menu,
   PinDrop,
   Settings,
   Toc
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
//@ts-ignore
import Drawer from '@pxblue/react-components/core/Drawer';
import {action} from "@storybook/addon-actions";

import {boolean, color, number, object, select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
// @ts-ignore
import Background from '../assets/background.png';
// @ts-ignore
import EatonLogo from "../assets/EatonLogo.svg";
// @ts-ignore
import * as Colors from '@pxblue/colors';


export const stories = storiesOf('Drawer', module);
stories.addParameters({
   notes: { markdown: require('./../../../docs/Drawer.md')}
});
stories.addDecorator(withKnobs);




stories.add('with custom header content', () => {

   const classes = object('classes', {
      root: {
         'padding': '0px',
         'backgroundColor': 'red'
      }
   });

   const header = {
      classes,
      content:
         <div style={{'paddingLeft': '40px'}}>
            <Typography variant="subtitle2">Custom</Typography>
            <Typography variant="h6" style={{'marginTop': '-10px'}}>Element Content</Typography>
         </div>
   };

   return <Drawer
      header={header}
   />
});

stories.add('with standard inputs', () => {
   const headerGroupId = 'Header';
   const bodyGroupId = 'Body';
   const footerGroupId = 'Footer';

   // Header
   const title = text('title', 'PX Blue Drawer', headerGroupId);
   const subtitle = text('subtitle', 'A modern marvel of engineering', headerGroupId);
   const info = text('info', '', headerGroupId);
   const backgroundColor = color('backgroundColor', Colors.blue[800], headerGroupId);
   const textColor = color('textColor', Colors.white[50], headerGroupId);

   const iconOptions = select('icon', ['Menu', 'Fitness'], 'Menu', headerGroupId);
   let icon;
   switch (iconOptions) {
      case 'Menu':
         icon = <MenuIcon/>;
         break;
      case 'Fitness':
         icon = <FitnessCenter/>;
         break;
   }

   const background = select('backgroundImage', ['None', 'Gradient', 'Pattern'], 'None', headerGroupId);
   let backgroundImage;
   switch (background) {
      case 'None':
         backgroundImage = undefined;
         break;
      case 'Gradient':
         backgroundImage = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
         break;
      case 'Pattern':
         backgroundImage = `url(${Background})`;
         break;
   }

   const header = {
      title,
      subtitle,
      info,
      backgroundColor,
      backgroundImage,
      textColor,
      icon
   };

   function createSubheader() {
      const showSubheader = boolean('show subheader', false, '');

      return showSubheader ? {
         content: <div>Subheader</div>
      } : undefined;
   }

   // Body
   const groupTitle1 = text('Group 1 Title', 'NavGroup 1', bodyGroupId);
   const groupTitle2 = text('Group 2 Title', 'NavGroup 2', bodyGroupId);

   const link1 = text('link 1', 'Overview', bodyGroupId);
   const link2 = text('link 2', 'Timeline', bodyGroupId);
   const link3 = text('link 3', 'Locations', bodyGroupId);
   const link4 = text('link 4', 'Devices', bodyGroupId);
   const link5 = text('link 5', 'User Guide', bodyGroupId);
   const link6 = text('link 6', 'License Agreement', bodyGroupId);

   const body = {
      navGroups: [ {
         title: groupTitle1,
         links: [
            {
               title:link1,
               onClick: action(link1),
               icon: link1 ? <Dashboard/> : '',
            },
            {
               title:link2,
               onClick: action(link2),
               icon: link2 ? <Toc/> : ''
            },
            {
               title:link3,
               onClick: action(link3),
               icon: link3 ? <PinDrop/> : ''
            },
            {
               title:link4,
               onClick: action(link4),
               icon: link4 ? <Devices/> : ''
            },
         ]
      },
         {
            title:
               groupTitle2 ? <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                  <div>{groupTitle2}</div>
                  <div>Software Version v1.0.3</div>
               </div> : '',
            links: [
               {
                  title: link5,
                  onClick: action(link5),
                  icon:link5 ? <MoveToInboxIcon/> : ''
               },
               {
                  title:link6,
                  onClick: action(link6),
                  icon:link6 ? <SendIcon/> : ''
               }
            ]
         }
      ]
   };

   // Footer
   const showFooter = boolean('show footer', true, footerGroupId);

   const footer = {
      content: showFooter ?
         <div style={{'display': 'flex', 'justifyContent': 'center'}}>
            <img src={EatonLogo} style={{'margin': '10px'}} alt="Eaton Logo" height={50} width={'auto'}/>
         </div> : ''
   };

   return <Drawer
      header={header}
      body={body}
      footer={footer}
   />
});
