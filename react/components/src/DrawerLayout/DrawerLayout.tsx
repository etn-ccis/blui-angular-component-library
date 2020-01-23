import React, { ReactNode } from 'react';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';

type DrawerLayoutProps = {
    children: React.ReactNode;
    drawer: ReactNode;
} & WithStyles;

const DrawerLayout: React.FC<DrawerLayoutProps> = (props) => {
    const { children, classes, drawer } = props;
    return (
        <div className={classes.root}>
            <div className={classes.drawer}>{drawer}</div>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const styles = (): StyleRules => ({
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
        overflowY: 'scroll',
    },
});

export default withStyles(styles)(DrawerLayout);
