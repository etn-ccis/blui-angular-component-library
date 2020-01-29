# DrawerLayout Component
The `DrawerLayout` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with  a PX Blue `Drawer`. It accepts a `Drawer` as a prop, and the main page content is passed in through child elements.

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
