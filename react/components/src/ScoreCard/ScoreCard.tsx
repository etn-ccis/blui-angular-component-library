import { CSSProperties } from '@material-ui/styles';
import React from 'react';
import { Card, Typography, Divider, StyleRules, WithStyles, WithTheme, Theme } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { withStyles } from '@material-ui/core/styles';

type ScoreCordProps = {
    actionItems?: JSX.Element[];
    actionLimit?: number;
    actionRow?: JSX.Element;
    badge?: JSX.Element;
    badgeOffset?: number;
    headerBackgroundImage?: string;
    headerColor?: string;
    headerFontColor?: string;
    headerInfo?: string | JSX.Element;
    headerTitle: string;
    headerSubtitle?: string | JSX.Element;
    style?: CSSProperties;
} & WithStyles &
    WithTheme;

const ScoreCard: React.FC<ScoreCordProps> = (props) => {
    const {
        actionLimit = 3,
        actionItems,
        actionRow,
        badge,
        badgeOffset,
        headerBackgroundImage,
        children,
        classes,
        headerColor,
        headerFontColor,
        headerInfo,
        headerTitle,
        headerSubtitle,
        style,
    } = props;

    const fontColor = (): string => headerFontColor || Colors.white[50];

    const getBackgroundImage = (): JSX.Element | undefined => {
        if (headerBackgroundImage) {
            return (
                <div
                    className={classes.headerBackground}
                    style={{ backgroundImage: `url(${headerBackgroundImage})` }}
                />
            );
        }
    };

    const getHeaderInfo = (): JSX.Element | undefined => {
        if (!headerInfo) return;
        if (typeof headerInfo === 'string') {
            return (
                <Typography noWrap variant={'body2'} style={{ color: fontColor(), fontWeight: 300 }}>
                    {headerInfo}
                </Typography>
            );
        }
        return headerInfo;
    };

    const getHeaderSubtitle = (): JSX.Element | undefined => {
        if (!headerSubtitle) return;
        if (typeof headerSubtitle === 'string') {
            return (
                <Typography noWrap variant={'body2'} style={{ color: fontColor(), lineHeight: 1.4 }}>
                    {headerSubtitle}
                </Typography>
            );
        }
        return headerSubtitle;
    };

    const getHeaderText = (): JSX.Element => (
        <div className={classes.flexColumn} style={{ flex: '1 1 0px', overflow: 'hidden' }}>
            <Typography
                variant={'h6'}
                noWrap
                className={classes.title}
                style={headerFontColor ? { color: headerFontColor } : {}}
            >
                {headerTitle}
            </Typography>
            {getHeaderSubtitle()}
            {getHeaderInfo()}
        </div>
    );

    const getActionItems = (): JSX.Element[] | undefined => {
        if (actionItems) {
            return actionItems.slice(0, actionLimit).map((actionItem, index) => (
                <div key={`${index}`} className={classes.actionItem}>
                    {actionItem}
                </div>
            ));
        }
    };

    const getHeroes = (): JSX.Element | undefined => {
        if (badge) {
            return (
                <div
                    className={classes.badgeWrapper}
                    style={{
                        alignSelf: badgeOffset !== 0 ? 'flex-start' : 'center',
                        marginTop: badgeOffset,
                    }}
                >
                    {badge}
                </div>
            );
        }
    };

    const getFooter = (): JSX.Element | undefined => {
        if (actionRow) {
            return (
                <>
                    <Divider />
                    {actionRow}
                </>
            );
        }
    };

    return (
        <Card className={classes.card} style={style}>
            <div
                className={classes.header}
                style={Object.assign({ color: fontColor() }, headerColor ? { backgroundColor: headerColor } : {})}
            >
                {getBackgroundImage()}
                <div className={classes.headerContent}>
                    {getHeaderText()}
                    {getActionItems()}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.bodyWrapper}>{children}</div>
                {getHeroes()}
            </div>
            {getFooter()}
        </Card>
    );
};

const styles = (theme: Theme): StyleRules => ({
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
        // TODO: FIX ME!
        //@ts-ignore
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
    title: {
        color: Colors.white[50], // this.fontColor(),
        fontWeight: 600,
        fontSize: '1.125rem',
    },
});
export default withStyles(styles, { withTheme: true })(ScoreCard);
