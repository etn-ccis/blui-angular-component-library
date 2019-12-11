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

import {boolean, color, object, select, text, withKnobs} from '@storybook/addon-knobs';
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

stories.add('with basic properties', () => (
   <Drawer
      header = {{
         style: {
            backgroundImage: `url(${Background})`,
            color: 'white'
         },
         content:
            <div style={{'paddingLeft': '40px'}}>
               <Typography variant="subtitle2">Project</Typography>
               <Typography variant="h6" style={{'marginTop': '-10px'}}>Washington</Typography>
            </div>
      }
      }
      subheader = { {
         content:
            <ExpansionPanel style={{
               'WebkitBoxShadow': 'none',
               'MozBoxShadow': 'none',
               'boxShadow': 'none',
            }}>
               <ExpansionPanelSummary
                  expandIcon={<ArrowDropDown />}
               >
                  <Typography variant={'h6'}>All Locations</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                     sit amet blandit leo lobortis eget.
                  </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>
      } }

      body = { {
         navGroups: [ {
            links: [
               {
                  title:'Overview',
                  onClick: action('overview') ,
                  icon:<Dashboard/>,
               },
               {
                  title:'Timeline',
                  onClick: action('timeline'),
                  icon:<Toc/>
               },
               {
                  title:'Locations',
                  onClick: action('locations'),
                  icon:<PinDrop/>
               },
               {
                  title:'Devices',
                  onClick: action('devices'),
                  icon:<Devices/>
               },
            ]
         },
            {
               title:
                  <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                     <div>About</div>
                     <div>Software Version v1.0.3</div>
                  </div>,
               links: [
                  {
                     title:'User Guide',
                     onClick: action('user guide') ,
                     icon:<MoveToInboxIcon/>
                  },
                  {
                     title:'License Agreement',
                     onClick: action('license agreement'),
                     icon:<SendIcon/>
                  }
               ]
            }
         ]
      } }
      footer = {{
         navGroups: [{
            links: [
               {
                  title: 'Settings',
                  onClick: action('settings') ,
                  icon: <Settings/>
               },
               {
                  title: 'Legal',
                  onClick: action('legal'),
                  icon: <Gavel/>
               },
               {
                  title: 'Help',
                  onClick: action('help') ,
                  icon: <Help/>
               },
            ]
         }],
         content:
            <div style={{'display': 'flex', 'justifyContent': 'left'}}>
               <img src={EatonLogo} style={{'margin': '10px'}} alt="Eaton Logo" height={50} width={'auto'}/>
            </div>
      }}
   />
));




stories.add('with a customizable header', () => {
   const title = text('title', 'PX Blue Drawer');
   const subtitle = text('subtitle', 'A modern marvel of engineering');
   const info = text('info', '');
   const backgroundColor = color('backgroundColor', Colors.blue[800]);
   const textColor = color('textColor', Colors.white[50]);
   const injectContent = boolean('inject custom element', false);

   const iconOptions = select('icon', ['Menu', 'Fitness'], 'Menu');
   let icon;
   switch (iconOptions) {
      case 'Menu':
         icon = <MenuIcon/>;
         break;
      case 'Fitness':
         icon = <FitnessCenter/>;
         break;
   }

   const background = select('backgroundImage', ['None', 'Gradient', 'Pattern'], 'None');
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

   const classes = object('classes', {
      content: {
         'padding': '80px'
      }
   });

   return <Drawer
      header={{
         title,
         subtitle,
         info,
         backgroundColor,
         backgroundImage,
         textColor,
         icon,
         classes,
         content: injectContent ?
            <div style={{'paddingLeft': '40px'}}>
               <Typography variant="subtitle2">Custom</Typography>
               <Typography variant="h6" style={{'marginTop': '-10px'}}>Element Content</Typography>
            </div> : ''
      }}
   />
});
