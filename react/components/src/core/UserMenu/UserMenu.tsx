import {ClickAwayListener, Menu, MenuProps} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';
import React, {useState} from 'react';
import {DrawerHeader, DrawerNavGroup, NavItem} from '../Drawer';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        pxbRoot: {},
        pxbLabel: {
            width: '100%',
            textAlign: 'center',
        },
        root: (props: UserMenuProps) => ({
            cursor: 'pointer',
            //@ts-ignore
            backgroundColor: props.backgroundColor || theme.palette.primary[50],
            //@ts-ignore
            color: props.fontColor || theme.palette.primary[500],
            height: theme.spacing(5),
            width: theme.spacing(5),
        }),
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
    avatar: JSX.Element;
    backgroundColor?: string;
    classes?: UserMenuClasses;
    menuTitle?: string;
    menuSubtitle?: string;
    menuGroups?: UserMenuGroup[];
    fontColor?: string;
    menuProps?: Omit<MenuProps, 'open'>;
    onClose?: Function;
    onOpen?: Function;
    width?: number;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const pxbClasses = styles(props);
    const {
        avatar,
        children,
        classes = {} as UserMenuClasses,
        menuTitle,
        menuSubtitle,
        menuGroups = [],
        menuProps = {} as Omit<MenuProps, 'open'>,
        onClose = (): void => {},
        onOpen = (): void => {},
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

    const formatAvatar = (preserveOnClick: boolean ): JSX.Element => {
        /* If user passed in onClick function as a prop to Avatar, keep it. */
        const onClickFn = (event: MouseEvent): void => {
            handleClick(event);
            if (avatar.props && avatar.props.onClick) {
                avatar.props.onClick(event);
            }
        };

        return React.cloneElement(avatar, {
            onClick: preserveOnClick ? onClickFn : undefined,
            classes: { root: pxbClasses.root },
           ...avatar.props
        });
    };

    const printHeader = (): JSX.Element => {
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
    };

    const printMenuItems = (): JSX.Element[] =>
        menuGroups.map((group: UserMenuGroup, index: number) =>
           <DrawerNavGroup divider={false} open={true} title={group.title} items={group.items} key={index} />);

    const printMenu = (): JSX.Element[] => [printHeader()].concat(printMenuItems());

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className={clsx(pxbClasses.pxbRoot, classes.pxbRoot)}>
                {formatAvatar(true)}
                {hasMenu() && (
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        keepMounted
                        {...menuProps}
                        classes={Object.assign({ paper: pxbClasses.paper }, menuProps.classes)}
                    >
                        {children}
                        {!children && printMenu()}
                    </Menu>
                )}
            </div>
        </ClickAwayListener>
    );
};
