import React, { ReactNode, useEffect } from 'react';

import { StyleRules, Theme, WithStyles, withStyles, WithTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import * as Colors from '@pxblue/colors';
import { Typography } from '@material-ui/core';

type DrawerHeaderProps = {
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOpacity?: number;
    fontColor?: string;
    icon?: ReactNode;
    onIconClick?: Function;
    subtitle?: string;
    title?: string;
    titleContent?: ReactNode;
} & WithStyles &
    WithTheme;

const DrawerHeaderContent: React.FC<DrawerHeaderProps> = (props) => {
    const {
        classes,
        icon,
        theme,
        backgroundColor,
        fontColor,
        onIconClick,
        titleContent,
        title,
        subtitle,
        backgroundImage,
        backgroundOpacity,
    } = props;

    const toolbarFontColor = fontColor || Colors.white[50]; // TODO: Dark Theme
    // @ts-ignore // TODO: Pallete type definition?
    const toolbarBackgroundColor = String(backgroundColor || theme.palette.primary[500]);

    const clickIcon = (): void => {
        if (onIconClick) {
            onIconClick();
        }
    };

    const getHeaderContent = (): ReactNode =>
        titleContent || (
            <div className={classes.content}>
                <Typography noWrap variant={'h6'} className={classes.title}>
                    {title}
                </Typography>

                {subtitle && (
                    <Typography noWrap variant={'subtitle1'} className={classes.subtitle}>
                        {subtitle}
                    </Typography>
                )}
            </div>
        );

    const getBackgroundImage = (): ReactNode => (
        <>
            {backgroundImage && (
                <div
                    className={classes.headerBackground}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        opacity: backgroundOpacity,
                    }}
                />
            )}
        </>
    );

    return (
        <>
            <Toolbar
                className={classes.root}
                style={{ color: toolbarFontColor, backgroundColor: toolbarBackgroundColor }}
            >
                {getBackgroundImage()}
                {icon && (
                    <div className={classes.navigation}>
                        <IconButton color={'inherit'} onClick={() => clickIcon()}>
                            {icon}
                        </IconButton>
                    </div>
                )}
                {getHeaderContent()}
            </Toolbar>
            <Divider />
        </>
    );
};

const styles = (theme: Theme): StyleRules => ({
    root: {
        paddingRight: 0,
        paddingLeft: 0,
        width: '100%',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
    },
    content: {
        [theme.breakpoints.down('xs')]: {
            minHeight: theme.spacing(7),
        },
        marginLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        minHeight: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',
        width: 'calc(90% - 56px)',
        boxSizing: 'border-box',
    },
    navigation: {
        [theme.breakpoints.down('xs')]: {
            height: theme.spacing(7),
        },
        padding: theme.spacing(0.5),
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontWeight: 600,
        lineHeight: '1.25rem',
    },
    subtitle: {
        fontWeight: 300,
        lineHeight: '1.2rem', // Anything lower than 1.2rem cuts off bottom text of 'g' or 'y'.
        marginTop: '-2px',
    },
    headerBackground: {
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        backgroundPosition: 'center',
    },
});

export const DrawerHeader = withStyles(styles, { withTheme: true })(DrawerHeaderContent);
DrawerHeader.displayName = 'DrawerHeader';
DrawerHeader.defaultProps = {
    onIconClick: (): void => {},
    backgroundOpacity: 0.3,
};
