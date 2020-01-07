import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import * as PXBColors from "@pxblue/colors";

class DrawerBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, theme } = this.props;
        const defaultBackgroundColor = PXBColors.white[50]; // TODO, dark theme compatible
        return (
            <div
                className={classes.root}
                style={{
                    backgroundColor: this.props.backgroundColor || defaultBackgroundColor
                }}
            >
                {this.props.createRouteItems(this.props)}
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
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

export default withStyles(styles, { withTheme: true })(DrawerBody);
