import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Divider} from "@material-ui/core";

class DrawerSubheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div
                    className={classes.root}
                    style={{
                            visibility: (this.props.open ? '' : 'hidden'),
                            ...this.props.overrides.root
                        }}>
                    {this.props.content}
                </div>
                <Divider />
            </>
        );
    }
}

DrawerSubheader.propTypes = {
    open: PropTypes.bool,
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
