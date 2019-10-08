# Component/Group Name
This is a brief description of the component: what it does, what it looks like, when to use it, etc. Two to three sentences should suffice for this brief introduction. If there are multiple 

<img width="100%" alt="Component Image" src="./link/to/image.png">

## Sub-Component 1 Name
If the file contains any sub-components or tightly coupled components, they should be listed and briefly described in these sections. Examples could include the various Typography elements, or the Hero and HeroBanner components.

### Sub-Component 1 Usage
```
import Component from '@pxblue/react-components/core/Component';
import additionalDependencyOrComponents from '@pxblue/react-components/core/dependencies';
// this section should include enough information that it could actually be copy pasted and work...no missing imports, etc.
...
<ComponentName property another={'property'}></ComponentName>
```

### Sub-Component 1 API
| Prop Name | Description                             | Type                                               | Required | Default | Examples                      |
|-----------|-----------------------------------------|----------------------------------------------------|----------|---------|-------------------------------|
| value     | The value shown below the icon          | `string` &vert; `number`                           | yes      |         | 123, 'on'                     |
| IconClass | A component to render for the icon      | `React.Component<{ size: number, color: string }>` | no       |         | `<WrappedLeaf/>`              |
| units     | The units for the supplied value        | `string`                                           | no       |         | 'hz', '$'                     |
| prefix    | If true, shows units before the value   | `boolean`                                          | no       | false   | true, false                   |
| fontSize  | The size of the font for the value      | `number`                                           | no       | 20      | 12, 30                        |
| color     | The color used for the text elements    | `string`                                           | no       | 'black' | 'black', '#000000'            |
| theme     | Theme partial for default styling       | `DeepPartial<Theme>`                               | no       |         | { colors: { text: 'green' } } |


## Sub-Component 2 Name
If the file contains any sub-components or tightly coupled components, they should be listed and briefly described in these sections. Examples could include the various Typography elements, or the Hero and HeroBanner components.

### Sub-Component 2 Usage
```
import Component from '@pxblue/react-components/core/Component';
import additionalDependencyOrComponents from '@pxblue/react-components/core/dependencies';
...
<ComponentName property another={'property'}></ComponentName>
```

### Sub-Component 2 API
| Prop Name | Description                             | Type                                               | Required | Default | Examples                      |
|-----------|-----------------------------------------|----------------------------------------------------|----------|---------|-------------------------------|
| value     | The value shown below the icon          | `string` &vert; `number`                           | yes      |         | 123, 'on'                     |
| IconClass | A component to render for the icon      | `React.Component<{ size: number, color: string }>` | no       |         | `<WrappedLeaf/>`              |
| units     | The units for the supplied value        | `string`                                           | no       |         | 'hz', '$'                     |
| prefix    | If true, shows units before the value   | `boolean`                                          | no       | false   | true, false                   |
| fontSize  | The size of the font for the value      | `number`                                           | no       | 20      | 12, 30                        |
| color     | The color used for the text elements    | `string`                                           | no       | 'black' | 'black', '#000000'            |
| theme     | Theme partial for default styling       | `DeepPartial<Theme>`                               | no       |         | { colors: { text: 'green' } } |
