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
 
 ## API
 
 | Name        | Type        | Required | Default | Examples                                                  |
 |-------------|-------------|----------|---------|-----------------------------------------------------------|
 | title       | string      | yes      |         | 'No Data Found'                                           |
 | description | string      | no       |         | 'Come back to this page later, it's under construction'   |
 | empty-icon  | ng-content  | no       |         | `<mat-icon empty-icon>devices</mat-icon>`                 |
 | actions     | ng-content  | no       |         | `<button actions>ADD DEVICE</button>`   |   

