import {Accessibility, NotificationsActive} from '@material-ui/icons';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
// @ts-ignore
import {Drawer, DrawerBody, DrawerFooter, DrawerHeader} from '@pxblue/react-components/core/Drawer';
//@ts-ignore
import {DrawerLayout} from '@pxblue/react-components/core/DrawerLayout';
import {action} from "@storybook/addon-actions";
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
// @ts-ignore
import EatonLogo from "../assets/EatonLogo.svg";

export const stories = storiesOf('Drawer Layout', module);
stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown: require('./../../../docs/DrawerLayout.md')}
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
                    onClick: () => {
                       action('Notifications')
                    },
                    icon: <NotificationsActive/>
                }
            ]
        }
    ]}
/>


stories.add('with drawer and content', () => {
   const open = boolean('Open', true);

    return <DrawerLayout>
      <Drawer open={open}>
          <DrawerHeader title={"DrawerLayout Demo"} />
          {defaultBody}
         <DrawerFooter>
               <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                  <img src={EatonLogo} style={{'margin': '10px'}} alt="Eaton Logo" height={50} width={'auto'}/>
               </div>
         </DrawerFooter>
       </Drawer>
       <div style={{
          backgroundColor: "gray",
          color: "white",
          height: '100%',
          padding: '30px',
          boxSizing: 'border-box'}}>
          Body content goes here.
       </div>

    </DrawerLayout>
});

