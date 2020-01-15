import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {InfoListItem} from "../index";

class DrawerNavGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, open, items } = this.props;
        return (
            <>
            <List
                style={{
                    'paddingBottom': '0',
                    backgroundColor: this.props.backgroundColor}}
                subheader={
                    <ListSubheader
                        className={classes.subheader}
                        style={{
                            position: 'unset',
                            color: open ? this.props.titleColor : 'transparent',
                        }}
                    >
                        {this.props.title &&
                        <Typography noWrap
                                    variant={'subtitle2'}
                                    className={classes.navGroupTextHeader}>
                            {this.props.title}
                        </Typography>}
                        {this.props.content}
                    </ListSubheader>
                }
            >
                <div key={this.props.title+'_title'}>
                    {(this.props.title || this.props.content) && <Divider />}
                </div>
                {items.map((item, index) => (
                    <div key={this.props.title + '_item_' + index}>
                        {this.NavigationListItem({
                            title: item.title,
                            subtitle: item.subtitle,
                            icon: item.icon,
                            statusColor: item.statusColor,
                            onClick: item.onClick,
                            active: item.active,
                        })}
                    </div>
                ))}
            </List>
            <Divider />
            </>
        );
    }

    NavigationListItem({ title, subtitle, icon, statusColor, onClick, active }) {
        if (!title && !icon) {
            return <></>
        }

        const { classes, theme, iconColor, fontColor, chevron, activeFontColor, activeIconColor, activeBackgroundColor } = this.props;
        const defaultSelectedBackgroundColor = theme.palette.secondary[50];
        const action = () => {
            this.props.onSelect();
            onClick();
        };

        return (
            <div style={{position: 'relative'}} className={classes.listItem + ' ' + (active && classes.listItemNoHover)}>
                {active &&
                <div className={classes.active}
                     style={{backgroundColor: activeBackgroundColor || defaultSelectedBackgroundColor}} />}
                <InfoListItem dense
                              title={title}
                              subtitle={subtitle}
                              divider={'full'}
                              statusColor={statusColor}
                              fontColor={active ? activeFontColor : fontColor}
                              icon={icon}
                              iconColor={active ? activeIconColor : iconColor}
                              chevron={chevron}
                              backgroundColor={'transparent'}
                              onClick={() => action()}
                />
            </div>
        );
    }
}

const styles = theme => ({
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
    listItemNoHover: {
        '&:hover': {
            backgroundColor: 'unset',
        }
    },
    active: {
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
    }
});

DrawerNavGroup.propTypes = {
    open: PropTypes.bool,
    onSelect: PropTypes.func,

    content: PropTypes.element,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        icon: PropTypes.element,
        statusColor: PropTypes.string,
        active: PropTypes.bool,
        onClick: PropTypes.func
    })),
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    activeFontColor: PropTypes.string,
    activeBackgroundColor: PropTypes.string,
    activeIconColor: PropTypes.string,
    iconColor: PropTypes.string,
    titleColor: PropTypes.string,
    chevron: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(DrawerNavGroup);
