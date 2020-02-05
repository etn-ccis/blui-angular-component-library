import {Avatar, AvatarProps, ClickAwayListener, Menu, MenuProps, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import clsx from 'clsx';
import React, {useState} from 'react';
import {DrawerHeader, DrawerNavGroup, NavItem} from '../Drawer';

const styles = makeStyles(() =>
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

const muiMenuStyles = makeStyles(() =>
    createStyles({
        paper: (props: UserMenuProps) => ({
            width: props.width,
        }),
    })
);

type UserMenuClasses = {
    pxbRoot?: string;
    pxbLabel?: string;
};

export type UserMenuItem = NavItem;
export type UserMenuGroup = {
    title?: string;
    items: UserMenuItem[];
};

export type UserMenuProps = {
    avatarProps?: AvatarProps;
    backgroundColor?: string;
    classes?: UserMenuClasses;
    menuTitle?: string;
    menuSubtitle?: string;
    menuGroups?: UserMenuGroup[];
    fontColor?: string;
    menuProps?: MenuProps;
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
        avatarProps = {} as AvatarProps,
        children,
        classes = {} as UserMenuClasses,
        menuTitle,
        menuSubtitle,
        menuGroups = [],
        menuProps = {} as MenuProps,
        onClose = (): void => {},
        onOpen = (): void => {},
        value,
    } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick: any = (event: MouseEvent) => {
        onOpen();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        onClose();
        setAnchorEl(null);
    };

    const hasMenu = (): boolean => Boolean(children || menuGroups.length > 0);

    const avatar = (
        <Avatar
            data-test={'pxb-user-menu-avatar'}
            {...avatarProps}
            onClick={handleClick}
            classes={Object.assign({ root: avatarClasses.root }, avatarProps.classes)}
        >
            {avatarProps.children ||
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
            const nonClickableAvatar = React.cloneElement(avatar, { onClick: undefined });
            return (
                <DrawerHeader
                    icon={nonClickableAvatar}
                    title={menuTitle}
                    subtitle={menuSubtitle}
                    fontColor={Colors.black[500]}
                    backgroundColor={Colors.white[50]}
                />
            );
        }
    };

    const printMenuItems = (): JSX.Element[] =>
        menuGroups.map((group: UserMenuGroup, index: number) =>
           <DrawerNavGroup divider={false} open={true} title={group.title} items={group.items} key={index} />);

    const printMenu = (): JSX.Element[] => [printHeader()].concat(printMenuItems());

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className={clsx(pxbClasses.pxbRoot, classes.pxbRoot)}>
                {avatar}
                {hasMenu() && (
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        keepMounted
                        {...menuProps}
                        classes={Object.assign({ paper: menuClasses.paper }, menuProps.classes)}
                    >
                        {children}
                        {!children && printMenu()}
                    </Menu>
                )}
            </div>
        </ClickAwayListener>
    );
};
