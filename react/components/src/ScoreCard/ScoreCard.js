import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Divider } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { withStyles } from '@material-ui/core/styles';

class ScoreCardClass extends React.Component {
    render() {
        const { classes, style, headerColor } = this.props;
        return (
            <Card className={classes.card} style={style}>
                <div className={classes.header} style={Object.assign({ color: this.fontColor() }, headerColor ? { backgroundColor: headerColor } : {})}>
                    {this.backgroundImage()}
                    <div className={classes.headerContent}>
                        {this.headerText()}
                        {this.actionItems()}
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.bodyWrapper}>
                        {this.props.children}
                    </div>
                    {this.heroes()}
                </div>
                {this.footer()}
            </Card>
        )
    }
    backgroundImage() {
        const { headerBackgroundImage, classes } = this.props;
        if (headerBackgroundImage) {
            return (
                <div className={classes.headerBackground} style={{ backgroundImage: `url(${headerBackgroundImage})` }} />
            );
        }
    }

    headerText() {
        const { headerTitle, classes } = this.props;
        return (
            <div className={classes.flexColumn} style={{ flex: '1 1 0px', overflow: 'hidden' }}>
                <Typography variant={'h6'} noWrap className={classes.title} style={this.props.fontColor ? { color: this.props.fontColor } : {}}>{headerTitle}</Typography>
                {this.getHeaderSubtitle()}
                {this.getHeaderInfo()}
            </div>
        );
    }
    getHeaderSubtitle() {
        const { headerSubtitle } = this.props;
        if(headerSubtitle && typeof headerSubtitle === 'string'){
            return <Typography noWrap variant={'body2'} style={{ color: this.fontColor(), lineHeight: 1.4 }}>{headerSubtitle}</Typography>;
        }
        else if(headerSubtitle){
            return headerSubtitle;
        }
        return null;

    }
    getHeaderInfo() {
        const { headerInfo } = this.props;
        if(headerInfo && typeof headerInfo === 'string'){
            return <Typography noWrap variant={'body2'} style={{ color: this.fontColor(), fontWeight: 300 }}>{headerInfo}</Typography>;
        }
        else if(headerInfo){
            return headerInfo;
        }
        return null;

    }
    actionItems() {
        const { actionItems, classes, actionLimit } = this.props;

        if (actionItems) {
            return actionItems.slice(0, actionLimit).map((actionItem, index) => (
                <div key={`${index}`} className={classes.actionItem}>
                    {actionItem}
                </div>
            ))
        }
    }
    heroes() {
        const { badge, classes, badgeOffset = 0 } = this.props;
        if (badge) {
            return (
                <div className={classes.badgeWrapper} style={{
                    alignSelf: badgeOffset !== 0 ? 'flex-start' : 'center',
                    marginTop: badgeOffset
                }}>
                    {badge}
                </div>
            );
        }
    }
    footer() {
        const { actionRow } = this.props;

        if (actionRow) {
            return (
                <>
                    <Divider />
                    {actionRow}
                </>
            );
        }
    }
    fontColor() {
        const { headerFontColor } = this.props;
        return headerFontColor || Colors.white[50];
    }
}

ScoreCardClass.propTypes = {
    actionItems: PropTypes.arrayOf(PropTypes.element),
    actionLimit: PropTypes.number,
    actionRow: PropTypes.element,
    badge: PropTypes.element,
    badgeOffset: PropTypes.number,
    headerBackgroundImage: PropTypes.string,
    headerColor: PropTypes.string,
    headerFontColor: PropTypes.string,
    headerInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headerSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headerTitle: PropTypes.string.isRequired,
};
ScoreCardClass.defaultProps = {
    actionLimit: 3,
};

const styles = theme => ({
    card: {
        flex: '1 1 0px',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    header: {
        height: 100,
        overflow: 'hidden',
        backgroundColor: theme.palette.primary[500],
        position: 'relative',
    },
    headerContent: {
        display: 'flex',
        position: 'relative',
        zIndex: 1,
        alignItems: 'flex-start',
        padding: theme.spacing(2),
    },
    headerBackground: {
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        opacity: 0.3,
        backgroundPosition: 'center',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    bodyWrapper: {
        flex: '1 1 0px',
    },
    badgeWrapper: {
        flex: '0 0 auto',
        marginRight: 16,
        marginLeft: 16,
    },
    actionItem: {
        marginLeft: theme.spacing(1.5),
        cursor: 'pointer',
    },
    title:{
        color: Colors.white[50],// this.fontColor(), 
        fontWeight: 600, 
        fontSize: '1.125rem'
    }
})
export default withStyles(styles, { withTheme: true })(ScoreCardClass);