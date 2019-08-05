# LayoutView
The LayoutView component is a template that makes it easy to render content, as well as optionally any arbitrary header and footer components.

<img alt="Layout View with needsKeyboard Prop" src="./images/layout-view-needs-keyboard-720p.gif">

> This gif shows the component with the prop `needsKeyboard` set to `true`

## Example
```
import { LayoutView } from '@pxblue/react-native-components';
...
<LayoutView header={<YourHeader/>} footer={<YourFooter/>}>
  <YourContent/>
</LayoutView>
```

## Props
| Name            | Type               | Required | Default       | Examples           |
|-----------------|--------------------|----------|---------------|--------------------|
| header          | React.ReactElement | no       |               |                    |
| footer          | React.ReactElement | no       |               |                    |
| backgroundColor | string             | no       | 'transparent' | 'green', '#6e29e8' |
| needsKeyboard   | boolean            | no       | false         |                    |
| bounces         | boolean            | no       | true          |                    |
