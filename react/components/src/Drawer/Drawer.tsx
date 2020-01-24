import React, { useState } from 'react';
import { StyleRules, Theme, WithStyles, withStyles, WithTheme } from '@material-ui/core/styles';
import { Drawer, DrawerProps } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

type DrawerComponentProps = {
    open: boolean;
    width?: number;
} & WithStyles &
    WithTheme &
    Omit<DrawerProps, 'translate'>;

const DrawerComponent: React.FC<DrawerComponentProps> = (props) => {
    let hoverDelay: any;
    const [hover, setHover] = useState(false);

    const isDrawerOpen = (): boolean => hover || props.open;

    const findChildByType = (type: string): JSX.Element[] =>
        React.Children.map(props.children, (child: any) => {
            if (child && child.type) {
                const name = child.type.displayName;
                if (name && name.includes(type)) {
                    return child;
                }
            }
        }) || [];

    const getHeader = (): JSX.Element[] =>
        findChildByType('DrawerHeader')
            .slice(0, 1)
            .map((child) => React.cloneElement(child));

    const getSubHeader = (): JSX.Element[] =>
        findChildByType('DrawerSubheader')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { open: isDrawerOpen() }));

    const getBody = (): JSX.Element[] =>
        findChildByType('DrawerBody')
            .slice(0, 1)
            .map((child) =>
                React.cloneElement(child, {
                    open: isDrawerOpen(),
                    onSelect: () => {
                        setHover(false);
                    },
                })
            );

    const getFooter = (): JSX.Element[] =>
        findChildByType('DrawerFooter')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { open: isDrawerOpen() }));

    const getDrawerContents = (): JSX.Element => (
        <>
            {getHeader()}
            <div
                style={{ flexDirection: 'column', flex: '1 1 0px', display: 'flex' }}
                onMouseEnter={(): void => {
                    hoverDelay = setTimeout(() => setHover(true), 500);
                }}
                onMouseLeave={(): void => {
                    clearTimeout(hoverDelay);
                    setHover(false);
                }}
            >
                {getSubHeader()}
                {getBody()}
                {getFooter()}
            </div>
        </>
    );

    const getMobileNavigationMenu = (): JSX.Element => {
        const { classes } = props;
        return (
            <Drawer {...props} open={isDrawerOpen()} classes={{ paper: classes.drawer }}>
                <div className={`${classes.smooth} ${classes.content}`} style={{ width: '100%' }}>
                    {getDrawerContents()}
                </div>
            </Drawer>
        );
    };

    const getDesktopNavigationMenu = (): JSX.Element => {
        const { classes, theme } = props;
        const containerWidth = isDrawerOpen() ? props.width || theme.spacing(45) : theme.spacing(7);
        const contentWidth = props.width || theme.spacing(45);
        return (
            <>
                <Drawer
                    {...props}
                    variant="permanent"
                    open={isDrawerOpen()}
                    classes={{ paper: classes.paper }}
                    style={{ minHeight: '100%' }}
                >
                    <div className={classes.smooth} style={{ width: containerWidth }}>
                        <div className={classes.content} style={{ width: contentWidth }}>
                            {getDrawerContents()}
                        </div>
                    </div>
                </Drawer>
            </>
        );
    };

    return (
        <>
            <Hidden smUp>{getMobileNavigationMenu()}</Hidden>
            <Hidden xsDown>{getDesktopNavigationMenu()}</Hidden>
        </>
    );
};

const styles = (theme: Theme): StyleRules => ({
    paper: {
        overflow: 'hidden',
        position: 'unset',
    },
    drawer: {
        maxWidth: '85%',
        width: theme.spacing(45),
    },
    smooth: {
        height: '100%',
        transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
});

export default withStyles(styles, { withTheme: true })(DrawerComponent);
