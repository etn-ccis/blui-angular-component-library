import { CSSProperties } from '@material-ui/styles';
import React from 'react';
import { Card, Typography, Divider, StyleRules, WithStyles, WithTheme, Theme } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { withStyles } from '@material-ui/core/styles';

type ScoreCordProps = {
    headerTitle: string;
    headerSubtitle?: string;
    headerInfo?: string;
    headerColor?: string;
    headerFontColor?: string;
    headerBackgroundImage?: string;
    actionItems?: JSX.Element[];
    badge?: JSX.Element;
    badgeOffset?: number;
    actionRow?: JSX.Element;
    actionLimit?: number;
    style?: CSSProperties;
} & WithStyles &
    WithTheme;

class ScoreCardClass extends React.Component<ScoreCordProps> {
    public static defaultProps = {
        actionLimit: 3,
    };

    render(): JSX.Element {
        const { classes, style, headerColor } = this.props;
        return (
            <Card className={classes.card} style={style}>
                <div
                    className={classes.header}
                    style={Object.assign(
                        { color: this.fontColor() },
                        headerColor ? { backgroundColor: headerColor } : {}
                    )}
                >
                    {this.backgroundImage()}
                    <div className={classes.headerContent}>
                        {this.headerText()}
                        {this.actionItems()}
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.bodyWrapper}>{this.props.children}</div>
                    {this.heroes()}
                </div>
                {this.footer()}
            </Card>
        );
    }

    backgroundImage(): JSX.Element | undefined {
        const { headerBackgroundImage, classes } = this.props;
        if (headerBackgroundImage) {
            return (
                <div
                    className={classes.headerBackground}
                    style={{ backgroundImage: `url(${headerBackgroundImage})` }}
                />
            );
        }
    }

    headerText(): JSX.Element {
        const { headerTitle, headerSubtitle, headerInfo, classes } = this.props;
        return (
            <div className={classes.flexColumn} style={{ flex: '1 1 0px', overflow: 'hidden' }}>
                <Typography
                    variant={'h6'}
                    noWrap
                    style={{ color: this.fontColor(), fontWeight: 600, fontSize: '1.125rem' }}
                >
                    {headerTitle}
                </Typography>
                {headerSubtitle && (
                    <Typography noWrap variant={'body2'} style={{ color: this.fontColor(), lineHeight: 1.4 }}>
                        {headerSubtitle}
                    </Typography>
                )}
                {headerInfo && (
                    <Typography noWrap variant={'body2'} style={{ color: this.fontColor(), fontWeight: 300 }}>
                        {headerInfo}
                    </Typography>
                )}
            </div>
        );
    }

    actionItems(): JSX.Element[] | undefined {
        const { actionItems, classes, actionLimit } = this.props;

        if (actionItems) {
            return actionItems.slice(0, actionLimit).map((actionItem, index) => (
                <div key={`${index}`} className={classes.actionItem}>
                    {actionItem}
                </div>
            ));
        }
    }

    heroes(): JSX.Element | undefined {
        const { badge, classes, badgeOffset = 0 } = this.props;
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
    }

    footer(): JSX.Element | undefined {
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

    fontColor(): string {
        const { headerFontColor } = this.props;
        return headerFontColor || Colors.white[50];
    }
}

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
});
export default withStyles(styles, { withTheme: true })(ScoreCardClass);
