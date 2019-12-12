import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export const HeroBanner = ({ classes, divider, limit, ...props }) => {
    const isArray = Array.isArray(props.children);
    return (
        <React.Fragment>
            <div className={classes.banner} style={props.style}>
                {props.children && isArray && props.children.slice(0, limit).map((child) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </div>
            {divider && <Divider />}
        </React.Fragment>
    )
};

HeroBanner.propTypes = {
    divider: PropTypes.bool,
    limit: PropTypes.number,
}
HeroBanner.defaultProps = {
    divider: false,
    limit: 4,
};

const styles = (theme) => ({
    banner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withStyles(styles)(HeroBanner);
