# wrapIcon

Some components in this library allow for an IconClass to be passed in. This allows the icon to be parameterized while allowing the library component to control the icon's size and color. IconClasses are expected to be of the type `React.ComponentType<{ size: number, color: string }>`.

However, the recommended icon libraries, `@pxblue/icons-svg` and `react-native-vector-icons`, do not not conform to this shape. Therefore, this library exports `wrapIcon` a Higher Order Component to convert them.

## Use with `@pxblue/icons-svg`

```
import Leaf from '@pxblue/icons-svg/leaf.svg';

const LeafIcon = wrapIcon({ IconClass: Leaf });
```

## Use with `react-native-vector-icons`

Icons from `react-native-vector-icons` require a name. See their documentation for which names work each Icon set.

```
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cloud = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'cloud-off-outline' });
```

## Caveats

As with all Higher Order Components, there is a performance hit if the function is called from another component's `render` method. It is therefore advised to always call `wrapIcon` once per Icon type, and to do so outside of any methods.
