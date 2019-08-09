# HeroBanner

The HeroBanner component is a simple wrapper component that is used to contain `<Hero/>`s. It creates the flex container and sets up the spacing rules to display them. It accepts up to four `<Hero/>` components as its children. Any children after the fourth will not be rendered.

## Example
```
import { HeroBanner, Hero } from '@pxblue/react-native-components;
...
<HeroBanner divider>
  <Hero/>
  <Hero/>
  <Hero/>
  <Hero/>
</HeroBanner>
```

## Props
| Name      | Type                 | Required | Default | Examples        |
|-----------|----------------------|----------|---------|-----------------|
| divider   | boolean              | no       | false   |                 |
