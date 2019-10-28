
//@ts-ignore
import * as Colors from "@pxblue/colors";
import React from 'react';
//@ts-ignore
import { action } from '@storybook/addon-actions';
//@ts-ignore
import EmptyState from '@pxblue/react-components/core/EmptyState';

import DevicesIcon from '@material-ui/icons/Devices'
import AddIcon from '@material-ui/icons/AddCircleOutlined'
import Button from '@material-ui/core/Button';
import AlertIcon from '@material-ui/icons/NotificationImportant';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default {
   title: 'EmptyState',
};

export const actions = () =>
   <EmptyState
      icon={<DevicesIcon fontSize={'inherit'}/>}
      title={"No Devices"}
      actions={
         <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={action('clicked')}>
            <AddIcon style={{ marginRight: '5px' }} />
            Add Device
         </Button>
      }
   />;

export const placeholder = () =>
   <EmptyState
      icon={<TrendingUpIcon fontSize={'inherit'} style={{marginBottom: '0'}}/>}
      title={"Predictions Page Coming Soon"}
      description={"A fully redesigned predictions page is coming in our next release!"}
      actions={<Button variant="outlined" size="small" color="primary" style={{ margin: '10px' }}>Learn More</Button>}
   />;

export const textOnly = () =>
   <EmptyState
      icon={<AlertIcon fontSize={'inherit'}/>}
      title={"No Alarms Found"}
   />;
