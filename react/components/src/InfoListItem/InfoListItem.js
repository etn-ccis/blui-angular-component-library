import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Chevron from '@material-ui/icons/ChevronRight';
import * as PXBColors from '@pxblue/colors'
import color from 'color';

import { separate, withKeys } from '../utilities';

//Material-UI Components
import { ListItemText } from '@material-ui/core';

const MAX_SUBTITLE_ELEMENTS = 6;

class InfoListItemClass extends React.Component {
    render() {
        const { classes, fontColor, onClick, statusColor, title, divider } = this.props;
        return (
            <div className={classes.wrapper} onClick={onClick ? () => onClick() : null} style={this.wrapperStyle()}>
                <div className={classes.statusStripe} style={{ backgroundColor: statusColor }}></div>
                {(this.props.icon || !this.props.hidePadding) &&
                    <div className={classes.iconContainer}>
                        {this.icon()}
                    </div>
                }
                <div className={classes.contentContainer}>
                    <ListItemText
                        primary={title}
                        secondary={this.subtitle()}
                        primaryTypographyProps={{ variant: 'body1', style: { fontWeight: 600, lineHeight: 0.9, color: fontColor || 'inherit' } }}
                        secondaryTypographyProps={{ variant: 'subtitle2', style: { fontWeight: 400, lineHeight: 1 } }}
                    />
                </div>
                {this.rightComponent()}
                {this.props.divider && 
                    <div className={classes.divider} style={{left: divider === 'full' ? 0 : 72}}/>
                }
            </div>
        )
    }
    icon() {
        const { avatar, classes, icon, statusColor, theme } = this.props;
        if (icon) {
            return (
                <div className={avatar ? classes.avatar : ''}
                    style={{
                        color: this.iconColor(),
                        backgroundColor: avatar ? statusColor || theme.palette.primary[500] : 'transparent'
                    }}
                >
                    {icon}
                </div>
            );
        }
    }
    rightComponent() {
        const { onClick, rightComponent } = this.props;
        if (rightComponent) {
            return rightComponent;
        }
        else if (onClick) {
            return (
                <Chevron color={'inherit'} />
            );
        }
    }

    interpunct() {
        const { classes, subtitleSeparator } = this.props;
        const { withSmallMargins } = classes;
        return (<span className={withSmallMargins}>{subtitleSeparator || '\u00B7'}</span>);
    }
    subtitle() {
        const { subtitle } = this.props;
        if (!subtitle) {
            return null;
        }
        const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
        const renderableSubtitleParts = subtitleParts
            .splice(0, MAX_SUBTITLE_ELEMENTS)
            .map(element => this.renderableSubtitleComponent(element));
        return withKeys(separate(renderableSubtitleParts, this.interpunct));
    }
    renderableSubtitleComponent(element) {
        switch (typeof element) {
            case 'string':
            case 'number':
                return (<span>{`${element}`}</span>);
            default:
                return element;
        }
    }
    iconColor() {
        const { avatar, statusColor, iconColor, theme } = this.props;
        if (iconColor) return iconColor;
        if (avatar) {
            return statusColor ? (color(statusColor).isDark() ? PXBColors.white[50] : PXBColors.black[500]) : theme.palette.primary.contrastText;
        }
        return statusColor ? statusColor : 'inherit';
    }
    wrapperStyle() {
        const { backgroundColor, dense, onClick } = this.props;
        return {
            backgroundColor: backgroundColor || 'transparent',
            cursor: onClick ? 'pointer' : 'default',
            height: dense ? 52 : 72
        }
    }
}

InfoListItemClass.propTypes = {
    avatar: PropTypes.bool,
    backgroundColor: PropTypes.string,
    dense: PropTypes.bool,
    divider: PropTypes.oneOf(['full', 'partial']),
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    iconColor: PropTypes.string,
    onClick: PropTypes.func,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    subtitleSeparator: PropTypes.string,
    title: PropTypes.string.isRequired
};
InfoListItemClass.defaultProps = {
    subtitleSeparator: '\u00B7',
    hidePadding: false,
    dense: false,
    avatar: false
};

const styles = theme => ({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: '1 1 0px',
        padding: '0 16px'
    },
    divider:{
        position: 'absolute', 
        bottom: 0, 
        right: 0, 
        height: 1, 
        backgroundColor: theme.palette.type === 'light' ? PXBColors.black[50] : PXBColors.black[700]
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16
    },
    statusStripe: {
        width: 6,
        height: '100%'
    },
    iconContainer: {
        marginLeft: 10,
        width: 40,
        height: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    withSmallMargins: {
        margin: `0 4px`
    }
})

export default withStyles(styles, { withTheme: true })(InfoListItemClass);
