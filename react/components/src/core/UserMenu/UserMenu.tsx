import {
    Avatar,
    AvatarProps,
    ClickAwayListener, ListItemIcon, ListItemText,
    Menu,
    MenuItem,
    MenuProps,
    Typography,
    withStyles
} from '@material-ui/core';
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            width: '100%',
            textAlign: 'center',
        },
    })
);

const muiAvatarStyles = makeStyles((theme: Theme) => ({
    root: (props: UserMenuProps) => ({
        backgroundColor: props.backgroundColor || Colors.blue[50],
        color: props.fontColor || Colors.blue[500],
        height: theme.spacing(6),
        width: theme.spacing(6),
    }),
    colorDefault: {},
    circle: {},
    rounded: {},
    square: {},
    img: {},
    fallback: {},
}));

export type UserMenuItems = {
    title: string;
    icon: JSX.Element;
}

export type UserMenuProps = {
    AvatarProps?: AvatarProps;
    backgroundColor?: string;
    backgroundImage?: string;
    menuItems?: UserMenuItems[];
    fontColor?: string;
    fontSize?: string;
    MenuProps?: MenuProps;
    value?: string;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const classes = styles(props);
    const avatarClasses = muiAvatarStyles(props);
    const { AvatarProps = {}, children,
        menuItems = [], MenuProps = {}, value } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick: any = (event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const StyledMenuItem = withStyles(theme => ({
        root: {
            '&:focus': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: theme.palette.common.white,
                },
            },
        },
    }))(MenuItem);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (): boolean => {
        return Boolean(children || menuItems.length > 0);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div>
                <Avatar
                    {...AvatarProps}
                    classes={AvatarProps.classes || avatarClasses}
                    onClick={handleClick}
                    id={'avatar'}
                >
                    {value && (
                        <Typography className={classes.label} variant={'h4'} color={'inherit'}>
                            {value}
                        </Typography>
                    )}
                </Avatar>
                {/* Accepts either children MenuItems or menuItems array props. */}
                {renderMenu() && <Menu
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    keepMounted
                    {...MenuProps}
                >
                    {children}
                    {menuItems.forEach((item, index) => (
                       <StyledMenuItem>
                           <ListItemIcon>
                               {item.icon}
                           </ListItemIcon>
                           <ListItemText primary="{item.text}" />
                       </StyledMenuItem>
                   ))}
                </Menu>}
            </div>
        </ClickAwayListener>
    );
};
