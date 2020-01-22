import React from 'react';
import { StyleRules } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { combine } from '../utilities';
import { withStyles, WithStyles } from '@material-ui/core/styles';

type ChannelValueProps = {
    value: number | string;
    icon?: JSX.Element;
    units?: string;
    prefix?: boolean;
    fontSize?: number | string;
    color?: string;
} & WithStyles;

class ChannelValue extends React.Component<ChannelValueProps> {
    public static defaultProps = {
        prefix: false,
        fontSize: 'inherit',
        color: 'inherit',
    };

    getUnitElement(): JSX.Element | null {
        const { classes, units } = this.props;

        if (!units) {
            return null;
        }

        return (
            <Typography variant={'h6'} color={'inherit'} className={combine([classes.text, classes.unit])}>
                {units}
            </Typography>
        );
    }

    changeIconDisplay(icon: JSX.Element): JSX.Element {
        return React.cloneElement(icon, {
            style: Object.assign({}, icon.props.style, { display: 'block', fontSize: 'inherit' }),
        });
    }

    render(): JSX.Element {
        const { classes, icon, value, prefix, fontSize, color } = this.props;

        return (
            <span className={classes.wrapper} style={{ fontSize: fontSize, color: color }}>
                {icon && <span className={classes.icon}>{this.changeIconDisplay(icon)}</span>}
                {prefix ? this.getUnitElement() : null}
                <Typography variant={'h6'} color={'inherit'} className={combine([classes.text, classes.value])}>
                    {value}
                </Typography>
                {!prefix ? this.getUnitElement() : null}
            </span>
        );
    }
}

const styles = (): StyleRules => ({
    wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1.2,
    },
    icon: {
        marginRight: 4,
        display: 'inline',
        fontSize: 'inherit',
    },
    text: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 0,
    },
    unit: {
        fontWeight: 300,
    },
    value: {
        fontWeight: 600,
    },
});

export default withStyles(styles)(ChannelValue);
