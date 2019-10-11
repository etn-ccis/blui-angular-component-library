# Icon Wrapper
The Icon Wrapper is a utility that allows the PX Blue components to interact nicely with SVG icons from react-native-vector-icons and @pxblue/icons-svg. Several components in this library accept a `IconClass` property of the type `React.ComponentType<{ size: number, color: string }>`. This allows the icon to be parameterized while allowing the library component to control the icon's size and color.

However, the recommended icon libraries, `@pxblue/icons-svg` and `react-native-vector-icons`, do not not conform to this shape. Therefore, this utility exports `wrapIcon`, a Higher Order Component that can be used to convert them.

### Usage (@pxblue/icons-svg)
```
import Leaf from '@pxblue/icons-svg/leaf.svg';
const LeafIcon = wrapIcon({ IconClass: Leaf });
...
<ComponentName IconClass={LeafIcon}></ComponentName>
```

### Usage (react-native-vector-icons)
Icons from react-native-vector-icons require a class and a name. Refer to the [documentation](https://github.com/oblador/react-native-vector-icons) for which icons are available in each set.
```
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Cloud = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'cloud-off-outline' });
...
<ComponentName IconClass={Cloud}></ComponentName>
```

## Notes

As with all Higher Order Components, there is a performance hit if the function is called from another component's `render` method. It is therefore advised to always call `wrapIcon()` once per Icon type, and to do so outside of any methods.
