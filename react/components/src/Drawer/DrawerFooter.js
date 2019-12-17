import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";


class DrawerFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Divider/>
                <div
                    className={classes.root}
                    style={{
                        backgroundColor: this.props.backgroundColor
                    }}
                >
                    {this.props.createRouteItems(this.props.navGroups)}
                    <div style={{visibility: (this.props.parentState.drawerOpen ? '' : 'hidden')}}>
                        {this.props.content}
                    </div>
                </div>
            </>
        );
    }
}

DrawerFooter.propTypes = {
    content: PropTypes.element,
    backgroundColor: PropTypes.string,
    navGroups: PropTypes.arrayOf(PropTypes.object),
};

const styles = theme => ({
    root: {
        width: '100%',
        flex: '1 1 0px',
        position: 'absolute',
        bottom: 0,
    }
});

export default withStyles(styles)(DrawerFooter);
