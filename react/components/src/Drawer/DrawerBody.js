import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import * as PXBColors from "@pxblue/colors";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {InfoListItem} from "../index";

class DrawerBody extends React.Component {

    render() {
        const { classes } = this.props;
        const defaultBackgroundColor = PXBColors.white[50]; // TODO, dark theme compatible
        const children = React.Children.toArray(this.props.children);

        return (
            <div
                className={classes.root}
                style={{
                    backgroundColor: this.props.backgroundColor || defaultBackgroundColor
                }}
            >

                {children.map((child, index) => {
                    // TODO: Check type to make sure it's a DrawerNavGroup
                    return React.cloneElement(child, {
                        open: this.props.open,
                        onSelect: this.props.onSelect,
                        fontColor: child.props.fontColor || this.props.fontColor,
                        iconColor: child.props.iconColor || this.props.iconColor,
                        selectedColor: child.props.selectedColor || this.props.selectedColor,
                        backgroundColor: child.props.backgroundColor || this.props.backgroundColor,
                        titleColor: child.props.titleColor || this.props.titleColor,
                    });
                })}
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        overflowY: 'auto'
    }
});

DrawerBody.propTypes = {
    open: PropTypes.bool,
    onSelect: PropTypes.func,

    navGroups: PropTypes.arrayOf(PropTypes.object),
    backgroundColor: PropTypes.string,
    selectedColor: PropTypes.string,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
    titleColor: PropTypes.string,
};

export default withStyles(styles)(DrawerBody);
