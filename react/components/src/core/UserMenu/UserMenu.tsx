import { Avatar, AvatarProps, ClickAwayListener, Menu, MenuProps, StyleRules, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import React, { ReactNode, useState } from 'react';
import { DrawerHeader, DrawerNavGroup, NavItem } from '../Drawer';

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

export type UserMenuItem = NavItem;
export type UserMenuGroup = {
    title?: string;
    items: UserMenuItem[];
};

export type UserMenuProps = {
    AvatarProps?: AvatarProps;
    backgroundColor?: string;
    backgroundImage?: string;
    menuTitle?: string;
    menuSubtitle?: string;
    menuGroups?: UserMenuGroup[];
    fontColor?: string;
    MenuProps?: MenuProps;
    value?: string;
    classes?: StyleRules;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const classes = styles(props);
    const avatarClasses = muiAvatarStyles(props);
    const { AvatarProps = {}, children, menuTitle, menuSubtitle, menuGroups = [], MenuProps = {}, value } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick: any = (event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (): boolean => {
        return Boolean(children || menuGroups.length > 0);
    };

    const avatar = (
        <Avatar {...AvatarProps} classes={AvatarProps.classes || avatarClasses} onClick={handleClick} id={'avatar'}>
            {value && (
                <Typography className={classes.label} variant={'h4'} color={'inherit'}>
                    {value}
                </Typography>
            )}
        </Avatar>
    );

    const printHeader = (): JSX.Element => {
        console.log(menuTitle);
        if (menuTitle) {
            return <DrawerHeader icon={avatar} title={menuTitle} subtitle={menuSubtitle} />;
        }
    };

    /* Displays either custom child nodes, or Menu Items supplied by menuGroups prop. */
    const printMenuItems = (): ReactNode[] => {
        return (
            children ||
            menuGroups.map((group: UserMenuGroup) => {
                return <DrawerNavGroup open={true} title={group.title} items={group.items} />;
            })
        );
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div>
                {avatar}
                {/* Accepts either children MenuItems or menuItems array props. */}
                {renderMenu() && (
                    <Menu
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
                        {printHeader()}
                        {printMenuItems()}
                    </Menu>
                )}
            </div>
        </ClickAwayListener>
    );
};
