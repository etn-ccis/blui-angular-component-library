import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Divider} from "@material-ui/core";
import PropTypes from "prop-types";

class DrawerSubheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { children, open } = this.props;
        return  (
            <>
                <div style={{visibility: (open ? 'inherit' : 'hidden')}}>
                    {children}
                </div>
                <Divider />
            </>
        );
    }
}

const styles = theme => ({

});

DrawerSubheader.propTypes = {
    open: PropTypes.bool
};

export default withStyles(styles)(DrawerSubheader);
