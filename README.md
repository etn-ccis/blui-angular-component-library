# PX Blue Custom Angular Components
[![](https://img.shields.io/circleci/project/github/pxblue/angular-component-library/master.svg?style=flat)](https://circleci.com/gh/pxblue/angular-component-library/tree/master)
![npm](https://img.shields.io/npm/v/@pxblue/angular-components?label=%40pxblue%2Fangular-components)

This is a library of custom components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing re-usable components that implement common use cases in PX Blue and eliminating the need to multiple teams to build their own components for these.

Refer to the [documentation](https://github.com/pxblue/angular-component-library/tree/dev/docs) for a list of available components.

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
git clone https://github.com/pxblue/angular-component-library
cd angular-component-library
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


## Running the demo projects
This repository comes with two demo projects found within the `/demos` folder. 
The first is a [Storybook](https://storybook.js.org/) application that allows you to see the components in isolation and interact with their properties. The second is a Showcase project that shows a combination of components in the context of a realistic interface.

You can automatically build the component library and link them to the node modules of the demo projects by running:
```
yarn link:components
```

You can also build, link, and start the demo applications in a single step by calling either ```yarn start:showcase``` or ```yarn start:storybook``` from the root directory.


## Using the Components
See the [documentation](https://github.com/pxblue/angular-component-library/tree/dev/docs) for information on using these components.
