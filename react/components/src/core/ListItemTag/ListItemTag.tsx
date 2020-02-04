import * as Colors from '@pxblue/colors'
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';
import clsx from 'clsx';

export type ListItemTagProps = {

    /* The string label of the tag. */
    label: string,

    /* Color of the label. Default is white['50']. */
    fontColor?: string,

    /* Color of the label background. Default is theme primary main color*/
    backgroundColor?: string,

    /* event handler to be called when the user clicks on the tag.  */
    onClick?: () => void,

    /* Custom classes to be passed to the tag container. Overwrite the default classes. */
    classes?: {
        label?: string,
        root?: string
    },
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            color: Colors.white['50'],
            fontWeight: 'bold',
            letterSpacing: 1,
            // textTransform: 'uppercase',
        },
        root: {
            display: 'inline-block',
            borderWidth: 1,
            borderRadius: 2,
            padding: '0 4px',
            backgroundColor: theme.palette.primary.main
        },
    })
);

export const ListItemTag: React.FC<ListItemTagProps> = (props: ListItemTagProps): JSX.Element => {

    const { classes:userClasses={}, label, fontColor, backgroundColor, onClick } = props;

    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    return (
        <div 
            className={clsx(defaultClasses.root, userClasses.root)}
            style={{backgroundColor: backgroundColor, cursor: onClick ? 'pointer' : 'default'}} 
            onClick={(): void => {onClick ? onClick(): null;}}
            data-test={'tag-root'}
            >
            <Typography 
                className={clsx(defaultClasses.label, userClasses.label)} 
                style={{color: fontColor}}
                variant={'caption'}
                noWrap
                data-test={'tag-label'}
            >
                {label}
            </Typography>
        </div>
    );
}