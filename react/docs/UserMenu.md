# User Menu
The User Menu is an avatar that typically appears in a top toolbar and opens a menu when clicked.

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

### API
| Prop Name         | Description                             | Type                     | Required | Default             | Examples                                |
|-------------------|-----------------------------------------|--------------------------|----------|---------------------|-----------------------------------------|
| AvatarProps       | Property overrides for the MUI Avatar   | `AvatarProps`            | no       |                     |                                         |
| backgroundColor   | The color used for the background       | `string`                 | no       | Colors.blue[50]     |                                         |
| backgroundImage   | An alternative to displaying text       | `string`                 | no       |                     |                                         |
| classes           | Style overrides                         | `StyleRules`             | no       |                     |                                         |
| fontColor         | Text color of the Avatar                | `string`                 | no       | Colors.blue[500]    |                                         |
| menuTitle         | Title shown when menu is open           | `string`                 | no       |                     |                                         |
| menuSubtitle      | Subtitle show when menu is open         | `string`                 | no       |                     |                                         |
| menuGroups        | Groups of menu items that display       | `UserMenuGroups`         | no       |                     |                                         |
| MenuProps         | Property overrides for the MUI Menu     | `MenuProps`              | no       |                     |                                         |
| value             | Text to display in the Avatar           | `string`                 | no       |                     |                                         |

