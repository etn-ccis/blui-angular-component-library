import * as Colors from '@pxblue/colors';
import { Typography } from '@material-ui/core';
import React from 'react';

export type ListItemTagProps = {
    /* The string label of the tag. */
    label: string;

    /* Color of the label. Default is white['50']. */
    fontColor?: string;

    /* Color of the label background. Default is theme primary main color*/
    backgroundColor?: string;

    /* event handler to be called when the user clicks on the tag.  */
    onClick?: () => void;

    /* Custom classes to be passed to the tag container. Overwrite the default classes. */
    classes?: {
        label?: string;
        root?: string;
    };
};

export const ListItemTag: React.FC<ListItemTagProps> = (props: ListItemTagProps): JSX.Element => {
    const { classes, label, fontColor, backgroundColor, onClick } = props;

    return (
        <Typography
            classes={classes}
            style={{
                color: fontColor || Colors.white['50'],
                backgroundColor: backgroundColor || Colors.blue['500'],
                cursor: onClick ? 'pointer' : 'default',
                fontWeight: 'bold',
                letterSpacing: 1,
                borderRadius: 2,
                padding: '0 4px',
            }}
            variant={'overline'}
            noWrap
            display={'inline'}
            data-test={'list-item-tag'}
            onClick={(): void => {
                if (onClick) {
                    onClick();
                }
                return;
            }}
        >
            {label}
        </Typography>
    );
};
