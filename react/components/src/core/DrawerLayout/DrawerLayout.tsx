import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export type DrawerLayoutProps = {
    children: React.ReactNode;
    drawer: ReactNode;
};

const useStyles = makeStyles({
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

export const DrawerLayout: React.FC<DrawerLayoutProps> = (props) => {
    const { children, drawer } = props;
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <div className={classes.drawer}>{drawer}</div>
            <div className={classes.content}>{children}</div>
        </div>
    );
};
