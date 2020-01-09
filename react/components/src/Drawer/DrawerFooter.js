import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";


class DrawerFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Divider/>
                <div
                    className={classes.root}
                    style={{
                        backgroundColor: this.props.backgroundColor
                    }}
                >
                    {this.props.children}
                </div>
            </>
        );
    }
}

DrawerFooter.propTypes = {
    backgroundColor: PropTypes.string,
};

const styles = theme => ({
    root: {
        width: '100%',
    }
});

export default withStyles(styles)(DrawerFooter);
