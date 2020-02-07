import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '../ChannelValue';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            fontSize: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: '1 1 0px',
            overflow: 'hidden',
            color: theme.palette.type === 'dark' ? Colors.gray[300] : Colors.gray[500],
            padding: '16px 8px',
        },
        icon: {
            lineHeight: 1,
            color: theme.palette.type === 'dark' ? Colors.gray[50] : Colors.gray[800],
            marginBottom: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        values: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.type === 'dark' ? Colors.gray[50] : Colors.gray[800],
            lineHeight: 1.2,
            maxWidth: '100%',
            overflow: 'hidden',
        },
        label: {
            fontSize: 'inherit',
            lineHeight: 1.2,
            letterSpacing: 0,
            fontWeight: 600,
            width: '100%',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
    })
);

const normalizeIconSize = (size: number): number => Math.max(10, Math.min(72, size));
const normalizeFontSize = (size: FontSize): string => (size === 'small' ? '1rem' : '1.25rem');

type FontSize = 'normal' | 'small';

export type HeroProps = {
    children?: React.ReactNode;
    fontSize?: FontSize;
    icon: string | JSX.Element;
    iconBackgroundColor?: string;
    iconSize?: number;
    label: string;
    onClick?: Function;
    value?: string | number;
    valueIcon?: JSX.Element;
    units?: string;
};

export const Hero = (props: HeroProps): JSX.Element => {
    const classes = useStyles(props);
    const {
        fontSize = 'normal',
        icon,
        iconBackgroundColor = 'transparent',
        iconSize = 36,
        label,
        onClick,
        value,
        valueIcon,
        units,
    } = props;

    return (
        <div
            style={{ cursor: onClick ? 'pointer' : 'default' }}
            className={classes.wrapper}
            onClick={onClick ? (): void => onClick() : undefined}
            data-test={'wrapper'}
        >
            <span
                className={classes.icon}
                style={{
                    fontSize: normalizeIconSize(iconSize),
                    height: Math.max(36, iconSize),
                    width: Math.max(36, iconSize),
                    backgroundColor: iconBackgroundColor,
                    borderRadius: '50%',
                }}
            >
                {icon}
            </span>
            <span className={classes.values} style={{ fontSize: normalizeFontSize(fontSize) }}>
                {!props.children && value && <ChannelValue value={value} units={units} icon={valueIcon} />}
                {props.children}
            </span>
            <Typography variant={'subtitle1'} color={'inherit'} className={classes.label}>
                {label}
            </Typography>
        </div>
    );
};
