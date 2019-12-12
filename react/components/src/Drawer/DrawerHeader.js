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

                <Typography variant={'h5'} className={classes.title} style={this.props.overrides.title}>
                    {this.props.title}
                </Typography>

                {this.props.subtitle &&
                    <Typography variant={'subtitle1'} className={classes.subtitle} style={this.props.overrides.subtitle}>
                        {this.props.subtitle}
                    </Typography>}

                {this.props.info &&
                    <Typography variant={'subtitle2'} className={classes.info} style={this.props.overrides.info}>
                        {this.props.info}
                    </Typography>}
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Toolbar
                     className={classes.root}
                     style={{
                         backgroundColor: this.props.backgroundColor,
                         color: this.props.textColor,
                         backgroundImage: this.props.backgroundImage,
                         ...this.props.overrides.root,
                     }}
                >
                    <IconButton className={classes.icon} style={this.props.overrides.icon} color={'inherit'}
                                onClick={() => this.props.onClick()}>
                        {this.props.icon}
                    </IconButton>

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
    info: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    icon: PropTypes.element,
    classes: PropTypes.object
};

DrawerHeader.defaultProps = {
    icon: <MenuIcon />,
    textColor: Colors.white[50],
    backgroundColor: Colors.blue[500]
};

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing(0.5),
        width: '100%',
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
    info: {
        marginTop: '10px'
    }
});

export default withStyles(styles)(DrawerHeader);
