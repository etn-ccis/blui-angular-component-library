# PX Blue Custom Angular Components
This is a library of custom components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing re-usable components that implement common use cases in PX Blue and eliminating the need to multiple teams to build their own components for these.

Refer to the [documentation](https://github.com/pxblue/component-library/tree/dev/angular/docs) for a list of available components.

## Installation
To install the PX Blue angular components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/angular-components
```
> **NOTE**: This install command will install the package from NPM. If you are a PX Blue developer working with components locally, you will want to follow the manual linking instructions - see below.

> **NOTE**: This component library requires that your application have @pxblue/themes and @angular/material installed.


## Building the Library
To work with this library, first clone down the repository:
```
git clone https://github.com/pxblue/component-library
cd component-library/angular
```

The library can be built by running the following command. The resulting output will be in the /core folder.
```
yarn build
```

There is also a demo project (/component-demo) in this repository that shows the components in use. You can automatically build the component library and link them to the node modules for the demo by running:
```
yarn link:components
```

You can also build, link, and start the demo application in a single step by calling ```yarn start``` from the /angular directory.


## Using the Components
See the [documentation](https://github.com/pxblue/component-library/tree/dev/angular/docs) for information on using these components.