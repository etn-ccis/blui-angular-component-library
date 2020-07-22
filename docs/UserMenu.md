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

```html
// Example with an avatar value and generated menu items.
<pxb-user-menu [menuGroups]="menuGroups" avatarValue="HA"></pxb-user-menu> 
```
```html
// Example with custom header and body sections.
<pxb-user-menu avatarValue="HA" [(open)]="state.open">
    <h4 pxb-header>Header</h4>
    <mat-nav-list pxb-body>
        <mat-list-item (click)="state.open=false">
            Item 1
        </mat-list-item>
    </mat-nav-list>
</pxb-user-menu> 
```

## API

Parent element (`<pxb-user-menu>`) attributes:

<div style="overflow: auto;">

| @Input       | Description                                      | Type                    | Required | Default |
| ------------ | ------------------------------------------------ | ----------------------- | -------- | ------- |
| menuGroups   | Groups of menu items that display                | `UserMenuGroup[]`      | no       |         |
| menuSubtitle | Subtitle shown when menu is open                 | `string`                | no       |         |
| menuTitle    | Title shown when menu is open                    | `string`                | no       |         |
| avatarImage  | Image source for avatar                          | `string`                | no       |         |
| avatarValue  | Text value for avatar                            | `string`                | no       |         |

</div>

<div style="overflow: auto;">

| @Output        | Description                                      | Type                    |
| -------------- | ------------------------------------------------ | ----------------------- | 
| backdropClick  | Emits event when backdrop is clicked             | `EventEmitter<void>`    | 
| openChange     | Emits an event when the open prop changes        | `EventEmitter<boolean>` | 
| select         | Emits the title of the selected menu item        | `EventEmitter<string>`  |

</div>

The following child elements are projected into `<pxb-user-menu>`:

<div style="overflow: auto;">

| Selector           | Description                                                                    | Required | 
| ------------------ | ------------------------------------------------------------------------------ | -------- | 
| [pxb-avatar]       | Custom avatar to show, alternative to `avatarImage` or `avatarValue` prop  | no       | 
| [pxb-menu-avatar]  | Custom menu avatar to show                                                     | no       |
| [pxb-header]       | Custom menu header content                                                     | no       |
| [pxb-body]         | Custom menu body content                                                       | no       | 
| [pxb-footer]       | Custom menu footer content                                                     | no       | 

</div>

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

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                     | Description                                  |
| ---------------------------------------- | -------------------------------------------- |
| pxb-user-menu-avatar                     | Styles applied to avatar element             |
| pxb-user-menu-container                  | Styles applied to the menu overlay           |
| pxb-user-menu-header                     | Styles applied to the generated menu header  |
| pxb-user-menu-header-avatar              | Styles applied to the menu header avatar     |
| pxb-user-menu-body                       | Styles applied to the generated menu body    |
| pxb-user-menu-group-title                | Styles applied to each menu item group title |
| pxb-user-menu-overlay-backdrop           | Styles applied to the menu overlay backdrop  |
