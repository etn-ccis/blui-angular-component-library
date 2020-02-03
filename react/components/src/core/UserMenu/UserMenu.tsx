import {Avatar, AvatarProps, Menu, Typography} from "@material-ui/core";
import React, {useState} from 'react';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import {NavItem} from "../Drawer";

const styles = makeStyles((theme: Theme) => createStyles({
    label: {
        width: '100%',
        textAlign: 'center'
    }
}));

const muiAvatarStyles = makeStyles((theme: Theme) => ({
    root: (props: UserMenuProps) => ({
        backgroundColor: props.backgroundColor || Colors.blue[50],
        color: props.fontColor || Colors.blue[500],
        height: theme.spacing(6),
        width: theme.spacing(6)
    }),
    colorDefault: {

    },
    circle: {

    },
    rounded: {

    },
    square: {

    },
    img: {

    },
    fallback: {

    },
}));

export type UserMenuProps = {
    AvatarProps?: AvatarProps,
    backgroundColor?: string;
    backgroundImage?: string;
    fontColor?: string;
    fontSize?: string;
    value?: string;
    content?: NavItem[]
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const classes = styles(props);
    const avatarClasses = muiAvatarStyles(props);
    const {
        AvatarProps = {},
        value,
       children
    } = props;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick: any = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
       <>
           <Avatar {...AvatarProps}
                   classes={AvatarProps.classes || avatarClasses}
                   onClick={handleClick}
                   id={'avatar'}
           >
               {value &&
               <Typography className={classes.label} variant={'h4'} color={'inherit'}>{value}</Typography>}
           </Avatar>
           <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} keepMounted>
               {children}
           </Menu>
       </>
    );
};
