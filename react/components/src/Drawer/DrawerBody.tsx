import React from 'react';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';

type DrawerBodyProps = {
    activeBackgroundColor?: string;
    activeFontColor?: string;
    activeIconColor?: string;
    backgroundColor?: string;
    chevron?: boolean;
    fontColor?: string;
    iconColor?: string;
    onSelect?: Function;
    open?: boolean;
    titleColor?: string;
} & WithStyles;

const DrawerBodyContent: React.FC<DrawerBodyProps> = (props) => {
    const { backgroundColor } = props;
    const children = React.Children.toArray(props.children);
    return (
        <div className={props.classes.root} style={{ backgroundColor }}>
            {children.map((child: any) => {
                if (!child) {
                    return null;
                }

                const isNavGroup = child.type && child.type.displayName === 'DrawerNavGroup';
                const groupProps = child.props;
                return React.cloneElement(
                    child,
                    isNavGroup
                        ? {
                              activeBackgroundColor: groupProps.activeBackgroundColor || props.activeBackgroundColor,
                              activeFontColor: groupProps.activeFontColor || props.activeFontColor,
                              activeIconColor: groupProps.activeIconColor || props.activeIconColor,
                              backgroundColor: groupProps.backgroundColor || props.backgroundColor,
                              chevron: groupProps.chevron === undefined ? props.chevron : groupProps.chevron,
                              fontColor: groupProps.fontColor || props.fontColor,
                              iconColor: groupProps.iconColor || props.iconColor,
                              onSelect: props.onSelect,
                              open: props.open,
                              titleColor: groupProps.titleColor || props.titleColor,
                          }
                        : {}
                );
            })}
        </div>
    );
};

const styles = (): StyleRules => ({
    root: {
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        overflowY: 'auto',
    },
});

export const DrawerBody = withStyles(styles)(DrawerBodyContent);
DrawerBody.displayName = 'DrawerBody';
DrawerBody.defaultProps = {
    backgroundColor: Colors.white[50], // TODO, dark theme compatible
};
