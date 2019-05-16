import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export const HeroBanner = ({classes, divider, ...props }) => (
    <React.Fragment>
        <div className={classes.banner}>
            {props.children.slice(0,4).map((child) => child)}
        </div>
        {divider &&
            <Divider/>
        }
    </React.Fragment>
); 

HeroBanner.propTypes = {
    divider: PropTypes.bool
}
HeroBanner.defaultProps = {
    divider: false
};

const styles = (theme) => ({
  banner:{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default withStyles(styles)(HeroBanner);
