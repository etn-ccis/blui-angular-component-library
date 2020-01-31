import React from 'react';
import { Divider } from '@material-ui/core';

export type DrawerSubheaderProps = {
    open?: boolean;
};

export const DrawerSubheader: React.FC<DrawerSubheaderProps> = (props) => (
    <>
        <div style={{ visibility: props.open ? 'inherit' : 'hidden' }}>{props.children}</div>
        <Divider />
    </>
);

DrawerSubheader.displayName = 'DrawerSubheader';
