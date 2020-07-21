# User Menu

The `<pxb-user-menu>` is an Avatar that opens a Menu when clicked. It is typically used in the top-right corner of an application and indicates who is logged in.

<div style="align-items: center; display:flex; justify-content: space-around">

<img width="30%" alt="UserMenu Avatar" src="./images/userMenuAvatar.png">
<img width="35%" alt="UserMenu Opened" src="./images/userMenuOpened.png">

</div>

The Menu can be populated via the `menuGroups` prop, or can be entirely customized by supplying your own content.  See the API section below for more details.

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 500px" alt="User Menu Anatomy" src="./images/userMenuAnatomy.png">
</div>

```typescript
// app.module.ts
import { UserMenuModule } from '@pxblue/angular-components';
...
imports: [
    UserMenuModule
],
...
```

```html
// Example with a single menu group and an avatar value.

<pxb-user-menu [menuGroups]="menuGroups" value="HA"></pxb-user-menu> 
```

```tsx
import { UserMenuGroup } from '@pxblue/angular-components';

menuGroups: UserMenuGroup[] = [
    {
        items: [
            {
                title: 'Account',
                icon: 'settings',
            },
            {
                title: 'Contact Us',
                icon: 'mail',
            },
            {
                title: 'Log Out',
                icon: 'logout',
            },
        ],
    },
];
```

## API

Parent element (`<pxb-user-menu>`) attributes:

<div style="overflow: auto;">

| @Input       | Description                                      | Type                    | Required | Default |
| ------------ | ------------------------------------------------ | ----------------------- | -------- | ------- |
| menuGroups   | Groups of menu items that display                | `UserMenuGroups[]`      | no       |         |
| menuSubtitle | Subtitle shown when menu is open                 | `string`                | no       |         |
| menuTitle    | Title shown when menu is open                    | `string`                | no       |         |
| src          | Image source for avatar                          | `string`                | no       |         |
| value        | Avatar text value                                | `string`                | no       |         |


</div>

<div style="overflow: auto;">

| @Output      | Description                                      | Type                    | Required | Default |
| ------------ | ------------------------------------------------ | ----------------------- | -------- | ------- |
| openChange   | Emits an event when the open prop changes        | `EventEmitter<boolean>` | no       |         |
| select       | Emits the title of the selected menu item        | `EventEmitter<string >` | no       |         |

</div>

#### Classes

You can override the classes used by PX Blue by passing a `classes` prop. It supports the following keys:

| Name | Description                        |
| ---- | ---------------------------------- |
| root | Styles applied to the root element |

#### UserMenuGroup Object

The `menuGroups` prop of the `<pxb-user-menu>` will  `<pxb-info-list-item>` to represent each menu item.

<div style="overflow: auto;">

| Prop Name | Description                         | Type                   | Required | Default |
| --------- | ----------------------------------- | ---------------------- | -------- | ------- |
| items     | List of navigation items to render  | `UserMenuGroupItem[]`  | no       | []      |
| title     | Text to display in the group header | `string`               | no       |         |

</div>

#### UserMenuGroupItem Object

<div style="overflow: auto;">

| Attribute   | Description                         | Type              | Required | Default |
| ----------- | ----------------------------------- | ----------------- | -------- | ------- |
| chevron     | Show chevron icon to the right      | `boolean`         | no       | false   |
| divider     | Show a divider line below the item  | `boolean`         | no       | true    |
| icon        | Mat icon to render for the icon     | `string`          | no       |         |
| statusColor | Status stripe and icon color        | `string`          | no       |         |
| subtitle    | The text to show on the second line | `string`          | no       |         |
| title       | The text to show on the first line  | `string`          | yes      |         |

</div>
