# DrawerLayout Component
The `DrawerLayout` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with  a PX Blue `Drawer`. It accepts two child nodes to render, the first being a `Drawer` and the second being the main page content.

### Usage
```
import { Drawer, DrawerLayout } from '@pxblue/react-components';
...
<DrawerLayout drawer={<Drawer ... />} >
    <>
        /* Page content goes here */
    </>
</DrawerLayout>
```
