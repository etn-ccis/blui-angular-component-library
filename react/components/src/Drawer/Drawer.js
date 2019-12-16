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
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from "@material-ui/core/Backdrop";
import DrawerAppBar from "./DrawerAppBar";

class SideNav extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showUserMenu: false,
            drawerOpen: this.props.open === undefined ? true : false,
            selected: undefined,
        };
    }

    onNavEnter() {
        this.hoverDelay = setTimeout(() => this.setState({ drawerHover: true }), 500);
    };

    toggleNavMenu() {
        this.setState({ showUserMenu: !this.state.showUserMenu });
    }

    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

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
                                color: this.state.drawerOpen || this.state.drawerHover ? '' : 'transparent',
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

    getDrawerContents() {
        const { classes } = this.props;
        const header = this.props.header;
       return  <div className={classes.drawerWidthFull}
             style={{
                 height: '100%',
             }}>
            <DrawerHeader
                title={header.title}
                subtitle={header.subtitle}
                info={header.info}
                backgroundColor={header.backgroundColor}
                backgroundImage={header.backgroundImage}
                textColor={header.textColor}
                icon={header.icon}
                content={header.content}
                overrides={header.classes || {}}

                onClick={() => this.toggleDrawer()}
                parentState={this.state}/>

            <div
                style={{
                    height: '100%',
                }}
                onMouseEnter={() => {
                    this.hoverDelay = setTimeout(() => this.setState({drawerHover: true}), 500);
                }}
                onMouseLeave={() => {
                    clearTimeout(this.hoverDelay);
                    this.setState({drawerHover: false});
                }}
            >
                {this.props.subheader && <DrawerSubheader
                    content={this.props.subheader.content}
                    overrides={this.props.subheader.classes || {}}
                    parentState={this.state}/>
                }

                {this.props.body && <DrawerBody
                    navGroups={this.props.body.navGroups}
                    backgroundColor={this.props.body.backgroundColor}
                    createRouteItems={(items) => this.createRouteItems(items)}
                    overrides={this.props.body.classes || {}}
                    parentState={this.state}/>
                }

                {this.props.footer && <DrawerFooter
                    content={this.props.footer.content}
                    createRouteItems={(items) => this.createRouteItems(items)}
                    overrides={this.props.footer.classes || {}}
                    parentState={this.state}/>
                }
            </div>
        </div>
    }

    getMobileNavigationMenu() {
        const { classes } = this.props;
        return (
            <Drawer
                open={this.state.drawerOpen}
                onClose={() => this.toggleDrawer()}
                classes={{ paper: classes.drawer }}
            >
                <div className={
                    'flexVert ' +
                    (this.state.drawerHover
                        ? classes.drawerWidthFull
                        : this.state.drawerOpen
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
        return <Drawer variant="permanent" classes={{paper: classes.paper}}>
            <div
                className={
                    'flexVert ' +
                    (this.state.drawerHover
                        ? classes.drawerWidthFull
                        : this.state.drawerOpen
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
        const { classes } = this.props;
        const appbar = this.props.appbar || {};
        return (
            <>
            <Hidden smUp>

                <DrawerAppBar
                    title={appbar.title || this.props.header.title}
                    subtitle={appbar.subtitle}
                    info={appbar.info}
                    backgroundColor={appbar.backgroundColor}
                    backgroundImage={appbar.backgroundImage}
                    textColor={appbar.textColor}
                    icon={appbar.icon || this.props.header.icon}
                    content={appbar.content}
                    overrides={appbar.classes || {}}

                    onClick={() => this.toggleDrawer()}
                    parentState={this.state}
                />
                {this.getMobileNavigationMenu()}
                <Backdrop open={this.state.drawerOpen}/>
            </Hidden>

            <Hidden smDown>
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
        const open = this.state.drawerHover || this.state.drawerOpen;
        const action = () => {
            this.setState({ drawerOpen: false, drawerHover: false, selected: title });
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
        cursor: 'pointer'
    },
    listItem: {
        paddingLeft: '15px',
        paddingRight: '15px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
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
