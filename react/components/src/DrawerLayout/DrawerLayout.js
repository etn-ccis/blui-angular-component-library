import React from 'react';

import {withStyles} from '@material-ui/core/styles';

class DrawerLayout extends React.Component {

    constructor(props) {
        super(props);
    }

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
            height: '100vh',
            width: '100vw',
        },
        drawer: {
            display: 'flex',
            alignItems: 'stretch',
        },
        content: {
            width: '100%',
            height: '100%'
        }
    }
};

export default withStyles(styles, { withTheme: true })(DrawerLayout);
