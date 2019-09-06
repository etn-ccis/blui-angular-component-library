# Typography Components

Typography components are Text components that pull font and sizes from the [theme](./theming.md).

## Provided Components and their styles
* `Title`
  * font: `theme.fonts.bold`
  * fontSize: `theme.sizes.medium`
* `Subtitle`
  * font: `theme.fonts.thin`
  * fontSize: `theme.sizes.small`
* `Label`
  * font: `theme.fonts.regular`
  * fontSize: `theme.sizes.medium`
  * letterSpacing: `0`
* `Heading`
  * font: `theme.fonts.regular`
  * fontSize: `theme.sizes.extraLarge`
* `Subheading`
  * font: `theme.fonts.regular`
  * fontSize: `theme.sizes.large`

### Example
```typescript
<Title>My title</Title>
```

## Overriding
### Overriding Styles

Typography components pull styles from the theme, but these styles can be overridden.

e.g.:

```typescript
<Title style={{ color: 'green' }}>My title</Title>
```

### Overriding Where Typography Components Pull Styles From

If you have a special case (e.g. a `Label` that you want to be large and bold), you may specify the font and/or size to use from the theme. The `font` you use must match one of the keys from the theme's `fonts` object, and the `fontSize` must match one of the keys in its `sizes` object.

e.g.:

```typescript
<Label font={'bold'} fontSize={'extraLarge'}>Hello World</Label>
```

## Overriding Themes

Typography components can take a partial `Theme` object.

e.g.:

```typescript
<Title theme={{ colors: { text: 'green' } }}>My title</Title>
```

Because Typography components use the color from `theme.colors.text`, this example will render green text.

## Props

`Typography` components take all the same props as `Text` components, and additionally:

| Name                   | Type                                                                 | Required | Default | Examples                                     | Notes                                                                                  |
|------------------------|----------------------------------------------------------------------|----------|---------|----------------------------------------------|----------------------------------------------------------------------------------------|
| theme                  | `DeepPartial<Theme>`                                            | no       |         | { colors: { text: 'green' } }                |                                                                                        |
| fontSize               | 'small' &vert; 'medium' &vert; 'large' &vert; 'extraLarge'           | no       |         | 'small', 'extraLarge'                        | These strings must match keys of the theme's `sizes` object                            |
| font                   | 'bold' &vert; 'regular' &vert; 'medium' &vert; 'light' &vert; 'thin' | no       |         | 'bold', 'thin'                               | These strings must match keys of the theme's `fonts` object                            |