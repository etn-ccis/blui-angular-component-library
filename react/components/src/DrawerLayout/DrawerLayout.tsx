import React from 'react';

import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';

type DrawerLayoutProps = {
   children: React.ReactNode;
} & WithStyles;

class DrawerLayout extends React.Component<DrawerLayoutProps> {
    private getChild(index: number): JSX.Element {
       const { children } = this.props;
       // @ts-ignore
       return (children && children[index]) ? children[index] : <></>;
    }

    render(): JSX.Element {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.drawer}>{this.getChild(0)}</div>
                <div className={classes.content}>{this.getChild(1)}</div>
            </div>
        );
    }
}

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
        },
    });

export default withStyles(styles)(DrawerLayout);
