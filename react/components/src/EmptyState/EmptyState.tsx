import React from 'react';
import { makeStyles, StyleRules } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import Typography from '@material-ui/core/Typography';

export type EmptyStateProps = {
    title?: string;
    description?: string;
    icon?: JSX.Element;
    actions?: JSX.Element;
    iconStyles?: StyleRules;
};

const useStyles = makeStyles({
    frame: {
        height: '100%',
        color: Colors.gray[500],
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
    },
});

export const EmptyState: React.FC<EmptyStateProps> = (props) => {
    const { icon, title, description, actions, iconStyles } = props;
    const classes = useStyles(props);
    return (
        <div className={classes.frame} data-test={'frame'}>
            {icon && (
                <div style={Object.assign({ marginBottom: '15px', display: 'flex', fontSize: '100px' }, iconStyles)}>
                    {icon}
                </div>
            )}
            <Typography variant="h6" color="inherit">
                {title}
            </Typography>
            {description && (
                <Typography variant="subtitle2" color="primary">
                    {description}
                </Typography>
            )}
            {actions && <div style={{ marginTop: '10px' }}>{actions}</div>}
        </div>
    );
};
