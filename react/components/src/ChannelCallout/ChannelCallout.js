import React from 'react';

import Typography from '@material-ui/core/Typography';

export const ChannelCallout = ({...props }) => (
  <React.Fragment>
      {props.icon}
      <Typography variant={'h6'}>Hello</Typography>
  </React.Fragment>
); 