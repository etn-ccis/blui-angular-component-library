import React from 'react';

import { StyleRules, Theme, WithStyles, withStyles, WithTheme } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

type DrawerComponentProps = {
    open: boolean;
    width?: number;
} & WithStyles &
    WithTheme;

type DrawerComponentState = {
    backdropClicked: boolean;
    hover: boolean;
};

class DrawerComponent extends React.Component<DrawerComponentProps, DrawerComponentState> {
    hoverDelay: any;

    constructor(props: DrawerComponentProps) {
        super(props);
        this.state = {
            hover: false,
            backdropClicked: false,
        };
    }

    componentDidUpdate(nextProps: DrawerComponentProps): void {
        const { open } = this.props;
        if (nextProps.open !== open) {
            this.setState({
                backdropClicked: false,
            });
        }
    }

    isDrawerOpen(): boolean {
        return (this.state.hover || this.props.open) && !this.state.backdropClicked;
    }

    handleDrawerClose(): void {
        this.setState({
            backdropClicked: true,
        });
    }

    findChildByType(type: string): any[] {
        return (
            React.Children.map(this.props.children, (child: any) => {
                if (child && child.type) {
                    const name = child.type.displayName;
                    if (name && name.includes(type)) {
                        return child;
                    }
                }
            }) || []
        );
    }

    getHeader(): JSX.Element[] {
        return this.findChildByType('DrawerHeader')
            .slice(0, 1)
            .map((child) => React.cloneElement(child));
    }

    getSubHeader(): JSX.Element[] {
        return this.findChildByType('DrawerSubheader')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { open: this.isDrawerOpen() }));
    }

    getBody(): JSX.Element[] {
        return this.findChildByType('DrawerBody')
            .slice(0, 1)
            .map((child) =>
                React.cloneElement(child, {
                    open: this.isDrawerOpen(),
                    onSelect: () => {
                        this.setState({ hover: false });
                    },
                })
            );
    }

    getFooter(): JSX.Element[] {
        return this.findChildByType('DrawerFooter')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { open: this.isDrawerOpen() }));
    }

    getMobileNavigationMenu(): JSX.Element {
        const { classes } = this.props;
        return (
            <Drawer {...this.props} open={this.isDrawerOpen()} classes={{ paper: classes.drawer }}>
                <div className={`${classes.smooth} ${classes.content}`} style={{ width: '100%' }}>
                    {this.getDrawerContents()}
                </div>
            </Drawer>
        );
    }

    getDesktopNavigationMenu(): JSX.Element {
        const { classes, theme } = this.props;
        const containerWidth = this.isDrawerOpen() ? this.props.width || theme.spacing(45) : theme.spacing(7);
        const contentWidth = this.props.width || theme.spacing(45);
        return (
            <>
                <Drawer
                    {...this.props}
                    variant="permanent"
                    open={this.isDrawerOpen()}
                    classes={{ paper: classes.paper }}
                    style={{ minHeight: '100%' }}
                >
                    <div className={classes.smooth} style={{ width: containerWidth }}>
                        <div className={classes.content} style={{ width: contentWidth }}>
                            {this.getDrawerContents()}
                        </div>
                    </div>
                </Drawer>
            </>
        );
    }

    getDrawerContents(): JSX.Element {
        return (
            <>
                {this.getHeader()}
                <div
                    style={{ flexDirection: 'column', flex: '1 1 0px', display: 'flex' }}
                    onMouseEnter={(): void => {
                        this.hoverDelay = setTimeout(() => this.setState({ hover: true }), 500);
                    }}
                    onMouseLeave={(): void => {
                        clearTimeout(this.hoverDelay);
                        this.setState({ hover: false });
                    }}
                >
                    {this.getSubHeader()}
                    {this.getBody()}
                    {this.getFooter()}
                </div>
            </>
        );
    }

    render(): JSX.Element {
        return (
            <>
                <Hidden smUp>{this.getMobileNavigationMenu()}</Hidden>

                <Hidden xsDown>{this.getDesktopNavigationMenu()}</Hidden>
            </>
        );
    }
}

const styles = (theme: Theme): StyleRules => {
    return {
        paper: {
            overflow: 'hidden',
            position: 'unset',
        },
        drawer: {
            maxWidth: '85%',
            width: theme.spacing(45),
        },
        smooth: {
            height: '100%',
            transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
    };
};

export default withStyles(styles, { withTheme: true })(DrawerComponent);
