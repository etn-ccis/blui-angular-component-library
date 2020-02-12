# Change Log
## v2.1.0
- Adds InfoListTag Component
    - Displays additional information inside an InfoListItem.
- Adds UserMenu Component
    - Avatar which opens a Menu when clicked.
- Misc bug fixes

## v2.0.0
- Library converted to TypeScript to provide strong typings for TS projects.
- Adds new components for:
    - Drawer
    - DrawerHeader
    - DrawerSubheader
    - DrawerBody
    - DrawerNavGroup
    - DrawerFooter
    - DrawerLayout
- **Breaking Change:** Simpler import syntax - _default_ imports will no longer work.
    ```
    /* Old import syntax */
    import ComponentName from '@pxblue/react-components/core/ComponentName';

    /* New import syntax */
    import { ComponentName } from '@pxblue/react-components';
    ```

## v1.1.0
Adds a new component for EmptyState

## v1.0.0 
Fixes a bug in icon size for inline ChannelValue components

## v0.0.1
Initial beta release
