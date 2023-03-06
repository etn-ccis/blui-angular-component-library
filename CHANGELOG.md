# Change Log

## v8.1.0 (Unreleased)

### Fixed

-  Fixed Channel value issue with zero value in `<blui-channel-value>` ([#556](https://github.com/etn-ccis/blui-angular-component-library/issues/556)).

### Fixed

-  Fixed Toolbar Menu left icon should be vertically centered in `<blui-toolbar-menu>` ([#515](https://github.com/etn-ccis/blui-angular-component-library/issues/515)).

## v8.0.1 (January 25, 2023)

### Added

- `prefix` input to `<blui-hero>` component ([#501](https://github.com/etn-ccis/blui-angular-component-library/issues/501)).

### Changed

- Updated `blui-primary` selector in `<blui-hero>` component to be required ([#507](https://github.com/etn-ccis/blui-angular-component-library/issues/507)).

## v8.0.0 (November 21, 2022)

### Changed

- Updated to Angular 14 for building the library.

### Removed

- Removed `<blui-dropdown-toolbar>` component.

### Fixed

- Fixed `<blui-empty-state>` not sizing non-material icons correctly ([#530](https://github.com/etn-ccis/blui-angular-component-library/issues/530)).

## v7.0.3 (October 31, 2022)

### Fixed

- Fixed incorrect styling of nested `<mat-drawer-content>` ([#463](https://github.com/etn-ccis/blui-angular-component-library/issues/463)).
- Fixed `<blui-drawer>` sharing a single instance of drawer state ([#453](https://github.com/etn-ccis/blui-angular-component-library/issues/453)).
- Fixed `<blui-drawer-header>` not responding to dynamic icon content. ([#473](https://github.com/etn-ccis/blui-angular-component-library/issues/473)).
- Fixed `<blui-drawer-layout>` styles affecting deep nested`<blui-drawer>` children ([#472](https://github.com/etn-ccis/blui-angular-component-library/issues/472)).
- Fixed `blui-title-content` not showing in `<blui-nav-group>` ([#475](https://github.com/etn-ccis/blui-angular-component-library/issues/475)).
- Fixed `blui-app-bar` not listening to scroll containers when rendered in a `<ng-template>` ([#508](https://github.com/etn-ccis/blui-angular-component-library/issues/508)).
- Fixed `blui-score-card` `badgeOffset` not being updated correctly when set to 0 after initialization ([#534](https://github.com/etn-ccis/blui-angular-component-library/issues/534)).

## v7.0.2 (June 8, 2022)

### Fixed 

- Fixed escape key permanently dismissing `<blui-drawer>` ([#426](https://github.com/etn-ccis/blui-angular-component-library/issues/426)).
- Fixed `<blui-drawer-layout>` opening side nav when transitioning to a `temporary` state ([#82](https://github.com/etn-ccis/blui-angular-component-library/issues/82)).
- Fixed escape key permanently dismissing `<blui-user-menu>` ([#434](https://github.com/etn-ccis/blui-angular-component-library/issues/434)).
- Fixed `<blui-empty-state>` not being centered when a description is not provided ([#378](https://github.com/etn-ccis/blui-angular-component-library/issues/378)).

## v7.0.1 (April 15, 2022)

### Fixed

-   Fixed avatar line-height in `<blui-user-menu>` component ([#419](https://github.com/etn-ccis/blui-angular-component-library/issues/419)).

## v7.0.0 (March 14, 2022)

### Added

-  Added `<blui-toolbar-menu>` component ([#374](https://github.com/etn-ccis/blui-angular-component-library/issues/374)).

### Changed

-   Updated to Angular 13 for building the library.

### Fixed

-   Fixed container overflow in `<blui-empty-state>` ([#400](https://github.com/etn-ccis/blui-angular-component-library/issues/400)).
-   Fixed `<blui-app-bar>` and `<blui-three-liner>` applying transition to `color` and `background-color` style properties ([#395](https://github.com/etn-ccis/blui-angular-component-library/issues/395)).
-   Fixed `<blui-mobile-stepper>` not spanning full container width on Safari ([#404](https://github.com/etn-ccis/blui-angular-component-library/issues/404)).
-   Fixed `<blui-empty-state>` description not applying correct typography. ([#414](https://github.com/etn-ccis/blui-angular-component-library/issues/414)).

## v6.0.4 (February 14, 2022)

-   Fixed change detection error in `<blui-drawer-nav-item>`([#397](https://github.com/etn-ccis/blui-angular-component-library/issues/397)).

## v6.0.3 (January 27, 2022)

### Fixed

-   Fixed `<blui-drawer-nav-item>` not responding to `expanded` input on initialization. ([#391](https://github.com/etn-ccis/blui-angular-component-library/issues/391))

## v6.0.2 (January 20, 2022)

### Changed

-   Added 1rem default padding to `<blui-empty-state>` ([#336](https://github.com/etn-ccis/blui-angular-component-library/issues/336)).
-   Added a list `peerDependencies` to component's `package.json` ([#351](https://github.com/etn-ccis/blui-angular-component-library/issues/351)). 

### Fixed

-   Fixed `<blui-app-bar>` not listening for new scroll elements `onChanges` ([#362](https://github.com/etn-ccis/blui-angular-component-library/issues/362)).
-   Fixed `<blui-user-menu>` not rendering bottomsheet content when quickly dismissing and then reopening. ([#345](https://github.com/etn-ccis/blui-angular-component-library/issues/345))
-   Fixed `<blui-drawer-nav-item>` not responding to `expanded` input updates. ([#326](https://github.com/etn-ccis/blui-angular-component-library/issues/326))
-   Fixed `<blui-drawer-nav-item>` not applying correct `depth` class for asynchronously loaded items. ([#356](https://github.com/etn-ccis/blui-angular-component-library/issues/356))


## v6.0.1 (December 17, 2021)

### Fixed

-   Fixed `<blui-score-card>` cutting off descender letters.

## v6.0.0 (November 3, 2021)

### Changed

-   Changed package namespace from `@pxblue` to `@brightlayer-ui`.

## Package Migration Notice

Previous versions listed after this indicator refer to our deprecated `@pxblue` packages.

---

## v6.0.0 (September 30, 2021)

### Added

-   Added new property `unitSpace` to `<pxb-channel-value>` and `<pxb-hero>` to manage spacing between the value and units.

### Changed

-   Changed `<pxb-user-menu>` `open` property to be required instead of optional.
-   Changed `<pxb-user-menu>` component to use a new `UserMenuHeaderComponent` in the menu overlay instead of using a `DrawerHeaderComponent`.

### Fixed

-   Fixed stepper spacing in `<pxb-mobile-stepper>` when Back and Next buttons are uneven width.
-   Fixed bug in `<pxb-user-menu>` that prevented the bottom sheet from rendering when `open` was manually set to `true`.
-   Fixed bug in `<pxb-user-menu>` where dismissing a bottomsheet via backdrop click did not emit a `backdropClick` event.
-   Fixed bug in `<pxb-app-bar>` that prevented class overrides on the root element.
-   Fixed bug in `<pxb-app-bar>` so scroll listeners can no longer attempt to measure `undefined` elements' scroll distance.

## v5.0.1 (July 30, 2021)

### Added

-   Tooltips to the `<pxb-drawer-nav-item>` when using the `persistent` drawer variant ([#301](https://github.com/etn-ccis/blui-angular-component-library/issues/301)).
-   Improved intellisense popup documentation with links to full component documentation.

## v5.0.0 (June 30, 2021)

### Changed

-   Updated to Angular 11 for building the library.

## v4.5.0 (June 30, 2021)

### Added

-   Added `<pxb-app-bar>` component.
-   Added `wrapInfo` prop to `<pxb-info-list-item>`.
-   Added new property `disabled` to `<pxb-info-list-item`>.

### Fixed

-   Fixed `<pxb-drawer-header>` content alignment when omitting a menu icon.

## v4.4.0 (May 28, 2021)

### Changed

-   Update `<pxb-user-menu>` to responsively display a bottom sheet in place of an overlay menu.

### Added

-   Added `disableRailTooltip` prop to `<pxb-drawer>`.

### Fixed

-   Fixed non-centered `<pxb-list-item-tag>` text.

## v4.3.0 (April 27, 2021)

### Added

-   Added new property `disabled` to `<pxb-info-list-item`>.

### Fixed

-   Fixed non-centered icon alignment in `<pxb-info-list-item>`.

## v4.2.0 (March 31, 2021)

### Added

-   Added new property `color` to `<pxb-dropdown-toolbar>`.
-   Added new property `color` to `<pxb-drawer-header>`.

### Changed

-   Changed vertical margins to use rem units so they scale with system font-size
-   Updated `<pxb-score-card>` header and subtitle font size to match DSM.

## v4.1.0 (February 12, 2021)

### Added

-   Adds new property `openOnHover` to `<pxb-drawer>`.
-   Adds new class `pxb-dropdown-toolbar-subtitle-icon` to `<pxb-dropdown-toolbar>`
-   Adds lighter font weight to `<pxb-info-list-item>` placed inside `<pxb-user-menu>`.
-   Adds a shadow to the `<pxb-user-menu>` when opened.
-   Adds new property `openOnHoverDelay` to `<pxb-drawer>` to alter open-on-hover delay for closed persistent drawers.

### Fixed

-   Fixes bug in `<pxb-mobile-stepper>` which makes component span 100% of parent width.
-   Fixes header height bug which affected `<pxb-drawer-header>` in Safari.
-   Fixes misalignment of `<pxb-info-list-item>`'s right content.
-   Fixes RTL styles in `<pxb-dropdown-toolbar>`.
-   Fixes uneven vertical alignment of icon and text in `<pxb-empty-state>` action buttons.
-   Fixes `<pxb-user-menu>` menu header avatar offset.
-   Fixes `<pxb-drawer>` `sideBorder` prop to use `mat-elevation` class.

### Removed

-   Removes automatic RTL flip logic from user-provided icons to `<pxb-info-list-item>`.

### Changed

-   Default styles of `<pxb-dropdown-toolbar>` for more padding around the dropdown arrow.
-   Changed `<pxb-user-menu>` menu title default font size to 16px.
-   Changed `<pxb-user-menu>` menu subtitle default font size to 14px.

## v4.0.0 (December 10, 2020)

### Added

-   Added `hidden` prop to the `<pxb-drawer-nav-item>`.
-   Enhanced `<pxb-empty-state>` to allow ng-content as `title` or `description`.

### Changed

-   Migrated to Angular 10
-   Renamed several classes and updated styles for the `<pxb-drawer>`
-   Updated default style of the `<pxb-hero>`

## v3.0.1 (October 7, 2020)

### Fixed

-   Fixes bug in InfoListItem where divider was not working with `mat-ripple`.
-   Changes default display setting of ListItemTag so it doesn't take up 100% width in non-flex containers.
-   Updates the ListItemTag styles to match our DSM recommendations.

## v3.0.0 (September 29, 2020)

### Added

-   Adds a new `rail` variant to the `<pxb-drawer-layout>`.
-   Adds a host class to each PX Blue component tag

### Changed

-   Removed right-to-left icon inverting logic per [Material Design's bidirectionality guideline](https://material.io/design/usability/bidirectionality.html#mirroring-layout).

## v2.1.0 (August 14, 2020)

### Added

-   Adds new component for `<pxb-user-menu>` (use @pxblue/angular-themes v5.1.0+ to get PX Blue themes for this component).
-   Adds new component for `<pxb-dropdown-toolbar>`.
-   Adds `iconAlign` attribute to `<pxb-info-list-item>` to align icons left (default), center or right.

## v2.0.0 (June 30, 2020)

### Added

-   Adds new components for `<pxb-score-card>`, `<pxb-info-list-item>`, `<pxb-list-item-tag>`, and `<pxb-spacer>`.
-   `<pxb-channel-value>`'s value attribute now accepts both `string` type and `number` type.
-   Enables support for Angular 9+.

### Changed

-   Updates colors for accessibility

    _Breaking Changes_

-   We now switched to use `@pxblue/angular-themes` for our application's default style.
-   Deep imports are deprecated; access modules by importing `@pxblue/angular-components`.
-   `<pxb-empty-state>`'s attribute `empty-icon` has been renamed to `emptyIcon` to reflect the Angular convention.
-   `fontSize` attributes have been removed from `<pxb-hero>` and `<pxb-channel-value>`
    components. Font size can be set directly through the style attribute: `[fontSize]="20"` => `style="font-size: 20px"`
-   `iconSize` attribute for `<pxb-hero>` now takes only numeric values

## v1.3.0 (February 3, 2020)

### Added

-   Creates a storybook demo application

### Fixed

-   Fixes bug in `<pxb-channel-value>` where font size input was not being used

## v1.2.1 (October 29, 2019)

### Added

-   Adds a new component for `<pxb-empty-state>`
-   New index file for simpler import syntax
    -   `import {XXX} from '@pxblue/angular-components'`

## v1.1.0 (July 10, 2019)

### Added

-   Enables support for Angular 7+

## v1.0.0 (June 28, 2019)

### Added

-   Angular 7-compatible components

### Fixed

-   Minor styling fixes

## v0.0.1 (June 17, 2019)

Initial beta release
