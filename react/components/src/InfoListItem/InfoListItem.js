import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Chevron from '@material-ui/icons/ChevronRight';
import * as PXBColors from '@pxblue/colors'
import color from 'color';


//Material-UI Components
import Typography from '@material-ui/core/Typography';
import { ListItemText } from '@material-ui/core';

class InfoListItem extends React.Component {
    render() {
        const { classes, onClick, statusColor } = this.props;
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
                        primary={'Hello'} 
                        secondary={'World'}
                        primaryTypographyProps={{variant: 'body1', style: {fontWeight: 600}}}
                        secondaryTypographyProps={{variant: 'subtitle1', style: {fontWeight: 400}}}
                    />
                </div>
                {this.rightComponent()}
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
        const { onClick, theme, rightComponent } = this.props;
        if (rightComponent) {
            return rightComponent;
        }
        else if (onClick) {
            return (
                <Chevron color={'inherit'} />
            );
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
    // avatarStyle() {
    //     const { statusColor, theme } = this.props;
    //     return {
    //         width: 40,
    //         height: 40,
    //         borderRadius: 20,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         backgroundColor: statusColor || theme.palette.primary[500]
    //     }
    // }
    wrapperStyle() {
        const { backgroundColor, dense, onClick } = this.props;
        return {
            backgroundColor: backgroundColor || 'transparent',
            cursor: onClick ? 'pointer' : 'default',
            height: dense ? 52 : 72
        }
    }
}

InfoListItem.propTypes = {
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
    subtitle: PropTypes.string,
    subtitleSeparator: PropTypes.string,
    title: PropTypes.string.isRequired
};
InfoListItem.defaultProps = {};

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
    wrapper: {
        width: '100%',
        display: 'flex',
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
    }
})

export default withStyles(styles, { withTheme: true })(InfoListItem);
