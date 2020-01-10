import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField, Typography} from "@material-ui/core";
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
   Toc
} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
// @ts-ignore
import * as Colors from '@pxblue/colors';
//@ts-ignore
import { Drawer, DrawerHeader, DrawerSubheader, DrawerBody, DrawerFooter, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import {action} from "@storybook/addon-actions";
// @ts-ignore

import {boolean, color, number, object, optionsKnob, select, text, withKnobs} from '@storybook/addon-knobs';
import {OptionsKnobOptionsDisplay} from "@storybook/addon-knobs/dist/components/types/Options";
import {storiesOf} from '@storybook/react';
import React from 'react';
// @ts-ignore
import EatonLogo from "../assets/EatonLogo.svg";
const topologyBgImage = require('../assets/topology_40.png');
const farmBgImage = require('../assets/farm.jpg');

export const stories = storiesOf('Drawer', module);

stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown: require('./../../../docs/Drawer.md')}
});

let selected: string = 'Notifications';

const defaultBody = <DrawerBody>
   <DrawerNavGroup
      title={'Default Navigation Group'}
      items={
      [
         {
            title: 'User Guide',
            onClick: () => {
               selected = 'User Guide';
               action('User Guide')
            },
            icon: <MoveToInboxIcon/>,
            active: selected === 'User Guide'

         },
         {
            title: 'License Agreement',
            onClick: () => {
               selected = 'License Agreement';
               action('License Agreement')
            },
            icon: <SendIcon/>,
            active: selected === 'License Agreement'
         },
         {
            title: 'Accessibility',
            onClick: () => {
               selected = 'Accessibility';
               action('Accessibility')
            },
            icon: <Accessibility/>,
            active: selected === 'Accessibility'
         },
         {
            title: 'Notifications',
            onClick: () => {
               selected = 'Notifications',
               action('Notifications')
            },
            icon: <NotificationsActive/>,
            active: selected === 'Notifications'
         }
      ]
   }
   />
   <div style={{flex: '1 1 0px'}} />
   </DrawerBody>;


stories.add('with standard inputs', () => {
    const drawerGroupId = 'Drawer';
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const footerGroupId = 'Footer';

   const open = boolean('Open', true, drawerGroupId);
   const width = number('Width', 350, {
      range: true,
      min: 200,
      max: 700,
      step: 50,
   }, drawerGroupId);

    // Header
    const headerTitle = text('title', 'PX Blue Drawer', headerGroupId);
    const headerSubtitle = text('subtitle', 'Organize your menu items here', headerGroupId);

    const headerIconOptions = select('icon', ['Menu', 'Fitness', 'None'], 'Menu', headerGroupId);
    let headerIcon;
    switch (headerIconOptions) {
       case 'Menu':
            headerIcon = <MenuIcon/>;
            break;
        case 'Fitness':
            headerIcon = <FitnessCenter/>;
            break;
       case 'None':
          headerIcon = undefined;
          break;
    }

    const headerFontColor = color('fontColor', Colors.white[50], headerGroupId);
    const headerBackgroundColor = color('backgroundColor', Colors.blue[800], headerGroupId);
    const headerBackground = select('backgroundImage', ['None', 'Pattern'], 'Pattern', headerGroupId);
    let headerBackgroundImage;
    switch (headerBackground) {
        case 'None':
            headerBackgroundImage = undefined;
            break;
        case 'Pattern':
            headerBackgroundImage = topologyBgImage;
            break;
    }

    // Body
    const groupTitle1 = text('title1', 'NavGroup 1', bodyGroupId);
    const groupTitle2 = text('title2', 'NavGroup 2', bodyGroupId);
    const bodyFontColor = color('fontColor', Colors.black[500], bodyGroupId);
    const bodyIconColor = color('iconColor', Colors.blue[500], bodyGroupId);
    const bodyBackgroundColor = color('backgroundColor', Colors.white[50], bodyGroupId);
    const bodySelectedColor = color('selectedColor', Colors.blue[50], bodyGroupId);
    const bodyChevron = boolean('chevron', false, bodyGroupId);

    const numberLinksGroup1 = number('links1', 4, {
        range: true,
        min: 0,
        max: 6,
        step: 1,
    }, bodyGroupId);
    const numberLinksGroup2 = number('links2', 2, {
        range: true,
        min: 0,
        max: 4,
        step: 1,
    }, bodyGroupId);

    const links1 = [
        {
            title: 'Overview',
            onClick: action('Overview'),
            icon: <Dashboard/>,
        },
        {
            title: 'Timeline',
            onClick: action('Timeline'),
            icon: <Toc/>
        },
        {
            title: 'Locations',
            onClick: action('Locations'),
            icon: <PinDrop/>
        },
        {
            title: 'Devices',
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: action('Devices'),
            icon: <Devices/>
        },
        {
            title: 'Photos',
            onClick: action('Photos'),
            icon: <AddAPhoto/>
        },
        {
            title: 'Schedule',
            onClick: action('Schedule'),
            icon: <AirportShuttle/>
        },
    ].slice(0, numberLinksGroup1);

    const links2 = [
        {
            title: 'User Guide',
            onClick: action('User Guide'),
            icon: <MoveToInboxIcon/>
        },
        {
            title: 'License Agreement',
            subtitle: 'For Eaton employees only',
            onClick: action('License Agreement'),
            icon: <SendIcon/>
        },
        {
            title: 'Accessibility',
            onClick: action('Accessibility'),
            icon: <Accessibility/>
        },
        {
            title: 'Notifications',
            onClick: action('Notifications'),
            icon: <NotificationsActive/>
        }
    ].slice(0, numberLinksGroup2);

    // Footer
    const showFooter = boolean('show footer', true, footerGroupId);
    const footerBackgroundColor = color('backgroundColor', Colors.white[50], footerGroupId);

    return <Drawer open={open} width={width} >

       <DrawerHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          icon={headerIcon}
          backgroundImage={headerBackgroundImage}
          fontColor={headerFontColor}
          backgroundColor={headerBackgroundColor}
          overrides={{
             root: {
                backgroundSize: '400px'
             }
          }}
       />

       <DrawerBody
          iconColor={bodyIconColor}
          fontColor={bodyFontColor}
          selectedColor={bodySelectedColor}
          backgroundColor={bodyBackgroundColor} 
          chevron={bodyChevron} >
          <DrawerNavGroup items={links1} title={groupTitle1} />
          <DrawerNavGroup items={links2} content={
             <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                <div>{groupTitle2}</div>
                <div>Software Version v1.0.3</div>
             </div>
          } />
       </DrawerBody>

       <DrawerFooter
          backgroundColor={footerBackgroundColor}>
          {showFooter && open ?
          <div style={{'display': 'flex', 'justifyContent': 'center'}}>
          <img src={EatonLogo} style={{'margin': '10px'}} alt="Eaton Logo" height={50} width={'auto'}/>
       </div> : ''}
       </DrawerFooter>

    </Drawer>
});

stories.add('with custom header', () => {
   const open = boolean('Open', true);
   return <Drawer open={open}>
      <DrawerHeader
         backgroundImage={farmBgImage}
         icon={<MenuIcon />}
         content={
         <div style={{zIndex: 1, 'paddingLeft': '20px', 'paddingTop': '15px'}}>
            <Typography variant="subtitle2">Customizable</Typography>
            <Typography variant="h6" style={{'marginTop': '-10px'}}>Header Content Goes Here</Typography>
         </div>} />
      {defaultBody}
       </Drawer>
});

stories.add('with subheader', () => {
   const open = boolean('Open', true);
    const label = 'content';
    const valuesObj = {
        Filter: 'Filter',
        Accordion: 'Accordion'
    };
    const defaultValue = 'Filter';
    const optionsObj = {
        display: 'inline-radio' as OptionsKnobOptionsDisplay
    };

    const value = optionsKnob(label, valuesObj, defaultValue, optionsObj);


    const filter = <>
        <TextField id="outlined-basic" label="filter" variant="outlined" />
        <Search style={{position: 'relative', right: '40px', top: '15px'}}/>
        </>
    const accordion = <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>;

    return <Drawer open={open}>
       <DrawerHeader
          icon={<MenuIcon />}
          title={"Subheader Demo"} />
       <DrawerSubheader>
          <div
             style={{
                visibility: (open ? 'inherit' : 'hidden'),
                display: 'flex',
                justifyContent: 'center',
                padding: '20px'
             }}>
             {value === 'Filter' ? filter : accordion}
          </div>
       </DrawerSubheader>
       {defaultBody}
    </Drawer>
});

