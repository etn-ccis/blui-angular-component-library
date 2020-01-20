import React from 'react';

import {withStyles} from '@material-ui/core/styles';

class DrawerLayout extends React.Component {

    render() {
        const { classes, children } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.drawer}>
                    {children[0]}
                </div>
                <div className={classes.content}>
                    {children[1]}
                </div>
            </div>
        );
    }
}

const styles = theme => {
    return {
        root: {
            display: 'flex',
            height: '100%',
            width: '100%',
        },
        drawer: {
            display: 'flex',
            alignItems: 'stretch',
        },
        content: {
            width: '100%',
            height: '100%',
            overflowY: 'scroll'
        }
    }
};

export default withStyles(styles)(DrawerLayout);
