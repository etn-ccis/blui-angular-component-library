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
import { UserMenuModule, InfoListItemModule } from '@pxblue/angular-components';
...
imports: [
    UserMenuModule,
    InfoListItemModule
],
...
```

```tsx
let open = false;
const items = [
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
    }
];
```

```html
<pxb-user-menu avatarValue="HA" menuTitle='Sample Title' [(open)]="open">
    <mat-nav-list pxb-body>
        <pxb-info-list-item *ngFor="let item of items" [dense]="true" (click)="open=false">
            <mat-icon pxb-icon>{{item.icon}}</mat-icon>
            <div pxb-title>{{item.title}}</div>
        </pxb-info-list-item>
    </mat-nav-list>
</pxb-user-menu> 
```

## API

Parent element (`<pxb-user-menu>`) attributes:

<div style="overflow: auto;">

| @Input       | Description                                      | Type                    | Required | Default |
| ------------ | ------------------------------------------------ | ----------------------- | -------- | ------- |
| avatarImage  | Image source for avatar                          | `string`                | no       |         |
| avatarValue  | Text value for avatar                            | `string`                | no       |         |
| menuSubtitle | Subtitle shown when menu is open                 | `string`                | no       |         |
| menuTitle    | Title shown when menu is open                    | `string`                | no       |         |

</div>

<div style="overflow: auto;">

| @Output        | Description                                      | Type                    |
| -------------- | ------------------------------------------------ | ----------------------- | 
| backdropClick  | Emits event when backdrop is clicked             | `EventEmitter<void>`    | 
| openChange     | Emits an event when the open prop changes        | `EventEmitter<boolean>` | 

</div>

The following child elements are projected into `<pxb-user-menu>`:

<div style="overflow: auto;">

| Selector           | Description                                                                    | Required | 
| ------------------ | ------------------------------------------------------------------------------ | -------- | 
| [pxb-avatar]       | Custom avatar to show, alternative to `avatarImage` or `avatarValue` prop  | no       | 
| [pxb-menu-avatar]  | Custom menu avatar to show                                                     | no       |
| [pxb-menu-header]       | Custom menu header content                                                     | no       |
| [pxb-menu-body]         | Custom menu body content                                                       | no       | 

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                                     | Description                                  |
| ---------------------------------------- | -------------------------------------------- |
| pxb-user-menu-avatar                     | Styles applied to avatar element             |
| pxb-user-menu-container                  | Styles applied to the menu overlay           |
| pxb-user-menu-header                     | Styles applied to the generated menu header  |
| pxb-user-menu-header-avatar              | Styles applied to the menu header avatar     |
| pxb-user-menu-overlay-backdrop           | Styles applied to the menu overlay backdrop  |
