# PX Blue UI Components
[![](https://img.shields.io/circleci/project/github/pxblue/component-library/master.svg?style=flat)](https://circleci.com/gh/pxblue/component-library/tree/master)
This is a library of re-usable components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.

Currently, we have components available for:
* ChannelValue (React, Angular)
* Hero (React, Angular)
* HeroBanner (React, Angular)

> Except where specified, components are available in all supported frameworks

## Installation
### React
To install the PX Blue react components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/react-components
```

### Angular
To install the PX Blue angular components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/angular-components
```
> **NOTE**: This component library requires that your application have @pxblue/themes and @angular/material installed.


## For Developers
If you are developing this component library locally, there are linking scripts available to automatically link the library into node_modules for the demo project without installing through npm.