import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import * as Colors from "@pxblue/colors";

class DrawerBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
                style={{
                    backgroundColor: this.props.backgroundColor,
                    ...this.props.overrides.root
                }}
            >
                {this.props.createRouteItems(this.props.navGroups)}
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        flex: '1 1 0px',
        width: '100%',
        height: '100%'
    }
});

DrawerBody.propTypes = {
    navGroups: PropTypes.arrayOf(PropTypes.object),
    backgroundColor: PropTypes.string,
    overrides: PropTypes.object
};

DrawerBody.defaultProps = {
    overrides: {},
};


export default withStyles(styles)(DrawerBody);
