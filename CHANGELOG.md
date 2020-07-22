# Change Log

## v2.1.0
-   Add new component for `<pxb-user-menu` (requires @pxblue/angular-themes@^5.1.0 for theme styling).


## v2.0.0

-   Add new components for `<pxb-score-card>`, `<pxb-info-list-item>`, `<pxb-list-item-tag>`, and `<pxb-spacer>`.
-   `<pxb-channel-value>`'s value attribute now accepts both `string` type and `number` type.
-   Enable support for Angular 9+.
-   Colors updated for accessibility

    _Breaking Changes_
-   We now switched to use `@pxblue/angular-themes` for our application's default style.
-   Deep imports are deprecated; access modules by importing `@pxblue/angular-components`.
-   `<pxb-empty-state>`'s attribute `empty-icon` has been renamed to `emptyIcon` to reflect the Angular convention. 
-   fontSize attributes have been removed from `<pxb-hero>` and `<pxb-channel-value>`
components. Font size can be set directly through the style attribute: `[fontSize]="20"` => `style="font-size: 20px"`
-   iconSize attribute for `<pxb-hero>` now takes only numeric values

## v1.3.0

-   Create a storybook demo application
-   Fix bug in `<pxb-channel-value>` where font size input was not being used

## v1.2.1

-   Adds a new component for `<pxb-empty-state>`
-   New index file for simpler import syntax
    -   `import {XXX} from '@pxblue/angular-components'`

## v1.1.0

Enable support for Angular 7+

## v1.0.0

Angular 7-compatible components
Minor styling fixes

## v0.0.1

Initial beta release
