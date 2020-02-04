# List Item Tag Component
ListItemTag is a text item with a colored background and rounded corners that is used to tag lists

<img width="100%" alt="List Item Tag" src="./images/listItemTag.png">

### Usage

```typescript
import { ListItemTag } from '@pxblue/react-components';

// Simple usage passing props
<ListItemTag label={"Foo Bar"} />

// More variations
<ListItemTag label={"Foo Bar"} backgroundColor={'gold'} fontColor={'black'} />
```

### API
| Prop Name         | Description                                                 | Type                               | Required | Default   | Examples                                     |
| ----------------- | ----------------------------------------------------------- | ---------------------------------- | -------- | --------- | -------------------------------------------- |
| `label`           | The label text                                              | `string`                           | yes      |           | `'Foo'`                                      |
| `fontColor`       | Color of the label                                          | `string`                           | no       | `#ffffff` | `'white'`                                    |
| `backgroundColor` | Color of the label background                               | `string`                           | no       | `#007bc1` | `'green'`                                    |
| onClick           | event handler to be called when the user clicks on the tag. | `() => void`                       | no       | '()=> {}' | `alert('Clicked')`                           |
| classes           | Custom classes to be passed to the tag container.           | `{label?: string; root?: string;}` | no       | `{}`      | `{label: 'label-class', root: 'root-class'}` |


