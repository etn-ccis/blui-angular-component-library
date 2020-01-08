import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import * as PXBColors from "@pxblue/colors";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {InfoListItem} from "../index";

class DrawerBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }

    render() {
        const { classes, theme } = this.props;
        const defaultBackgroundColor = PXBColors.white[50]; // TODO, dark theme compatible
        return (
            <div
                className={classes.root}
                style={{
                    backgroundColor: this.props.backgroundColor || defaultBackgroundColor
                }}
            >
                {this.createRouteItems()}
            </div>
        );
    }

    createRouteItems() {
        const { classes, navGroups, open } = this.props;
        if (!navGroups) {
            return <></>;
        }
        return navGroups.map((navGroup, index) => (
            <>
                <List
                    style={{'paddingBottom': '0'}}
                    className={navGroup.bottom ? classes.bottom : ''}
                    subheader={
                        <ListSubheader
                            className={classes.subheader}
                            style={{
                                position: 'unset',
                                color: open ? '' : 'transparent',
                            }}
                        >
                            {navGroup.title &&
                            <Typography noWrap
                                        variant={'subtitle2'}
                                        className={classes.navGroupTextHeader}>
                                {navGroup.title}
                            </Typography>}
                            {navGroup.content}
                        </ListSubheader>
                    }
                >
                    {(navGroup.title || navGroup.content) && <Divider />}
                    {navGroup.links.map((link, index) => (
                        <>
                            {this.NavigationListItem({
                                title: link.title,
                                subtitle: link.subtitle,
                                icon: link.icon,
                                status: link.status,
                                onClick: link.onClick
                            })}
                        </>
                    ))}
                </List>
                <Divider />
            </>
        ));
    }


    NavigationListItem({ title, subtitle, icon, index, status, onClick }) {
        if (!title && !icon) {
            return <></>
        }

        const { classes, theme, selectedColor, iconColor, fontColor } = this.props;
        const selected = this.state.selected === title;
        const defaultSelectedBackgroundColor = theme.palette.secondary[50];
        const action = () => {
            this.props.onSelect();
            this.setState({ selected: title });
            onClick();
        };
        return (
            <div style={{position: 'relative'}} className={classes.listItem}>
                {selected &&
                <div className={classes.selected}
                     style={{backgroundColor: selectedColor || defaultSelectedBackgroundColor}} />}
                <InfoListItem dense
                              title={title}
                              subtitle={subtitle}
                              divider={'full'}
                              statusColor={status}
                              fontColor={fontColor}
                              icon={icon}
                              iconColor={iconColor}
                              backgroundColor={'transparent'}
                              onClick={() => action()}
                />
            </div>
        );
    }
}

const styles = theme => ({
    root: {
    },
    navGroupTextHeader: {
        width: '95%',
        display: 'block',
        alignItems: 'center',
        lineHeight: '3rem',
        height: theme.spacing(6),
    },
    subheader: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        cursor: 'text',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    listItem: {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }
    },
    selected: {
        content: '""',
        zIndex: 0,
        position: 'absolute',
        height: '100%',
        width: 'calc(100% - 8px)',
        left: 0,
        top: 0,
        backgroundColor: theme.palette.primary['50'],
        borderRadius: '0px 24px 24px 0px',
        opacity: .9,
        '&hover': {
            opacity: 1,
        }
    },
    bottom: {
        // TODO: put this group at the bottom of the body
    }
});

DrawerBody.propTypes = {
    open: PropTypes.boolean,
    onSelect: PropTypes.func,

    navGroups: PropTypes.arrayOf(PropTypes.object),
    backgroundColor: PropTypes.string,
    selectedColor: PropTypes.string,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
    titleColor: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(DrawerBody);
