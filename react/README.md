# PX Blue Custom React Components
This is a library of custom components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing re-usable components that implement common use cases in PX Blue and eliminating the need to multiple teams to build their own components for these.

Currently, we have components available for:
* ChannelCallout

## Installation
To install the PX Blue react components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/react-components
```


## Using the components in your application
The custom components can be imported and used like you would use any other component.

```
import { ChannelCallout } from '@pxblue/react-components';
...
<ChannelCallout icon={<Menu/>} color={'red'} value={myValue} units={'V'}/>
```
