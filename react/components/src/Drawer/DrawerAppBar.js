import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";
import * as Colors from '@pxblue/colors';
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";

class DrawerAppBar extends React.Component {

    constructor(props) {
        super(props);
    }

    getHeaderContent() {
        const { classes } = this.props;
        return this.props.content || (
            <div className={classes.content}
                 style={this.props.overrides.content}>

                <Typography variant={'h5'}
                            className={classes.title}
                            style={this.props.overrides.title}>
                    {this.props.title}
                </Typography>

                {this.props.subtitle &&
                <Typography variant={'subtitle1'}
                            className={classes.subtitle}
                            style={this.props.overrides.subtitle}>
                    {this.props.subtitle}
                </Typography>}
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static"
                    color={'inherit'}
                    className={classes.root}
                    style={{
                        color: this.props.textColor,
                        backgroundColor: this.props.backgroundColor,
                        backgroundImage: this.props.backgroundImage,
                        ...this.props.overrides.root,
                    }}>
                <Toolbar
                    className={classes.toolbar}
                    style={this.props.overrides.toolbar}>
                    <IconButton color={'inherit'} style={this.props.overrides.icon}
                                onClick={() => this.props.onClick()}>
                        {this.props.icon}
                    </IconButton>
                    {this.getHeaderContent()}
                </Toolbar>
            </AppBar>
        );
    }
}

DrawerAppBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    icon: PropTypes.element,
    overrides: PropTypes.object
};

DrawerAppBar.defaultProps = {
    icon: <MenuIcon />,
    textColor: Colors.white[50],
    backgroundColor: Colors.blue[500]
};

const styles = theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
    },
    content: {
        padding: '20px'
    },
    icon: {

    },
    title: {

    },
    subtitle: {

    },
    toolbar: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        },
        paddingLeft: theme.spacing(2),
    }
});

export default withStyles(styles)(DrawerAppBar);
