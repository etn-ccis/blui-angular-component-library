import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
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

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           // drawerOpen: this.props.open === undefined ? true : this.props.defaultState,
            hovered: false,
            selected: undefined,
        };
    }

    isDrawerOpen() {
        return this.state.hover || this.props.open;
    }
/*
    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }
    *.
 */

    createRouteItems(navGroups) {
        if (!navGroups) {
            return <></>;
        }
        const { classes } = this.props;
        return navGroups.map((navGroup, index) => (
            <>
                <List
                    subheader={
                        <ListSubheader
                            className={classes.subheader}
                            style={{
                                position: 'unset',
                                color: this.isDrawerOpen() ? '' : 'transparent',
                            }}
                        >
                            {navGroup.title}
                        </ListSubheader>
                    }
                >
                    {navGroup.title && <Divider />}
                    {navGroup.links.map((link, index) => (
                        <>
                            {this.NavigationListItem({
                                title: link.title,
                                icon: link.icon,
                                key: (link.title + index),
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
            {subheader && React.cloneElement(subheader, {
                open: this.isDrawerOpen()
            })}
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
                onClose={() => { this.toggleDrawer(); this.props.onClose()} }
                classes={{ paper: classes.drawer }}
            >
                <div className={
                    'flexVert ' +
                    (this.state.drawerHover
                        ? classes.drawerWidthFull
                        : this.isDrawerOpen()
                            ? classes.drawerWidthFull
                            : classes.drawerWidthCollapsed)
                }
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
                    'flexVert ' +
                    (this.state.hover
                        ? classes.drawerWidthFull
                        : this.isDrawerOpen()
                            ? classes.drawerWidthFull
                            : classes.drawerWidthCollapsed)
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

    NavigationListItem({ title, icon, index, onClick }) {
        if (!title && !icon) {
            return <></>
        }

        const { classes } = this.props;
        const open = this.state.drawerHover || this.isDrawerOpen();
        const action = () => {
            this.setState({ hover: false, selected: title });
            onClick();
        };
        const selected = this.state.selected === title;
        return (
            <ListItem
                key={index}
                className={classes.listItem + ' ' + (open ? classes.open : '') + ' ' + (selected ? classes.listItemSelected : '')}
                onClick={() => action()}
            >
                <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
                <ListItemText inset className={classes.listItemText} primary={title} />
            </ListItem>
        );
    }
}

const styles = theme => {
    return {
    paper: {
        overflow: 'hidden'
    },
    flush: {
        paddingLeft: theme.spacing(0.5),
    },
    toolbar: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        },
        paddingLeft: theme.spacing(2),
    },
    noPadding: {
        padding: 0,
    },
    drawerMargin: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
        marginLeft: theme.spacing(7),
        transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)',
    },
    drawerMarginFull: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
        marginLeft: theme.spacing(45),
        transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)',
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
        paddingLeft: '15px',
        paddingRight: '15px',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    listItem: {
        paddingLeft: '15px',
        paddingRight: '15px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
        },
    },
    listItemSelected: {
        position: 'relative',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&:before': {
            content: '""',
            zIndex: -1,
            position: 'absolute',
            height: '100%',
            width: 'calc(100% - 8px)',
            left: 0,
            top: 0,
            backgroundColor: theme.palette.primary['50'],
            borderRadius: '0px 24px 24px 0px',
        },
        '&$open:hover:before': {
            backgroundColor: theme.palette.primary['100'],
        },
        '& $listIcon': {
            color: theme.palette.primary['500'],
        },
    },
    listItemText: {
        paddingLeft: '1px',
    },
    // these must be defined, even if empty so we can reference them in other nested rules
    listIcon: {},
    open: {},
}};

export default withStyles(styles)(SideNav);
