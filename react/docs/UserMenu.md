# UserMenu
The `UserMenu` is an Avatar that opens a Menu when clicked.  
The `UserMenu` typically appears in a corner of an application and indicates who is logged in.

The Avatar that appears in the UserMenu can appear as text, icon, or image.

The Menu that opens when the Avatar is clicked can be populated by passing in the `menuGroups` prop, or by providing a child node.
If a child node is passed to the UserMenu, the content will render inside a Menu.

## Usage
```
import { UserMenu } from '@pxblue/react-components';
import { Avatar } from '@material-ui/core';
import {Email, Settings} from "@material-ui/icons";
import SendIcon from '@material-ui/icons/Send';

const avatar = <Avatar><SendIcon/></Avatar>;
<UserMenu avatar={avatar} menuGroups={[
    {
       items: [
           {
               title: 'Log Out',
               icon: <SendIcon />,
           },
           {
               title: 'Account Settings',
               icon: <Settings />,
           },
           {
               title: 'Contact Us',
               icon: <Email />,
           },
       ],
    },
]} />

```


## API
| Prop Name         | Description                             | Type                     | Required | Default                    | Examples                                |
|-------------------|-----------------------------------------|--------------------------|----------|----------------------------|-----------------------------------------|
| avatar            | MUI Avatar that displays                | `Avatar`                 | no       |                            |                                        |
| classes           | Style overrides                         | `StyleRules`             | no       |                            |                                         |
| onClose           | Function called when the menu is closed | `Function`               | no       |                            |                                         |
| onOpen            | Function called when the menu is opened | `Function`               | no       |                            |                                         |
| menuTitle         | Title shown when menu is open           | `string`                 | no       |                            |                                         |
| menuSubtitle      | Subtitle shown when menu is open        | `string`                 | no       |                            |                                         |
| menuGroups        | Groups of menu items that display       | `UserMenuGroups`         | no       |                            |                                         |
| MenuProps         | Property overrides for the MUI Menu     | `MenuProps`              | no       |                            |                                         |

#### UserMenuGroups Object
The `menuGroups` prop of the `UserMenu` includes many properties from the `DrawerNavGroup` array found within a `DrawerBody`.

| Prop Name             | Description                             | Type              | Required | Default |
|-----------------------|-----------------------------------------|-------------------|----------|---------|
| fontColor             | The color used for the text             | `string`          | no       |         |
| iconColor             | The color used for icons                | `string`          | no       |         |
| items                 | List of navigation items to render      | `UserMenuItem[]`  | no       |         |  
| title                 | Text to display in the group header     | `string`          | no       |         |  

#### UserMenuItem Object

| Attribute       | Description                             | Type               | Required | Default                      |
|-----------------|-----------------------------------------|--------------------|----------|------------------------------|
| chevron         | Show chevron icon to the right          | `boolean`          | no       | false                        |  
| divider         | Show a divider line below the item      | `boolean`          | no       | true                         |  
| icon            | A component to render for the icon      | `React.Component`  | no       |                              |      
| onClick         | A function to execute when clicked      | `function`         | no       |                              |    
| statusColor     | Status stripe and icon color            | `string`           | no       |                              |    
| subtitle        | The text to show on the second line     | `string`           | no       |                              |    
| title           | The text to show on the first line      | `string`           | no       |                              |    


### Classes
You can override the classes used by PX Blue by passing a `classes` prop. It supports the following keys:

| Name             | Description                                 |
|------------------|---------------------------------------------|
| root             | Styles applied to the root element          |
