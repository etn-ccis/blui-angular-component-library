import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

class DrawerSubheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
                style={{
                        visibility: (this.props.parentState.drawerOpen ? '' : 'hidden'),
                        ...this.props.overrides.root
                    }}>
                {this.props.content}
            </div>
        );
    }
}

DrawerSubheader.propTypes = {
    content: PropTypes.element,
    overrides: PropTypes.object
};

const styles = theme => ({
    root: {
        flex: '1 1 0px',
        paddingLeft: '40px',
        paddingRight: '10px',
    }
});

export default withStyles(styles)(DrawerSubheader);
