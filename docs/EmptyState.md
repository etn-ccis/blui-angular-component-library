# EmptyState Component
The Empty State component is a placeholder for missing data or permissions, future features, or even errors.

## Usage
```
// app.module.ts
import { EmptyStateModule } from '@pxblue/angular-components/core/empty-state';
...
imports: [
    EmptyStateModule
  ],
```
```
// your-component.html
<empty-state title="No Alarms Found">
    <mat-icon empty-icon>notifications_none</mat-icon>
</empty-state>
```
 
## Available properties
* ```title``` (String) [**required**]: the primary description.
* ```description``` (String): more detailed explanation of what the title means.
* ```empty-icon``` (ng-content): dynamic icon content.
* ```actions``` (ng-content): dynamic content that a user can interact with (buttons, forms, etc).
