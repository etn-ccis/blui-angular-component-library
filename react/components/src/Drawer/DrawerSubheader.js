import React from 'react';
import {withStyles} from '@material-ui/core/styles';

class DrawerSubheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.subheader) {
            return <></>;
        }
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
                style={
                    {
                        visibility: (this.props.parentState.drawerOpen ? '' : 'hidden')
                    }}>
                {this.props.subheader.content}
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        flex: '1 1 0px',
        paddingLeft: '40px',
        paddingRight: '10px',
    }
});

export default withStyles(styles)(DrawerSubheader);
