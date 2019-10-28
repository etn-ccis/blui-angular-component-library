# EmptyState Component
The Empty State component is a placeholder for missing data or permissions, future features, or even errors.

## Usage
```
import EmptyState from '@pxblue/react-components/core/EmptyState';
```
```
<EmptyState
    icon={<AlertIcon style={{ fontSize: '100px', marginBottom: '15px' }} />}
    title={"No Alarms Found"}
/>
```
 
## API
| Name        | Type     | Required | Default | Examples                                                  |
|-------------|----------|----------|---------|-----------------------------------------------------------|
| title       | string   | yes      |         | 'No Data Found'                                           |
| description | string   | no       |         | 'Come back to this page later, it's under construction'   |
| icon        | element  | no       |         | `<DevicesIcon fontSize={'inherit'}/>`                                          |
| iconStyles  | Object   | no       |         | `{fontSize:'500px', marginBottom: '55px'}`                |
| actions     | element  | no       |         | `<Button>Add Device</Button>`                             |      
