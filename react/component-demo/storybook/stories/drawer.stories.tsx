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
const README = require('./../../../docs/Drawer.md').default;
const backgroundImage = require('../assets/topology_40.png');


export const stories = storiesOf('Drawer', module);
stories.addParameters({
   readme: {
      sidebar: README,
   },
});
stories.addDecorator(withKnobs);

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
    const headerGroupId = 'Header';
    const bodyGroupId = 'Body';
    const footerGroupId = 'Footer';

   const open = boolean('Open', true, 'Drawer');

    // Header
    const headerTitle = text('title', 'PX Blue Drawer', headerGroupId);
    const headerSubtitle = text('subtitle', 'Organize your menu items here', headerGroupId);
    const headerBackgroundColor = color('backgroundColor', Colors.blue[800], headerGroupId);
    const headerTextColor = color('textColor', Colors.white[50], headerGroupId);

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
    const bodyBackgroundColor = color('backgroundColor', Colors.white[50], bodyGroupId);

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


    return <Drawer open={open}>

       <DrawerHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          icon={headerIcon}
          backgroundImage={headerBackgroundImage}
          textColor={headerTextColor}
          backgroundColor={headerBackgroundColor}
          overrides={{
             root: {
                backgroundSize: '400px'
             }
          }}
       />

       <DrawerBody
          backgroundColor={bodyBackgroundColor}
          navGroups={[
             {
                title: groupTitle1,
                links: links1
             },
             {
                title:
                   <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                      <div>{groupTitle2}</div>
                      <div>Software Version v1.0.3</div>
                   </div>,
                links: links2
             }
          ]}
       />

       <DrawerFooter
          backgroundColor={footerBackgroundColor}
          content={showFooter ?
             <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                <img src={EatonLogo} style={{'margin': '10px'}} alt="Eaton Logo" height={50} width={'auto'}/>
             </div> : ''}
       />

    </Drawer>
});

stories.add('with header style overrides', () => {
   const open = boolean('Open', true);

   const title = text('title', 'PX Blue Drawer,');
   const subtitle = text('subtitle', 'with custom styles applied');
   const info = text('info', 'Depending on your situation, it might make sense ' +
      'to adjust the default styles, rather than injecting your own header content');

   const classes = object('classes', {
      root: {
         minHeight: '100px'
      },
      content: {
         padding: '40px'
      },
      icon: {
         color: 'cyan'
      },
      title: {
         color: 'cyan'
      },
      subtitle: {
         color: 'rust',
         fontSize: '12px',
         fontWeight: '700'
      },
      info: {
         fontSize: '12px',
         color: 'white'
      }
   });

   return <Drawer open={open}>
      <DrawerHeader title={title} subtitle={subtitle} info={info} overrides={classes} />
      {defaultBody}
   </Drawer>
});


stories.add('with custom header content', () => {
   const open = boolean('Open', true);
   return <Drawer open={open}>
      <DrawerHeader content={
         <div style={{'paddingLeft': '40px'}}>
            <Typography variant="subtitle2">Custom</Typography>
            <Typography variant="h6" style={{'marginTop': '-10px'}}>Header Content</Typography>
         </div>} />
      {defaultBody}
       </Drawer>
});

stories.add('with custom subheader content', () => {
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

    const classes = object('classes', {
        root: {
            display: 'flex',
            justifyContent: 'center',
            padding: '20px'
        }
    });

    return <Drawer open={open}>
       <DrawerHeader title={"Subheader Demo"} />
       <DrawerSubheader
          overrides={classes}>
          {value === 'Filter' ? filter : accordion}
       </DrawerSubheader>
       {defaultBody}
    </Drawer>
});

