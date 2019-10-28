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
* ```title``` (String) [**required**]: the primary description.
* ```description``` (String): more detailed explanation of what the title means.
* ```icon``` (Element): dynamic icon content.
* ```actions``` (Element): dynamic content that a user can interact with (buttons, forms, etc).
