# Change Log

## v4.0.0 (not published)

-   Migrate to Angular 10
-   Add `isVisible` prop to the `<pxb-drawer-nav-item>`.

## v3.0.1

-   Fixes bug in InfoListItem where divider was not working with `mat-ripple`.
-   Changes default display setting of ListItemTag so it doesn't take up 100% width in non-flex containers.
-   Updates the ListItemTag styles to match our DSM recommendations.

## v3.0.0

-   Adds a new `rail` variant to the `<pxb-drawer-layout>`.
-   Removed right-to-left icon inverting logic per [Material Design's bidirectionality guideline](https://material.io/design/usability/bidirectionality.html#mirroring-layout).
-   Adds a host class to each PX Blue component tag

## v2.1.0

-   Adds new component for `<pxb-user-menu>` (use @pxblue/angular-themes v5.1.0+ to get PX Blue themes for this component).
-   Adds new component for `<pxb-dropdown-toolbar>`.
-   Adds `iconAlign` attribute to `<pxb-info-list-item>` to align icons left (default), center or right.

## v2.0.0

-   Adds new components for `<pxb-score-card>`, `<pxb-info-list-item>`, `<pxb-list-item-tag>`, and `<pxb-spacer>`.
-   `<pxb-channel-value>`'s value attribute now accepts both `string` type and `number` type.
-   Enables support for Angular 9+.
-   Updates colors for accessibility

    _Breaking Changes_

-   We now switched to use `@pxblue/angular-themes` for our application's default style.
-   Deep imports are deprecated; access modules by importing `@pxblue/angular-components`.
-   `<pxb-empty-state>`'s attribute `empty-icon` has been renamed to `emptyIcon` to reflect the Angular convention.
-   `fontSize` attributes have been removed from `<pxb-hero>` and `<pxb-channel-value>`
    components. Font size can be set directly through the style attribute: `[fontSize]="20"` => `style="font-size: 20px"`
-   `iconSize` attribute for `<pxb-hero>` now takes only numeric values

## v1.3.0

-   Creates a storybook demo application
-   Fixes bug in `<pxb-channel-value>` where font size input was not being used

## v1.2.1

-   Adds a new component for `<pxb-empty-state>`
-   New index file for simpler import syntax
    -   `import {XXX} from '@pxblue/angular-components'`

## v1.1.0

-   Enables support for Angular 7+

## v1.0.0

-   Angular 7-compatible components
-   Minor styling fixes

## v0.0.1

Initial beta release
