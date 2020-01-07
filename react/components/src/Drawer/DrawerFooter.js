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
                    {this.props.createRouteItems(this.props)}
                    <div style={{visibility: (this.props.open ? '' : 'hidden')}}>
                        {this.props.content}
                    </div>
                </div>
            </>
        );
    }
}

DrawerFooter.propTypes = {
    open: PropTypes.bool,
    content: PropTypes.element,
    backgroundColor: PropTypes.string,
    navGroups: PropTypes.arrayOf(PropTypes.object),
};

DrawerFooter.defaultProps = {
    overrides: {},
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
