import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
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
            hovered: false,
            backdropClicked: false
        };
    }

    componentDidUpdate(nextProps) {
        const { open } = this.props;
        if (nextProps.open !== open) {
            this.setState({
                backdropClicked: false
            });
        }
    }

    isDrawerOpen() {
        return (this.state.hover || this.props.open) && !this.state.backdropClicked;
    }

    handleDrawerClose() {
        this.setState({
            backdropClicked: true
        });
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
                classes={{ paper: classes.drawer }}
                ModalProps={{ onBackdropClick: () => { this.handleDrawerClose() }} }>
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
                <Backdrop
                    open={this.isDrawerOpen()}
                />
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
