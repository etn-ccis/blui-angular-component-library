import React from 'react';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

type HeroBannerProps = {
    divider?: boolean;
    limit?: number;
} & WithStyles;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeroBanner = (props: HeroBannerProps & any): JSX.Element => {
    const { classes, divider = false, limit = 4 } = props;

    const isArray = Array.isArray(props.children);

    return (
        <React.Fragment>
            <div className={classes.banner} style={props.style}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {props.children && isArray && props.children.slice(0, limit).map((child: any) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </div>
            {divider && <Divider />}
        </React.Fragment>
    );
};

const styles = (): StyleRules => ({
    banner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default withStyles(styles)(HeroBanner);
