import React, {ReactNode} from 'react';
import {Divider} from "@material-ui/core";

type DrawerSubheaderProps = {
   open?: boolean;
   children?: ReactNode;
};

export const DrawerSubheader: React.FC<DrawerSubheaderProps> = (props) => (
         <>
             <div style={{visibility: (open ? 'inherit' : 'hidden')}}>
                {/* eslint-disable-next-line react/prop-types */}
                 {props.children}
             </div>
             <Divider />
         </>
     );

DrawerSubheader.displayName = 'DrawerSubheader';
