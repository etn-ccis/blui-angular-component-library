import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export type DrawerFooterProps = {
    backgroundColor?: string;
    open?: boolean;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
    const classes = useStyles(props);
    const { children, backgroundColor, open } = props;
    return (
        <div
            className={classes.root}
            style={{
                visibility: open ? 'inherit' : 'hidden',
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

DrawerFooter.displayName = 'DrawerFooter';
