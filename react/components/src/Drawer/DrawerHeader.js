import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';

class DrawerHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Toolbar className={classes.flush + ' ' + classes.drawerWidthFull} style={this.props.header.style}>
                    <IconButton color="inherit" onClick={() => this.props.onClick()}>
                        <MenuIcon />
                    </IconButton>
                    {(this.props.parentState.drawerOpen || this.props.parentState.drawerHover) && this.props.header.content}
                </Toolbar>
                <Divider />
            </>
        );
    }
}

const styles = theme => ({
    flush: {
        paddingLeft: theme.spacing.unit * 0.5,
    },
    drawerWidthFull: {
        width: theme.spacing.unit * 45,
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
    },
    drawerWidthCollapsed: {
        width: theme.spacing.unit * 7,
        overflow: 'hidden',
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
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
});

export default withStyles(styles)(DrawerHeader);
