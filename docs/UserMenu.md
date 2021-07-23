# User Menu

The `<pxb-user-menu>` is an Avatar that opens a Menu when clicked. It is typically used in the top-right corner of an application and indicates who is logged in.

<div style="align-items: center; display:flex; justify-content: space-around">

<img width="30%" alt="UserMenu Avatar" src="./images/userMenuAvatar.png">
<img width="35%" alt="UserMenu Opened" src="./images/userMenuOpened.png">

</div>

The Menu header can be constructed by supplying a `menuTitle` and optional `menuSubtitle`, or your own custom content. The Menu body is entirely custom content. See the API section below for more details.

## Usage

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="User Menu Anatomy" src="./images/userMenuAnatomy.png">
    <img width="100%" style="max-width: 600px" alt="User Menu Anatomy Selector" src="./images/userMenuAnatomy2.png">
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

```ts
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
    },
];
```

```html
// your-component.html
<pxb-user-menu avatarValue="HA" menuTitle="Sample Title" [(open)]="open">
    <mat-nav-list pxb-menu-body>
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

| @Input           | Description                                                                                                         | Type                       | Required | Default                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| avatarImage      | Image source for avatar                                                                                             | `string`                   | no       |                                                                                                                        |
| avatarValue      | Text value for avatar                                                                                               | `string`                   | no       |                                                                                                                        |
| menuSubtitle     | Subtitle shown when menu is open                                                                                    | `string`                   | no       |                                                                                                                        |
| menuTitle        | Title shown when menu is open                                                                                       | `string`                   | no       |                                                                                                                        |
| open             | Controls whether the user menu is opened or closed                                                                  | `boolean`                  | no       | `false`                                                                                                                |
| positions        | Where to render the menu relative to the avatar                                                                     | `ConnectionPositionPair[]` | no       | `[new ConnectionPositionPair(` `{ originX: 'start',` `originY: 'top' } ,` `{ overlayX: 'start',` `overlayY: 'top' })]` |
| useBottomSheetAt | Window pixel width at which the responsive bottom sheet menu is triggered (set to 0 to disable responsive behavior) | `number`                   | no       | `600`                                                                                                                  |

</div>

<div style="overflow: auto;">

| @Output       | Description                               | Type                    |
| ------------- | ----------------------------------------- | ----------------------- |
| backdropClick | Emits event when backdrop is clicked      | `EventEmitter<void>`    |
| openChange    | Emits an event when the open prop changes | `EventEmitter<boolean>` |

</div>

The following child elements are projected into `<pxb-user-menu>`:

<div style="overflow: auto;">

| Selector          | Description                                                               | Required |
| ----------------- | ------------------------------------------------------------------------- | -------- |
| [pxb-avatar]      | Custom avatar to show, alternative to `avatarImage` or `avatarValue` prop | no       |
| [pxb-menu-avatar] | Custom menu avatar to show                                                | no       |
| [pxb-menu-header] | Custom menu header content                                                | no       |
| [pxb-menu-body]   | Custom menu body content                                                  | no       |

</div>

### Classes

Each PX Blue component has classes which can be used to override component styles:

| Name                               | Description                                 |
| ---------------------------------- | ------------------------------------------- |
| pxb-user-menu-avatar               | Styles applied to avatar element            |
| pxb-user-menu-overlay              | Styles applied to the menu overlay          |
| pxb-user-menu-header               | Styles applied to the generated menu header |
| pxb-user-menu-header-avatar        | Styles applied to the menu header avatar    |
| pxb-user-menu-overlay-backdrop     | Styles applied to the menu overlay backdrop |
| pxb-user-menu-bottomsheet          | Styles applied to the bottomsheet overlay   |
| pxb-user-menu-bottomsheet-backdrop | Styles applied to the bottomsheet backdrop  |
