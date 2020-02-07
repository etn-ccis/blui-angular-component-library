import React from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Chevron from '@material-ui/icons/ChevronRight';
import * as Colors from '@pxblue/colors';
//@ts-ignore
import color from 'color';

import { separate, withKeys } from '../utilities';

//Material-UI Components
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        divider: {
            position: 'absolute',
            bottom: 0,
            right: 0,
        },
        statusStripe: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            zIndex: 100,
        },
        withSmallMargins: {
            margin: `0 4px`,
        },
        title: {
            fontWeight: 600,
            lineHeight: 1.2,
            display: 'block',
        },
        subtitle: {
            fontWeight: 400,
            lineHeight: 1.3,
        },
        separator: {
            display: 'inline-block',
            lineHeight: 1.3,
            color: 'inherit',
        },
    })
);

const MAX_SUBTITLE_ELEMENTS = 6;

export type DividerType = 'full' | 'partial';
export type InfoListItemProps = {
    avatar?: boolean;
    backgroundColor?: string;
    chevron?: boolean;
    dense?: boolean;
    divider?: DividerType;
    fontColor?: string;
    hidePadding?: boolean;
    icon?: JSX.Element;
    iconColor?: string;
    leftComponent?: JSX.Element;
    onClick?: Function;
    rightComponent?: JSX.Element;
    statusColor?: string;
    style?: CSSProperties;
    subtitle?: string | Array<string | JSX.Element>;
    subtitleSeparator?: string;
    title: string;
};

export const InfoListItem: React.FC<InfoListItemProps> = (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {
        avatar = false,
        backgroundColor,
        chevron = false,
        dense = false,
        divider,
        fontColor,
        hidePadding = false,
        icon,
        iconColor,
        leftComponent,
        onClick = (): void => {},
        rightComponent,
        statusColor,
        style,
        subtitle,
        subtitleSeparator = '\u00B7',
        title,
    } = props;

    const getIconColor = (): string => {
        if (iconColor) return iconColor;
        if (avatar) {
            return statusColor
                ? color(statusColor).isDark()
                    ? Colors.white[50]
                    : Colors.black[500]
                : Colors.white[50]; // default avatar is dark gray -> white text
        }
        return statusColor ? statusColor : 'inherit';
    };

    const getIcon = (): JSX.Element | undefined => {
        if (icon && avatar) {
            return (
                <ListItemAvatar>
                    <Avatar
                        style={{
                            // @ts-ignore TODO: Fix me
                            backgroundColor: statusColor || Colors.black[500],
                            color: getIconColor(),
                        }}
                    >
                        {icon}
                    </Avatar>
                </ListItemAvatar>
            );
        } else if (icon) {
            return <ListItemIcon style={{ color: getIconColor() }}>{icon}</ListItemIcon>;
        } else if (!hidePadding) {
            return (
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: 'transparent' }} />
                </ListItemAvatar>
            );
        }
    };

    const getRightComponent = (): JSX.Element | undefined => {
        if (rightComponent) {
            return <div style={{ flex: '0 0 auto', marginLeft: 16 }}>{rightComponent}</div>;
        } else if (chevron) {
            return (
                <ListItemSecondaryAction>
                    <Chevron color={'inherit'} />
                </ListItemSecondaryAction>
            );
        }
    };

    const interpunct = (): JSX.Element => (
        <Typography className={`${classes.withSmallMargins} ${classes.separator}`}>
            {subtitleSeparator || '\u00B7'}
        </Typography>
    );

    const getSubtitle = (): string | null => {
        if (!subtitle) {
            return null;
        }
        if (typeof subtitle === 'string') {
            return subtitle;
        }

        const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
        const renderableSubtitleParts = subtitleParts.splice(0, MAX_SUBTITLE_ELEMENTS);

        return withKeys(separate(renderableSubtitleParts, () => interpunct()));
    };

    const getWrapperStyle = (): CSSProperties =>
        Object.assign(
            {
                backgroundColor: backgroundColor || 'transparent',
                cursor: onClick ? 'pointer' : 'default',
                height: dense ? 52 : 72,
            },
            style
        );

    return (
        <ListItem style={getWrapperStyle()} onClick={(): void => onClick()} dense={dense}>
            <div className={classes.statusStripe} style={{ backgroundColor: statusColor }} />
            {divider && (
                <Divider className={classes.divider} style={{ zIndex: 0, left: divider === 'full' ? 0 : 72 }} />
            )}
            {(icon || !hidePadding) && getIcon()}
            {leftComponent}
            <ListItemText
                style={leftComponent ? { marginLeft: 16 } : {}}
                primary={title}
                secondary={getSubtitle()}
                primaryTypographyProps={{
                    noWrap: true,
                    variant: 'body1',
                    className: classes.title,
                    style: { color: fontColor || 'inherit' },
                }}
                secondaryTypographyProps={{ noWrap: true, variant: 'subtitle2', className: classes.subtitle }}
            />
            {getRightComponent()}
        </ListItem>
    );
};
InfoListItem.propTypes = {
    avatar: PropTypes.bool,
    backgroundColor: PropTypes.string,
    chevron: PropTypes.bool,
    dense: PropTypes.bool,
    divider: PropTypes.oneOf(['full', 'partial']),
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    iconColor: PropTypes.string,
    leftComponent: PropTypes.element,
    onClick: PropTypes.func,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
    ]),
    subtitleSeparator: PropTypes.string,
    title: PropTypes.string.isRequired,
};
InfoListItem.defaultProps = {
    avatar: false,
    chevron: false,
    dense: false,
    hidePadding: false,
    subtitleSeparator: '\u00B7',
};
