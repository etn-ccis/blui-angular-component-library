import React from 'react';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';

type DrawerFooterProps = {
    backgroundColor?: string;
    open?: boolean;
} & WithStyles;

const DrawerFooterContent: React.FC<DrawerFooterProps> = (props) => {
    const { classes, children, backgroundColor, open } = props;
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

const styles = (): StyleRules => ({
    root: {
        width: '100%',
    },
});

export const DrawerFooter = withStyles(styles)(DrawerFooterContent);
DrawerFooter.displayName = 'DrawerFooter';
