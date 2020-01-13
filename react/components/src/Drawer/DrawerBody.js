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
                    if (child && child.type && child.type.Naked) {
                        const type = child.type.Naked.name;
                        if (type === 'DrawerNavGroup') {
                            return React.cloneElement(child, {
                                open: this.props.open,
                                onSelect: this.props.onSelect,
                                fontColor: child.props.fontColor || this.props.fontColor,
                                iconColor: child.props.iconColor || this.props.iconColor,
                                selectedColor: child.props.selectedColor || this.props.selectedColor,
                                backgroundColor: child.props.backgroundColor || this.props.backgroundColor,
                                titleColor: child.props.titleColor || this.props.titleColor,
                                chevron: (child.props.chevron === undefined ? this.props.chevron : child.props.chevron)
                            });
                        }
                    }
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

    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    selectedColor: PropTypes.string,
    iconColor: PropTypes.string,
    titleColor: PropTypes.string,
    chevron: PropTypes.bool,
};

export default withStyles(styles)(DrawerBody);
