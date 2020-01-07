import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import * as Colors from "@pxblue/colors";
import * as PXBColors from "@pxblue/colors";

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
                    backgroundColor: this.props.backgroundColor
                }}
            >
                {this.props.createRouteItems(this.props)}
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
    selectedColor: PropTypes.string,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
    titleColor: PropTypes.string,
};

DrawerBody.defaultProps = {
    backgroundColor: PXBColors.white[50],
    selectedColor: PXBColors.black[500],
    fontColor: PXBColors.gray[500],
    iconColor: PXBColors.blue[500],
};

export default withStyles(styles)(DrawerBody);
