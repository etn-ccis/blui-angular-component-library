import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import * as PXBColors from '@pxblue/colors'

//Material-UI Components
import Typography from '@material-ui/core/Typography';

class EmptyState extends React.Component {
  render() {
    const { icon, title, description, actions, classes, iconStyles } = this.props;
    return (
      <div className={classes.frame}>
        {icon &&
          <div style={Object.assign({ marginBottom: '15px', display: 'flex', fontSize: '100px' }, iconStyles)}>
            {icon}
          </div>
        }
        <Typography variant="h6" color="inherit">{title}</Typography>
        {description && <Typography variant="subtitle2" color="primary">{description}</Typography>}
        {actions &&
          <div style={{ marginTop: '10px' }}>
            {actions}
          </div>
        }
      </div>
    )
  }
}
EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
  actions: PropTypes.element,
  iconStyles: PropTypes.object,
};
EmptyState.defaultProps = {};

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

export default withStyles(styles)(EmptyState);
