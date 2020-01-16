import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";


class DrawerFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, open } = this.props;
        return (
            <div
                className={classes.root}
                style={{
                    visibility: (open ? 'inherit' : 'hidden'),
                    backgroundColor: this.props.backgroundColor
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

DrawerFooter.propTypes = {
    backgroundColor: PropTypes.string,
    open: PropTypes.bool
};

const styles = theme => ({
    root: {
        width: '100%',
    }
});

export default withStyles(styles)(DrawerFooter);
