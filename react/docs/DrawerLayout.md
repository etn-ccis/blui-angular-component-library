# DrawerLayout Component
The PX Blue `DrawerLayout` component is used to align a PX Blue `Drawer` component next to any custom content. 
It accepts two child nodes to render, the first being a `Drawer` and the second being the page content.

### Usage
```
import { DrawerLayout } from '@pxblue/react-components/core/DrawerLayout';

return  <DrawerLayout>
            <Drawer />
            <>
                /* Page content goes here */
            </>
        </DrawerLayout>
```
