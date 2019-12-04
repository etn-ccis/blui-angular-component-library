import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Divider } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { withStyles } from '@material-ui/core/styles';

class ScoreCardClass extends React.Component {
    render() {
        // TODO: make sure we have all of the API properties covered
        // TODO: PropTypes documentation
        // TODO: Documentation (including updated components)
        // TODO: Unit Tests and Storybook Stories
        // TODO: Responsiveness?
        // TODO: Hero update for icon background

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
                    <div style={{ flex: '1 1 0px' }}>
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
        const { headerTitle, headerSubtitle, headerInfo, classes } = this.props;
        return (<div className={classes.flexColumn} style={{ flex: '1 1 0px' }}>
            {/* TODO: Line limits and overflow fix */}
            <Typography variant={'h6'} style={{ color: this.fontColor(), fontWeight: 600, fontSize: '1.125rem' }}>{headerTitle}</Typography>
            {headerSubtitle &&
                <Typography variant={'body2'} style={{ color: this.fontColor(), lineHeight: 1.4 }}>{headerSubtitle}</Typography>
            }
            {headerInfo &&
                <Typography variant={'body2'} style={{ color: this.fontColor(), fontWeight: 300 }}>{headerInfo}</Typography>
            }
        </div>);
    }
    actionItems() {
        const { actionItems, classes } = this.props;

        if (actionItems) {
            return actionItems.slice(0, 2).map((actionItem, index) => (
                <div key={`$index}`} className={classes.actionItem}>
                    {actionItem}
                </div>
            ))
        }
    }
    heroes() {
        const { badge, badgeOffset = 0 } = this.props;
        if (badge) {
            return (
                <div style={{ flex: '0 0 auto', alignSelf: badgeOffset !== 0 ? 'flex-start' : 'center', marginTop: badgeOffset, marginRight: 16, marginLeft: 16 }}>
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
        const { headerFontColor, theme } = this.props;
        return headerFontColor || Colors.white[50];
    }
}

ScoreCardClass.propTypes = {

};
ScoreCardClass.defaultProps = {

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
    actionItem: {
        marginLeft: theme.spacing(1.5),
        cursor: 'pointer',
    },
})
export default withStyles(styles, { withTheme: true })(ScoreCardClass);