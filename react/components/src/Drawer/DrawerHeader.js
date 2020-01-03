import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";
import * as Colors from '@pxblue/colors';
import {Typography} from "@material-ui/core";

class DrawerHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    getHeaderContent() {
        const { classes } = this.props;
        return this.props.content || (
            <div className={classes.content} style={this.props.overrides.content}>

                <Typography variant={'h6'} className={classes.title} style={this.props.overrides.title}>
                    {this.props.title}
                </Typography>

                {this.props.subtitle &&
                    <Typography variant={'subtitle1'} className={classes.subtitle} style={this.props.overrides.subtitle}>
                        {this.props.subtitle}
                    </Typography>}
            </div>
        );
    }

    render() {
        const { classes, icon} = this.props;
        return (
            <>
                <Toolbar
                     className={classes.root}
                     style={{
                         color: this.props.textColor,
                         backgroundColor: this.props.backgroundColor,
                         backgroundImage: `url(${this.props.backgroundImage}`,
                         ...this.props.overrides.root,
                     }}
                >

                {icon && <div className={classes.navigation}>
                    <IconButton className={classes.icon} style={this.props.overrides.icon} color={'inherit'}
                                onClick={() => this.props.onClick()}>
                        {icon}
                    </IconButton>
                </div>}

                    {this.getHeaderContent()}

                </Toolbar>
                <Divider />
            </>
        );
    }
}

DrawerHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    icon: PropTypes.element,
    content: PropTypes.element,
    overrides: PropTypes.object,
    onClick: PropTypes.func
};

DrawerHeader.defaultProps = {
    textColor: Colors.white[50],
    backgroundColor: Colors.blue[500],
    overrides: {},
    onClick: () => {}
};

const styles = theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(1.5),
        },
        paddingLeft: theme.spacing(0.5),
        width: '100%',
        alignItems: 'flex-start',
        boxSizing: 'border-box'
    },
    content: {
        [theme.breakpoints.down('xs')]: {
            minHeight: theme.spacing(7),
        },
        minHeight: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column'
    },
    navigation: {
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(7),
        },
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
    },
    icon: {

    },
    title: {
        fontWeight: 600,
        lineHeight: '1.25rem'
    },
    subtitle: {
        fontWeight: 300,
        lineHeight: '1rem'
    },
});

export default withStyles(styles)(DrawerHeader);
