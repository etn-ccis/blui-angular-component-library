import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    banner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export type HeroBannerProps = {
    divider?: boolean;
    limit?: number;
};

export const HeroBanner = (props: HeroBannerProps & any): JSX.Element => {
    const { divider = false, limit = 4 } = props;
    const classes = useStyles(props);
    const isArray = Array.isArray(props.children);

    return (
        <React.Fragment>
            <div className={classes.banner} style={props.style}>
                {props.children && isArray && props.children.slice(0, limit).map((child: any) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </div>
            {divider && <Divider />}
        </React.Fragment>
    );
};
