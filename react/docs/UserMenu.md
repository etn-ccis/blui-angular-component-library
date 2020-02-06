# UserMenu
The UserMenu is an Avatar that opens a Menu when clicked.  
The UserMenu typically appears in a corner of an application and indicates who is logged in.

The Avatar that appears in the UserMenu can appear as text, icon, or image.

The Menu that opens when the Avatar is clicked can be populated by passing in the `menuGroups` prop, or by providing a child node.
If a child node is passed to the UserMenu, the content will render inside a Menu.

## Usage
```
import { UserMenu } from '@pxblue/react-components';
import {Email, Settings} from "@material-ui/icons";
import SendIcon from '@material-ui/icons/Send';

<UserMenu value={'AA'} menuGroups={
    [
         {
            title: 'Log Out',
            icon: <SendIcon/>
         },
         {
            title: 'Account Settings',
            icon: <Settings/>,
         },
         {
            title: 'Contact Us',
            icon: <Email/>,
         },
      ]
} />

```


## API
| Prop Name         | Description                             | Type                     | Required | Default             | Examples                                |
|-------------------|-----------------------------------------|--------------------------|----------|---------------------|-----------------------------------------|
| avatarProps       | Property overrides for the MUI Avatar   | `AvatarProps`            | no       |                     |                                         |
| backgroundColor   | The color used for the background       | `string`                 | no       | Colors.blue[50]     |                                         |
| backgroundImage   | An alternative to displaying text       | `string`                 | no       |                     |                                         |
| classes           | Style overrides                         | `StyleRules`             | no       |                     |                                         |
| fontColor         | Text color of the Avatar                | `string`                 | no       | Colors.blue[500]    |                                         |
| onClose           | Function called when the menu is closed | `Function`               | no       |                     |                                         |
| onOpen            | Function called when the menu is opened | `Function`               | no       |                     |                                         |
| menuTitle         | Title shown when menu is open           | `string`                 | no       |                     |                                         |
| menuSubtitle      | Subtitle shown when menu is open        | `string`                 | no       |                     |                                         |
| menuGroups        | Groups of menu items that display       | `UserMenuGroups`         | no       |                     |                                         |
| menuProps         | Property overrides for the MUI Menu     | `MenuProps`              | no       |                     |                                         |
| value             | Text to display in the Avatar           | `string`                 | no       |                     |                                         |
| width             | Menu width                              | `number`                 | no       |                     |                                         |

