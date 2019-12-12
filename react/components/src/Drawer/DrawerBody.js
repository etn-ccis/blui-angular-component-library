import React from 'react';
import {withStyles} from '@material-ui/core/styles';

class DrawerBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.body) {
            return <></>;
        }
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
            >
                {this.props.createRouteItems(this.props.body.navGroups)}
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        flex: '1 1 0px',
        width: '100%'
    }
});

export default withStyles(styles)(DrawerBody);
