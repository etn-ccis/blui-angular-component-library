import React from 'react';
import PropTypes from "prop-types";

import {withStyles} from '@material-ui/core/styles';
import {Drawer, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
// Material-UI Icons
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
            hovered: false,
            selected: undefined,
        };
    }

    isDrawerOpen() {
        return this.state.hover || this.props.open;
    }

    createRouteItems(navProps) {
        if (!navProps.navGroups) {
            return <></>;
        }
        const { classes } = this.props;
        return navProps.navGroups.map((navGroup, index) => (
            <>
                <List
                    style={{'paddingBottom': '0'}}
                    subheader={
                        <ListSubheader
                            className={classes.subheader}
                            style={{
                                position: 'unset',
                                color: this.isDrawerOpen() ? '' : 'transparent',
                            }}
                        >
                            {navGroup.title &&
                                <Typography noWrap
                                    variant={'subtitle2'}
                                    className={classes.navGroupTextHeader}>
                                    {navGroup.title}
                                </Typography>}
                            {navGroup.content}
                        </ListSubheader>
                    }
                >
                    {(navGroup.title || navGroup.content) && <Divider />}
                    {navGroup.links.map((link, index) => (
                        <>
                            {this.NavigationListItem({
                                    navProps: navProps,
                                    title: link.title,
                                    subtitle: link.subtitle,
                                    icon: link.icon,
                                    status: link.status,
                                    onClick: link.onClick
                            })}
                        </>
                    ))}
                </List>
                <Divider />
            </>
        ));
    }

    findChildByType(type) {
        const empty = <></>;
        return React.Children.map(this.props.children, child => {
            if (child.type) {
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
            {subheader && React.cloneElement(subheader)}
        </>;
    }

    getBody() {
        const body = this.findChildByType('DrawerBody')[0];
        return <>
            {body && React.cloneElement(body, {
                createRouteItems: (items) => this.createRouteItems(items)
            })}
        </>;
    }

    getFooter() {
        const footer = this.findChildByType('DrawerFooter')[0];
        return <>
            {footer && React.cloneElement(footer, {
                createRouteItems: (items) => this.createRouteItems(items),
                open: this.isDrawerOpen()
            })}
        </>;
    }

    getDrawerContents() {
        const { classes } = this.props;

       return  <div className={classes.drawerWidthFull}
             style={{
                 height: '100%',
             }}>


           {this.getHeader()}

            <div
                style={{
                    height: '100%',
                }}
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
        </div>
    }

    getMobileNavigationMenu() {
        const { classes } = this.props;
        return (
            <Drawer
                open={this.isDrawerOpen()}
                classes={{ paper: classes.drawer }}>
                <div className={this.isDrawerOpen() ? classes.drawerWidthFull : classes.drawerWidthCollapsed}
                     style={{
                         height: '100%',
                         overflow: 'hidden'
                     }}>
                    {this.getDrawerContents()}
                </div>
            </Drawer>
        );
    }

    getDesktopNavigationMenu() {
        const { classes } = this.props;
        return <Drawer variant="permanent"
                       open={this.isDrawerOpen()}
                       classes={{paper: classes.paper}}>
            <div
                className={
                    this.state.hover
                        ? classes.drawerWidthFull
                        : this.isDrawerOpen()
                            ? classes.drawerWidthFull
                            : classes.drawerWidthCollapsed
                }
                style={{
                    height: '100%'
                }}
            >
                {this.getDrawerContents()}
            </div>
        </Drawer>
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

    NavigationListItem({ navProps, title, subtitle, icon, index, status, onClick }) {
        if (!title && !icon) {
            return <></>
        }

        const { classes, theme } = this.props;
        const open = this.state.drawerHover || this.isDrawerOpen();
        const selected = this.state.selected === title;
        const defaultSelectedBackgroundColor = theme.palette.secondary[50];
        const action = () => {
            this.setState({ hover: false, selected: title });
            onClick();
        };
        return (
            <div style={{position: 'relative'}} className={classes.listItem}>
                {selected &&
                    <div className={classes.selected}
                    style={{backgroundColor: navProps.selectedColor || defaultSelectedBackgroundColor}} />}
                <InfoListItem dense
                    title={title}
                    subtitle={subtitle}
                    divider={'full'}
                    statusColor={status}
                    fontColor={navProps.fontColor}
                    icon={icon}
                    iconColor={navProps.iconColor}
                    backgroundColor={'transparent'}
                    onClick={() => action()}
                />
        </div>
        );
    }
}

const styles = theme => {
    return {
    paper: {
        overflow: 'hidden',
        position: 'unset'
    },
    toolbar: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        },
        paddingLeft: theme.spacing(2),
    },
    drawerWidthFull: {
        width: theme.spacing(45),
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
    },
    drawerWidthCollapsed: {
        width: theme.spacing(7),
        overflow: 'hidden',
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
    },
    drawer: {
        maxWidth: '85%',
        width: theme.spacing(45),
    },
    header: {
        height: '180px',
        color: 'white',
        background: theme.palette.primary['500'],
        padding: '16px',
    },
    subheader: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        cursor: 'text',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    listItem: {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }
    },
    navGroupTextHeader: {
        width: '95%',
        display: 'block',
        alignItems: 'center',
        lineHeight: '3rem',
        height: theme.spacing(6),
    },
    selected: {
        content: '""',
        zIndex: 0,
        position: 'absolute',
        height: '100%',
        width: 'calc(100% - 8px)',
        left: 0,
        top: 0,
        backgroundColor: theme.palette.primary['50'],
        borderRadius: '0px 24px 24px 0px',
        opacity: .9,
        '&hover': {
            opacity: 1,
        }
    }
}};

export default withStyles(styles, { withTheme: true })(SideNav);
