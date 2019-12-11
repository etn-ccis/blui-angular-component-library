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
                <Toolbar className={classes.flush + ' ' + this.props.classes.drawerWidthFull} style={this.props.header.style}>
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
    }
});

export default withStyles(styles)(DrawerHeader);
