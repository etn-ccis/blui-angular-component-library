import React, { useCallback } from 'react';
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

const ChannelValue: React.FC<ChannelValueProps> = (props) => {
    const { classes, icon, value, units, prefix = false, fontSize = 'inherit', color = 'inherit' } = props;

    const getUnitElement = useCallback(
        (): JSX.Element => (
            <>
                {units && (
                    <Typography variant={'h6'} color={'inherit'} className={combine([classes.text, classes.unit])}>
                        {units}
                    </Typography>
                )}
            </>
        ),
        [units, classes, combine]
    );

    const changeIconDisplay = (newIcon: JSX.Element): JSX.Element =>
        React.cloneElement(newIcon, {
            style: Object.assign({}, newIcon.props.style, { display: 'block', fontSize: 'inherit' }),
        });

    return (
        <span className={classes.wrapper} style={{ fontSize: fontSize, color: color }}>
            {icon && <span className={classes.icon}>{changeIconDisplay(icon)}</span>}
            {prefix && getUnitElement()}
            <Typography variant={'h6'} color={'inherit'} className={combine([classes.text, classes.value])}>
                {value}
            </Typography>
            {!prefix && getUnitElement()}
        </span>
    );
};

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
