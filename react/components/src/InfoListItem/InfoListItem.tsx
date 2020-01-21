import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';

import { StyleRules, Theme, WithStyles, withStyles, WithTheme } from '@material-ui/core/styles';
import Chevron from '@material-ui/icons/ChevronRight';
//@ts-ignore
import * as PXBColors from '@pxblue/colors';
//@ts-ignore
import color from 'color';

import { separate, withKeys } from '../utilities';

//Material-UI Components
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@material-ui/core';

const MAX_SUBTITLE_ELEMENTS = 6;

type DividerType = 'full' | 'partial';
type InfoListItemProps = {
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
} & WithStyles &
    WithTheme;

class InfoListItemClass extends React.Component<InfoListItemProps> {
    public static defaultProps = {
        subtitleSeparator: '\u00B7',
        hidePadding: false,
        dense: false,
        avatar: false,
        chevron: false,
    };

    render(): JSX.Element {
        const { classes, fontColor, leftComponent, onClick, statusColor, title, divider, dense } = this.props;
        return (
            <ListItem style={this.wrapperStyle()} onClick={onClick ? (): void => onClick() : undefined} dense={dense}>
                <div className={classes.statusStripe} style={{ backgroundColor: statusColor }} />
                {this.props.divider && (
                    <div className={classes.divider} style={{ zIndex: 0, left: divider === 'full' ? 0 : 72 }} />
                )}
                {(this.props.icon || !this.props.hidePadding) && this.icon()}
                {leftComponent}
                <ListItemText
                    style={leftComponent ? { marginLeft: 16 } : {}}
                    primary={title}
                    secondary={this.subtitle()}
                    primaryTypographyProps={{
                        noWrap: true,
                        variant: 'body1',
                        className: classes.title,
                        style: { color: fontColor || 'inherit' },
                    }}
                    secondaryTypographyProps={{ noWrap: true, variant: 'subtitle2', className: classes.subtitle }}
                />
                {this.rightComponent()}
            </ListItem>
        );
    }

    icon(): JSX.Element | undefined {
        const { avatar, hidePadding, icon, statusColor, theme } = this.props;
        if (icon && avatar) {
            return (
                <ListItemAvatar>
                    <Avatar
                        // @ts-ignore TODO: Fix me
                        style={{ backgroundColor: statusColor || theme.palette.primary[500], color: this.iconColor() }}
                    >
                        {icon}
                    </Avatar>
                </ListItemAvatar>
            );
        } else if (icon) {
            return <ListItemIcon style={{ color: this.iconColor() }}>{icon}</ListItemIcon>;
        } else if (!hidePadding) {
            return (
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: 'transparent' }} />
                </ListItemAvatar>
            );
        }
    }

    rightComponent(): JSX.Element | undefined {
        const { chevron, rightComponent } = this.props;
        if (rightComponent) {
            return <div style={{ flex: '0 0 auto', marginLeft: 16 }}>{rightComponent}</div>;
        } else if (chevron) {
            return (
                <ListItemSecondaryAction>
                    <Chevron color={'inherit'} />
                </ListItemSecondaryAction>
            );
        }
    }

    interpunct(): JSX.Element {
        const { classes, subtitleSeparator } = this.props;
        const { withSmallMargins } = classes;
        return (
            <Typography className={`${withSmallMargins} ${classes.separator}`}>
                {subtitleSeparator || '\u00B7'}
            </Typography>
        );
    }

    subtitle(): string | null {
        const { subtitle } = this.props;
        if (!subtitle) {
            return null;
        }
        if (typeof subtitle === 'string') {
            return subtitle;
        }

        const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
        const renderableSubtitleParts = subtitleParts.splice(0, MAX_SUBTITLE_ELEMENTS);

        return withKeys(separate(renderableSubtitleParts, () => this.interpunct()));
    }

    iconColor(): string {
        const { avatar, statusColor, iconColor, theme } = this.props;
        if (iconColor) return iconColor;
        if (avatar) {
            return statusColor
                ? color(statusColor).isDark()
                    ? PXBColors.white[50]
                    : PXBColors.black[500]
                : theme.palette.primary.contrastText;
        }
        return statusColor ? statusColor : 'inherit';
    }

    wrapperStyle(): CSSProperties {
        const { backgroundColor, dense, onClick, style } = this.props;
        return Object.assign(
            {
                backgroundColor: backgroundColor || 'transparent',
                cursor: onClick ? 'pointer' : 'default',
                height: dense ? 52 : 72,
            },
            style
        );
    }
}

const styles = (theme: Theme): StyleRules => ({
    divider: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 1,
        backgroundColor: theme.palette.type === 'light' ? PXBColors.black[50] : PXBColors.black[700],
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
});

export default withStyles(styles, { withTheme: true })(InfoListItemClass);
