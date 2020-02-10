import { ClickAwayListener, Menu, MenuProps as standardMenuProps, useTheme } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { DrawerHeader, DrawerNavGroup, NavItem } from '../Drawer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        avatarRoot: {
            cursor: 'pointer',
            //@ts-ignore
            backgroundColor: theme.palette.primary[50],
            //@ts-ignore
            color: theme.palette.primary[500],
            height: theme.spacing(5),
            width: theme.spacing(5),
        },
    })
);

type UserMenuClasses = {
    root?: string;
};

export type UserMenuItem = Omit<NavItem, 'active' | 'active'>;
export type UserMenuGroup = {
    title?: string;
    fontColor?: string;
    iconColor?: string;
    items: UserMenuItem[];
};

export type UserMenuProps = {
    avatar: JSX.Element;
    backgroundColor?: string;
    classes?: UserMenuClasses;
    menuTitle?: string;
    menuSubtitle?: string;
    menuGroups?: UserMenuGroup[];
    MenuProps?: Omit<standardMenuProps, 'open'>;
    onClose?: Function;
    onOpen?: Function;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const {
        avatar,
        children,
        classes = {} as UserMenuClasses,
        menuTitle,
        menuSubtitle,
        menuGroups = [],
        MenuProps = {} as Omit<standardMenuProps, 'open'>,
        onClose = (): void => {},
        onOpen = (): void => {},
    } = props;

    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = useCallback(
        (event: MouseEvent) => {
            onOpen();
            setAnchorEl(event.currentTarget);
        },
        [onOpen]
    );

    const handleClose = useCallback(() => {
        onClose();
        setAnchorEl(null);
    }, [onClose]);

    const hasMenu = useCallback(() => Boolean(children || menuGroups.length > 0), [children, menuGroups]);

    /* Clones Avatar that user passes to UserMenu, appends a click event so it opens the menu. */
    const formatAvatar = useCallback(
        (preserveOnClick: boolean): JSX.Element => {
            /* If user passed in onClick function as a prop to Avatar, keep it. */
            const onClickFn = (event: MouseEvent): void => {
                handleOpen(event);
                if (avatar.props && avatar.props.onClick) {
                    avatar.props.onClick(event);
                }
            };

            const aProps = avatar.props || {};

            return React.cloneElement(avatar, {
                onClick: preserveOnClick ? onClickFn : undefined,
                ...aProps,
                classes: {
                    ...aProps.classes,
                    root: clsx(defaultClasses.avatarRoot, aProps?.classes?.root),
                },
            });
        },
        [avatar, onOpen]
    );

    const printHeader = useCallback((): JSX.Element => {
        if (menuTitle) {
            const nonClickableAvatar = formatAvatar(false);
            return (
                <DrawerHeader
                    icon={nonClickableAvatar}
                    title={menuTitle}
                    subtitle={menuSubtitle}
                    fontColor={'inherit'}
                    backgroundColor={'inherit'}
                />
            );
        }
    }, [menuTitle, menuSubtitle, avatar]);

    const printMenuItems = useCallback(
        (): JSX.Element[] =>
            menuGroups.map((group: UserMenuGroup, index: number) => (
                <DrawerNavGroup
                    divider={false}
                    open={true}
                    iconColor={group.iconColor}
                    fontColor={group.fontColor}
                    title={group.title}
                    items={group.items}
                    key={index}
                />
            )),
        [menuGroups]
    );

    const printMenu = (): JSX.Element[] => [printHeader()].concat(printMenuItems());

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className={clsx(defaultClasses.root, classes.root)}>
                {formatAvatar(true)}
                {hasMenu() && (
                    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} keepMounted {...MenuProps}>
                        {children}
                        {!children && printMenu()}
                    </Menu>
                )}
            </div>
        </ClickAwayListener>
    );
};

UserMenu.propTypes = {
    avatar: PropTypes.element,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    menuTitle: PropTypes.string,
    menuSubtitle: PropTypes.string,
    // @ts-ignore
    menuGroups: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            fontColor: PropTypes.string,
            iconColor: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    icon: PropTypes.element,
                    onClick: PropTypes.func,
                    statusColor: PropTypes.string,
                    subtitle: PropTypes.string,
                    title: PropTypes.string,
                    divider: PropTypes.bool,
                })
            ),
        })
    ),
    MenuProps: PropTypes.object,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
};
