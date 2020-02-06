# PX Blue UI Components for React
This is a library of re-usable React components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.

Refer to the [documentation](https://github.com/pxblue/component-library/tree/dev/react/docs) for a list of available components.


## Installation
To install the PX Blue react components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/react-components
```
> **NOTE**: This install command will install the package from NPM. If you are a PX Blue developer working with components locally, you will want to follow the manual linking instructions - see below.


## Building the Library
To work with this library, first clone down the repository and install dependencies:
```
git clone https://github.com/pxblue/component-library
cd component-library/react
yarn install:dependencies
```

The library can be built by running the following command. The resulting output will be in the /core folder.
```
yarn build
```

## Running the demo projects
This repository comes with two demo projects. The first is a [Storybook](https://storybook.js.org/) application (/storybook) that allows you to see the components in isolation and interact with their properties. The second is a Showcase project (/showcase) that shows a combination of components in the context of a realistic interface.

You can automatically build the component library and link them to the node modules of the demo projects by running:
```
yarn link:components
```

You can also build, link, and start the demo applications in a single step by calling either ```yarn start:showcase``` or ```yarn start:storybook``` from the /react directory.

## Using the Components
See the [documentation](https://github.com/pxblue/component-library/tree/dev/react/docs) for information on using these components.
