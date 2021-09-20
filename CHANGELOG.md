# Change Log

## v6.0.0 (Unreleased)

### Added

-   Added new property `unitSpace` to `<pxb-channel-value>` to manage spacing between the value and units.

### Fixed

-   Fixed stepper spacing in `<pxb-mobile-stepper>` when Back and Next buttons are uneven width.
-   Fixed bug in `<pxb-app-bar>` so scroll listeners can no longer attempt to measure `undefined` elements' scroll distance. 

## v5.0.1 (July 30, 2021)

### Added

-   Tooltips to the `<pxb-drawer-nav-item>` when using the `persistent` drawer variant ([#301](https://github.com/pxblue/angular-component-library/issues/301)).
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
