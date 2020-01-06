import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Divider} from "@material-ui/core";

class DrawerSubheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <>
                {this.props.children}
                <Divider />
            </>
        );
    }
}

const styles = theme => ({

});

export default withStyles(styles)(DrawerSubheader);
