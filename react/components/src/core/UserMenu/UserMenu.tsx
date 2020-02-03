import {Typography} from "@material-ui/core";
import React from 'react';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
const styles = makeStyles((theme: Theme) => createStyles({
    wrapper: {
        display: 'flex',
        borderRadius: '50%',
        width: theme.spacing(6),
        height: theme.spacing(6),
        padding: theme.spacing(2)
    },
    initials: {
        width: '100%',
        textAlign: 'center'
    }
}));

export type UserMenuProps = {
    backgroundColor?: string;
    backgroundImage?: string;
    fontColor?: string;
    fontSize?: string;
    open: boolean;
    value?: string;
    onClick: Function;
};

export const UserMenu: React.FC<UserMenuProps> = (props) => {
    const classes = styles(props);
    const theme = useTheme();
    const {
        backgroundColor = Colors.blue[50],
        backgroundImage,
        fontColor = Colors.blue[500],
        value,
    } = props;
    return (
       <div style={{ backgroundColor, color: fontColor, backgroundImage }} className={classes.wrapper}>
           <Typography className={classes.initials} variant={'h4'} color={'inherit'}>{value}</Typography>
       </div>
    );
};
