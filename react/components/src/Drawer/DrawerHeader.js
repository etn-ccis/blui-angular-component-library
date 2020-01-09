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
            <div className={classes.content}>

                <Typography noWrap variant={'h6'} className={classes.title}>
                    {this.props.title}
                </Typography>

                {this.props.subtitle &&
                    <Typography noWrap variant={'subtitle1'} className={classes.subtitle}>
                        {this.props.subtitle}
                    </Typography>}
            </div>
        );
    }

    backgroundImage() {
        const { backgroundImage, classes } = this.props;
        if (backgroundImage) {
            return (
                <div className={classes.headerBackground} style={{ backgroundImage: `url(${backgroundImage})` }} />
            );
        }
    }

    render() {
        const { classes, icon, theme} = this.props;
        return (
            <>
                <Toolbar
                     className={classes.root}
                     style={{
                         color: this.props.fontColor || Colors.white[50], // TODO: Dark theme
                         backgroundColor: this.props.backgroundColor || theme.palette.primary[500],
                     }}
                >
                    {this.backgroundImage()}
                    {icon && <div className={classes.navigation}>
                        <IconButton className={classes.icon} color={'inherit'}
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
    title: PropTypes.string,
    subtitle: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    icon: PropTypes.element,
    content: PropTypes.element,
    onClick: PropTypes.func
};

DrawerHeader.defaultProps = {
    onClick: () => {}
};

const styles = theme => ({
    root: {
        paddingRight: 0,
        paddingLeft: 0,
        width: '100%',
        alignItems: 'flex-start',
        boxSizing: 'border-box'
    },
    content: {
        [theme.breakpoints.down('xs')]: {
            minHeight: theme.spacing(7),
        },
        marginLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        minHeight: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',
        width: 'calc(90% - 56px)',
        boxSizing: 'border-box'
    },
    navigation: {
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(7),
        },
        padding: theme.spacing(0.5),
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
    },
    title: {
        fontWeight: 600,
        lineHeight: '1.25rem',
    },
    subtitle: {
        fontWeight: 300,
        lineHeight: '1.2rem', // Anything lower than 1.2rem cuts off bottom text of 'g' or 'y'.
        marginTop: '-2px'
    },
    headerBackground: {
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        opacity: 0.3,
        backgroundPosition: 'center',
    },
});

export default withStyles(styles, { withTheme: true })(DrawerHeader);
