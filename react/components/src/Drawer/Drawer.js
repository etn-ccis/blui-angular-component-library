import React from 'react';
import PropTypes from "prop-types";

import {withStyles} from '@material-ui/core/styles';
import {Drawer, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DrawerHeader from "./DrawerHeader";
import DrawerSubheader from "./DrawerSubheader";
import DrawerBody from "./DrawerBody";
import DrawerFooter from "./DrawerFooter";
import Hidden from "@material-ui/core/Hidden";
import Backdrop from "@material-ui/core/Backdrop";
import {InfoListItem} from "../index";
import * as PXBColors from "@pxblue/colors";

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        };
    }

    isDrawerOpen() {
        return this.state.hover || this.props.open;
    }

    findChildByType(type) {
        const empty = <></>;
        return React.Children.map(this.props.children, child => {
            if (child && child.type) {
                const name = child.type.displayName;
                if (name && name.includes(type)) {
                    return child;
                }
            }
        }) || [empty];
    }

    getHeader() {
        const header = this.findChildByType('DrawerHeader')[0];
        return <>
            {header && React.cloneElement(header)}
        </>;
    }

    getSubHeader() {
        const subheader = this.findChildByType('DrawerSubheader')[0];
        return <>
            {subheader && React.cloneElement(subheader, { open: this.isDrawerOpen() })}
        </>;
    }

    getBody() {
        const body = this.findChildByType('DrawerBody')[0];
        return <>
            {body && React.cloneElement(body, {
                open: this.isDrawerOpen(),
                onSelect: () => {
                    this.setState({ hover: false });
                }
            })}
        </>;
    }

    getFooter() {
        const footer = this.findChildByType('DrawerFooter')[0];
        return <>
            {footer && React.cloneElement(footer, { open: this.isDrawerOpen() })}
        </>;
    }

    getMobileNavigationMenu() {
        const { classes, theme } = this.props;
        return (
            <Drawer {...this.props}
                open={this.isDrawerOpen()}
                classes={{ paper: classes.drawer }}>
                <div className={classes.smooth + ' ' + classes.content}
                     style={{width: theme.spacing(45)}}>
                    {this.getDrawerContents()}
                </div>
            </Drawer>
        );
    }

    getDesktopNavigationMenu() {
        const { classes, theme } = this.props;
        const containerWidth = this.isDrawerOpen() ? this.props.width || theme.spacing(45) : theme.spacing(7);
        const contentWidth = this.props.width || theme.spacing(45);
        return (
            <>
            <Drawer {...this.props}
                    variant="permanent"
                    open={this.isDrawerOpen()}
                    classes={{paper: classes.paper}}
                    style={{minHeight: '100%'}}>

                    <div className={classes.smooth}
                         style={{ width: containerWidth }} >
                        <div className={classes.content}
                             style={{width: contentWidth}}>
                            {this.getDrawerContents()}
                        </div>
                    </div>
                </Drawer>
            </>
        )
    }

    getDrawerContents() {
        const { classes, theme } = this.props;

        return  (
            <>
            {this.getHeader()}
            <div
                style={{ flexDirection: 'column', flex: '1 1 0px', display: 'flex' }}
                onMouseEnter={() => {
                    this.hoverDelay = setTimeout(() => this.setState({hover: true}), 500);
                }}
                onMouseLeave={() => {
                    clearTimeout(this.hoverDelay);
                    this.setState({hover: false});
                }}
            >
                {this.getSubHeader()}
                {this.getBody()}
                {this.getFooter()}
            </div>
            </>
        )
    }

    render() {
        return (
            <>
            <Hidden smUp>
                {this.getMobileNavigationMenu()}
                <Backdrop open={this.isDrawerOpen()}/>
            </Hidden>

            <Hidden xsDown>
                {this.getDesktopNavigationMenu()}
            </Hidden>
            </>
        );
    }
}

const styles = theme => {
    return {
    paper: {
        overflow: 'hidden',
        position: 'unset',
    },
    drawer: {
        maxWidth: '85%',
        width: theme.spacing(45),
    },
    smooth: {
        height: '100%',
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    }
}};

export default withStyles(styles, { withTheme: true })(SideNav);
