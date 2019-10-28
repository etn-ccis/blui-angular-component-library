# EmptyState Component

The Empty State component is a placeholder for missing data or permissions, future features, or even errors.

## Usage
```
import { EmptyState } from '@pxblue/react-native-components';

...
<EmptyState
    icon={
        <Icon name="notifications" size={100} color={Colors.gray[500]} />
    }
    title={'No Alarm Found'}
/>
```

## API

| Name        | Type     | Required | Default | Examples                                                        |
|-------------|----------|----------|---------|-----------------------------------------------------------------|
| title       | string   | yes      |         | 'No Data Found'                                                 |
| description | string   | no       |         | 'Come back to this page later, it's under construction'         |
| icon        | element  | no       |         | `<Icon name="devices" size={100} color={Colors.gray[500]  />`   |
| iconStyles  | Object   | no       |         | `{fontSize:'500px', marginBottom: '55px'}`                      |
| actions     | element  | no       |         | `<Button title={'click me'} />`                                 |

