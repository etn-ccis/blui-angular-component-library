import { Avatar, AvatarProps, ClickAwayListener, Menu, MenuProps, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import * as Colors from '@pxblue/colors';
import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { DrawerHeader, DrawerNavGroup, NavItem } from '../Drawer';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        pxbRoot: {},
        pxbLabel: {
            width: '100%',
            textAlign: 'center',
        },
    })
);

const muiAvatarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: (props: UserMenuProps) => ({
            cursor: 'pointer',
            //@ts-ignore
            backgroundColor: props.backgroundColor || theme.palette.primary[50],
            //@ts-ignore
            color: props.fontColor || theme.palette.primary[500],
            height: theme.spacing(5),
            width: theme.spacing(5),
        }),
    })
);

const muiMenuStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: (props: UserMenuProps) => ({
            width: props.width,
        }),
    })
);

type UserMenuClasses = ClassNameMap<'pxbRoot' | 'pxbLabel'>;
export type UserMenuItem = NavItem;
export type UserMenuGroup = {
    title?: string;
    items: UserMenuItem[];
};

export type UserMenuProps = {
    AvatarProps?: AvatarProps;
    backgroundColor?: string;
    classes?: UserMenuClasses;
    menuTitle?: string;
    menuSubtitle?: string;
    menuGroups?: UserMenuGroup[];
    fontColor?: string;
    MenuProps?: MenuProps;
    onClose?: Function;
    onOpen?: Function;
    value?: string;
    width?: number;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const avatarClasses = muiAvatarStyles(props);
    const menuClasses = muiMenuStyles(props);
    const pxbClasses = styles(props);
    const {
        AvatarProps = {},
        children,
        classes = {} as UserMenuClasses,
        menuTitle,
        menuSubtitle,
        menuGroups = [],
        MenuProps = {},
        onClose = () => {},
        onOpen = () => {},
        value,
    } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick: any = (event: MouseEvent) => {
        onOpen();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        onClose();
        setAnchorEl(null);
    };

    const hasMenu = (): boolean => {
        return Boolean(children || menuGroups.length > 0);
    };

    const avatar = (
        <Avatar
            classes={
                AvatarProps.classes || {
                    root: avatarClasses.root,
                }
            }
            onClick={handleClick}
            data-test={'pxb-user-menu-avatar'}
            {...AvatarProps}
        >
            {AvatarProps.children ||
                (value && (
                    <Typography
                        className={clsx(pxbClasses.pxbLabel, classes.pxbLabel)}
                        variant={'h5'}
                        color={'inherit'}
                    >
                        {value}
                    </Typography>
                ))}
        </Avatar>
    );

    const printHeader = (): JSX.Element => {
        if (menuTitle) {
            return (
                <DrawerHeader
                    icon={avatar}
                    title={menuTitle}
                    subtitle={menuSubtitle}
                    fontColor={Colors.black[500]}
                    backgroundColor={Colors.white[50]}
                />
            );
        }
    };

    const printMenuItems = (): ReactNode[] =>
        menuGroups.map((group: UserMenuGroup) => {
            return <DrawerNavGroup divider={false} open={true} title={group.title} items={group.items} />;
        });

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className={clsx(pxbClasses.pxbRoot, classes.pxbRoot)}>
                {avatar}
                {hasMenu() && (
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        keepMounted
                        {...MenuProps}
                        classes={{ paper: menuClasses.paper }}
                    >
                        {children}
                        {!children && (
                            <>
                                {printHeader()}
                                {printMenuItems()}
                            </>
                        )}
                    </Menu>
                )}
            </div>
        </ClickAwayListener>
    );
};
