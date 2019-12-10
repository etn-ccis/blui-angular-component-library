import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

// Material-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import FolderIcon from '@material-ui/icons/Folder';
import InfoIcon from '@material-ui/icons/Info';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MenuIcon from '@material-ui/icons/Menu';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import SettingsIcon from '@material-ui/icons/Settings';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false,
      drawerOpen: false
    }
  }

  // returns the layout for the user details panel (mobile-only)
  getHeader() {
    return this.props.header ? (
       <div>Header input goes here!</div>
    ) : <></>;
  }

  // Input an list of objects, returns the menu content.
  createBody() {
    return this.props.content ? (
        <div style={{ flex: '1 1 0px', overflowY: 'auto' }}>
          <div>Header content goes here!</div>
        </div>
    ) : <></>
  }

  getFooter() {
    return this.props.footer ?
        (
            <div>Footer goes here!</div>
        ) : <></>
  }

    toggleNavMenu() {
        this.setState({ showUserMenu: !this.state.showUserMenu });
    }

    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    // returns the layout for the panel of main application pages
    getPrimaryNavigation(){
        const { classes } = this.props;
        return(
            <List subheader={
                <ListSubheader
                    className={classes.subheader}
                    style={{
                        position: 'unset',
                        color: (this.state.drawerOpen || this.state.drawerHover ? '' : 'transparent')
                    }}
                >
                    Monitor
                </ListSubheader>
            }>
                <Divider />
                {this.NavigationListItem({
                    title:'Alerts',
                    route:'/alerts',
                    icon:<MoveToInboxIcon/>
                })}
                {this.NavigationListItem({
                    title:'Schedule',
                    route:'/schedule',
                    icon:<SendIcon/>
                })}
                {this.NavigationListItem({
                    title:'Products',
                    route:'/products',
                    icon:<FolderIcon/>
                })}
                {this.NavigationListItem({
                    title:'Event Log',
                    route:'/eventlog',
                    icon:<InfoIcon/>
                })}
                {this.NavigationListItem({
                    title:'Settings',
                    route:'/settings',
                    icon:<SettingsIcon/>
                })}
            </List>
        );
    }

    // returns the layout for the panel of secondary application pages (About, License)
    getSecondaryNavigation(){
        const {classes} = this.props;
        return (
            <List style={{flex: '0 0 auto' }}
                  subheader={
                      <ListSubheader
                          className={classes.subheader}
                          style={{
                              display: 'flex',
                              width: '100%',
                              flexWrap: 'wrap',
                              color: (this.state.drawerOpen || this.state.drawerHover ? '' : 'transparent')
                          }}
                      ><span style={{flex: '0 0 auto'}}>About</span>
                          <span
                              style={{
                                  flex: '1 1 0px',
                                  textAlign: 'right',
                                  whiteSpace: 'nowrap'
                              }}
                          >Software Version v1.0.3</span>
                      </ListSubheader>
                  }>
                <Divider />
                {this.NavigationListItem({
                    title:'User Guide',
                    route:'/userguide',
                    icon:<FlagIcon/>
                })}
                {this.NavigationListItem({
                    title:'License Agreement',
                    route:'/license',
                    icon:<LocalOfferIcon/>
                })}
            </List>
        );
    }

    // returns the layout for the panel of user pages (Profile, Settings)
    getUserNavigation(){
        const {classes} = this.props;
        return (
            <List subheader={
                <ListSubheader
                    className={classes.subheader}
                    style={{
                        position: 'unset',
                        color: (this.state.drawerOpen || this.state.drawerHover ? '' : 'transparent')
                    }}
                >User Account</ListSubheader>
            }>
                <Divider />
                {this.NavigationListItem({
                    title:'User Profile',
                    route:'/profile',
                    icon:<SettingsIcon/>
                })}
                {this.NavigationListItem({
                    title:'Log Out',
                    route:'/logout',
                    icon:<SubdirectoryArrowRightIcon/>
                })}
            </List>
        );
    }

    // returns the layout for the user details panel (mobile-only)
    getUserDetails(){
        const {classes} = this.props;
        return (
            <div className={"flexVertBottom " + classes.header}>
                <div
                    style={{
                        cursor: "pointer",
                        width: '100%'
                    }}
                    onClick={() => this.toggleNavMenu()}
                >
                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        style={{lineHeight:'1rem'}}
                    >User Name</Typography>
                    <div className={'flexHor'}>
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                            style={{lineHeight:'1rem'}}
                        >username@domain.com</Typography>
                        <div style={{flex: '1 1 0px'}}/>
                        <ExpandMoreIcon style={this.state.showUserMenu ? {transform: 'rotate(180deg)'} : null}/>
                    </div>
                </div>
            </div>
        );
    }


    drawHeader() {
        const { classes } = this.props;
      return <Toolbar
          className={classes.flush + ' ' + classes.drawerWidthFull}
          style={this.props.header.style}>
          <IconButton
              color="inherit"
              onClick={() => this.toggleDrawer()}
          ><MenuIcon/></IconButton>
          {(this.state.drawerOpen || this.state.drawerHover) &&
          this.props.header.content
          }
      </Toolbar>
    }

    drawContent() {
      const { classes } = this.props;
      if (!this.props.body) {
          return <></>
      } else return <div
          className={classes.drawerWidthFull}
          style={{
              flex: '1 1 0px',
              overflowY: 'auto',
              overflowX: 'hidden'
          }}
          onMouseEnter={() => {
              this.hoverDelay = setTimeout(() => this.setState({drawerHover: true}), 500)
          }
          }
          onMouseLeave={() => {
              clearTimeout(this.hoverDelay);
              this.setState({drawerHover: false})
          }
          }
      >
          {this.props.body.navGroups && this.props.body.navGroups.map((navGroup, index) => <>
              <List subheader={
                  <ListSubheader
                      className={classes.subheader}
                      style={{
                          position: 'unset',
                          color: (this.state.drawerOpen || this.state.drawerHover ? '' : 'transparent')
                      }}
                  >
                      {navGroup.title}
                  </ListSubheader>
              }>
                  <Divider />
                  {navGroup.links.map((link, index) => <>{this.NavigationListItem({
                      title: link.title,
                      route: '',
                      icon: link.icon
                  })}</>
                  )}
              </List>
              <Divider />
              </>
          )}
      </div>
    }

  render() {
      const { classes } = this.props;
      return (
          <Drawer
              variant="permanent"
              open={true}
              onClose={() => this.toggleDrawer()}
          >
              <div
                  className={"flexVert " + (this.state.drawerHover ? classes.drawerWidthFull :
                      (this.state.drawerOpen ?
                              classes.drawerWidthFull :
                              classes.drawerWidthCollapsed
                      ))
                  }
                  style={{
                      height: '100%',
                      overflowX: 'hidden'
                  }}
              >
                  {this.drawHeader()}
                  <Divider />
                  {this.drawContent()}
              </div>
          </Drawer>
      );
  }

    NavigationListItem({title, route, icon}){
        const {classes} = this.props;
        const open = (this.state.drawerHover || this.state.drawerOpen);
        const action = () => this.setState({drawerOpen: false, drawerHover: false});
        return (
            <ListItem
                className={classes.listItem + ' ' + (open ? classes.open : '')}
                activeClassName={classes.listItemSelected}
                onClick={() => action()}
            >
                <ListItemIcon className={classes.listIcon}>
                    {icon}
                </ListItemIcon>
                <ListItemText inset
                              className={classes.listItemText}
                              primary={title}
                />
            </ListItem>
        );
    }
}

const styles = theme => ({
    flush: {
        paddingLeft: theme.spacing.unit * .5
    },
    toolbar:{
        [theme.breakpoints.down('xs')]:{
            paddingLeft: 0
        },
        paddingLeft: theme.spacing.unit * 2
    },
    noPadding: {
        padding: 0
    },
    drawerMargin:{
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
        marginLeft: theme.spacing.unit * 7,
        transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)'
    },
    drawerMarginFull:{
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
        marginLeft: theme.spacing.unit * 45,
        transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)'
    },
    drawerWidthFull:{
        width: theme.spacing.unit * 45,
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)'
    },
    drawerWidthCollapsed:{
        width: theme.spacing.unit * 7,
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)'
    },
    drawer:{
        maxWidth: '85%',
        width: theme.spacing.unit * 45
    },
    header:{
        height: '180px',
        color: 'white',
        background: theme.palette.primary['500'],
        padding: '16px'
    },
    subheader:{
        paddingLeft: '15px',
        paddingRight: '15px'
    },
    listItem:{
        paddingLeft: '15px',
        paddingRight: '15px',
        '&:hover':{
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
        }
    },
    listItemSelected:{
        position: 'relative',
        '&:hover':{
            backgroundColor: 'transparent'
        },
        '&:before':{
            content: '""',
            zIndex: -1,
            position: 'absolute',
            height: '100%',
            width: 'calc(100% - 8px)',
            left: 0,
            top: 0,
            backgroundColor: theme.palette.primary['50'],
            borderRadius: '0px 24px 24px 0px'
        },
        '&$open:hover:before':{
            backgroundColor: theme.palette.primary['100'],
        },
        '& $listIcon':{
            color: theme.palette.primary['500']
        }
    },
    listItemText:{
        paddingLeft: '1px'
    },
    // these must be defined, even if empty so we can reference them in other nested rules
    listIcon:{},
    open: {}
});

export default withStyles(styles)(SideNav);
