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
import { Drawer, DrawerHeader, DrawerSubheader, DrawerBody, DrawerFooter } from '@pxblue/react-components/core/Drawer';
import {action} from "@storybook/addon-actions";
// @ts-ignore

import {boolean, color, number, object, optionsKnob, select, text, withKnobs} from '@storybook/addon-knobs';
import {OptionsKnobOptionsDisplay} from "@storybook/addon-knobs/dist/components/types/Options";
import {storiesOf} from '@storybook/react';
import React from 'react';
// @ts-ignore
import EatonLogo from "../assets/EatonLogo.svg";
const backgroundImage = require('../assets/topology_40.png');

export const stories = storiesOf('Drawer', module);

stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown: require('./../../../docs/Drawer.md')}
});

const defaultBody = <DrawerBody
    navGroups={[
        {
            links: [
                {
                    title: 'User Guide',
                    onClick: action('User Guide'),
                    icon: <MoveToInboxIcon/>
                },
                {
                    title: 'License Agreement',
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
            ]
        }
    ]}
/>

stories.add('with standard inputs', () => {
    const drawerGroupId = 'Drawer';
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const footerGroupId = 'Footer';

   const open = boolean('Open', true, drawerGroupId);

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

    const headerFontColor = color('fontColor', '', headerGroupId);
    const headerBackgroundColor = color('backgroundColor', '', headerGroupId);
    const headerBackground = select('backgroundImage', ['None', 'Pattern'], 'None', headerGroupId);
    let headerBackgroundImage;
    switch (headerBackground) {
        case 'None':
            headerBackgroundImage = undefined;
            break;
        case 'Pattern':
            headerBackgroundImage = backgroundImage;
            break;
    }

    // Body
    const groupTitle1 = text('title1', 'NavGroup 1', bodyGroupId);
    const groupTitle2 = text('title2', 'NavGroup 2', bodyGroupId);
    const bodyFontcolor = color('fontColor', '', bodyGroupId);
    const bodyIconColor = color('iconColor', '', bodyGroupId);
    const bodyBackgroundColor = color('backgroundColor', '', bodyGroupId);
    const bodySelectedColor = color('selectedColor', '', bodyGroupId);

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
            status: Colors.yellow[500],
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

    return <Drawer open={open} >

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
          fontColor={bodyFontcolor}
          selectedColor={bodySelectedColor}
          backgroundColor={bodyBackgroundColor}
          navGroups={[
             {
                title: groupTitle1,
                links: links1
             },
             {
                content:
                   <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                      <div>{groupTitle2}</div>
                      <div>Software Version v1.0.3</div>
                   </div>,
                links: links2
             }
          ]}
       />

       <DrawerFooter
          backgroundColor={footerBackgroundColor}>
          {showFooter ?
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
         icon={<MenuIcon />}
         content={
         <div style={{'paddingLeft': '20px', 'paddingTop': '12px'}}>
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

