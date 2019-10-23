import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as PXBColors from '@pxblue/colors'

//Material-UI Components
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  frame: {
    height: '100%',
    color: PXBColors.gray[500],
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  }
})

class EmptyState extends React.Component {
  render() {
    const { icon, title, description, actions, classes } = this.props;
    return (
      <div className={classes.frame}>
        {icon}
        {title && <Typography
          variant="h6"
          color="inherit"
          style={{ lineHeight: '1.2rem', marginBottom: '10px' }}
        >{title}</Typography>}
        {description && <Typography variant="subtitle2" color="primary">{description}</Typography>}
        {actions}
      </div>
    )
  }
}

export default withStyles(styles)(EmptyState);