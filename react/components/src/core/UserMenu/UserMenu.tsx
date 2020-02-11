import { Menu, MenuProps as standardMenuProps, useTheme } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { DrawerHeader, DrawerNavGroup, NavItem } from '../Drawer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        navGroups: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        header: {
            '&:active, &:focus': {
                outline: 'none',
            },
        },
        avatarRoot: {
            cursor: 'pointer',
            //@ts-ignore
            backgroundColor: theme.palette.primary[50],
            //@ts-ignore
            color: theme.palette.primary[500],
            height: theme.spacing(5),
            width: theme.spacing(5),
        },
        noCursor: {
            cursor: 'unset',
        },
    })
);

type UserMenuClasses = {
    root?: string;
};

export type UserMenuItem = Omit<NavItem, 'active'>;
export type UserMenuGroup = {
    title?: string;
    fontColor?: string;
    iconColor?: string;
    items: UserMenuItem[];
};

export type UserMenuProps = {
    avatar: JSX.Element;
    classes?: UserMenuClasses;
    menu?: JSX.Element;
    menuTitle?: string;
    menuSubtitle?: string;
    menuGroups?: UserMenuGroup[];
    MenuProps?: Omit<standardMenuProps, 'open'>;
    onClose?: Function;
    onOpen?: Function;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const { avatar, menu, classes, menuTitle, menuSubtitle, menuGroups, MenuProps, onClose, onOpen } = props;
    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const [anchorEl, setAnchorEl] = useState(null);

    const canDisplayMenu = useCallback(() => Boolean(menu || menuGroups.length > 0), [menu, menuGroups]);

    const openMenu = useCallback(
        (event: MouseEvent) => {
            onOpen();
            setAnchorEl(event.currentTarget);
        },
        [onOpen]
    );

    const closeMenu = useCallback(() => {
        onClose();
        setAnchorEl(null);
    }, [onClose]);

    /* Clones Avatar that user provides UserMenu & appends a click event so it opens the menu. */
    const formatAvatar = useCallback(
        (preserveOnClick: boolean): JSX.Element => {
            /* If user passed in onClick function as a prop to Avatar, keep it. */
            const onClickFn = (event: MouseEvent): void => {
                openMenu(event);
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
                    root: clsx(
                        defaultClasses.avatarRoot,
                        preserveOnClick ? '' : defaultClasses.noCursor,
                        aProps?.classes?.root
                    ),
                },
            });
        },
        [avatar, onOpen]
    );

    /* DrawerHeader needs wrapped with key div to avoid ref warning on FC. */
    const printHeader = useCallback((): JSX.Element => {
        if (menuTitle) {
            const nonClickableAvatar = formatAvatar(false);
            return (
                <div className={defaultClasses.header} key={'header'}>
                    <DrawerHeader
                        icon={
                            /* TODO: Replace these inline styles with class overrides when the Drawer component supports it. */
                            <div style={{ marginLeft: -theme.spacing(1), marginRight: -theme.spacing(1) }}>
                                {nonClickableAvatar}
                            </div>
                        }
                        title={menuTitle}
                        subtitle={menuSubtitle}
                        fontColor={'inherit'}
                        backgroundColor={'inherit'}
                    />
                </div>
            );
        }
    }, [menuTitle, menuSubtitle, avatar]);

    /* DrawerNavGroup needs wrapped with key div to avoid ref warning on FC. */
    const printMenuItems = useCallback(
        (): JSX.Element[] =>
            menuGroups.map((group: UserMenuGroup, index: number) => (
                <div className={defaultClasses.navGroups} key={index}>
                    <DrawerNavGroup
                        divider={false}
                        open={true}
                        iconColor={group.iconColor}
                        fontColor={group.fontColor}
                        title={group.title}
                        items={group.items}
                        onSelect={closeMenu}
                    />
                </div>
            )),
        [menuGroups, defaultClasses]
    );

    const printMenu = (): JSX.Element[] => [printHeader()].concat(printMenuItems());

    const formatMenu = useCallback((): JSX.Element => {
        /* If the user provides a menu, provide default props. */
        if (menu) {
            return React.cloneElement(menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: closeMenu,
                ...menu.props,
            });
        }
        return (
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closeMenu}
                {...MenuProps}
                MenuListProps={{ style: { padding: 0 } }}
            >
                {printMenu()}
            </Menu>
        );
    }, [menu, anchorEl, closeMenu, MenuProps, printMenu]);

    return (
        <div className={clsx(defaultClasses.root, classes.root)}>
            {formatAvatar(true)}
            {canDisplayMenu() && formatMenu()}
        </div>
    );
};

UserMenu.propTypes = {
    avatar: PropTypes.element,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    menu: PropTypes.element,
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

UserMenu.defaultProps = {
    classes: {},
    menuGroups: [],
    MenuProps: {},
    onClose: (): void => {},
    onOpen: (): void => {},
};
