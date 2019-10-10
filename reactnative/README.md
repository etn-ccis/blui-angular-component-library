# PX Blue UI Components for React Native

This is a library of re-usable React Native components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.


Currently, we have components available for:
* ChannelValue
* Hero
* HeroBanner
* Typography


## Installation
To install the PX Blue react native components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/react-native-components
```
> **NOTE**: This install command will install the package from NPM. If you are a PX Blue developer working with components locally, you will want to follow the manual linking instructions - see below.


## Building the Library
To work with this library, first clone down the repository and install dependencies:
```
git clone https://github.com/pxblue/component-library
cd component-library/reactnative
```

The library can be built by running the following command. The resulting output will be in the /core folder.
```
yarn build
```

There is also a demo project (/component-demo) in this repository that shows the components in use (via StoryBook). You can automatically build the component library and link them to the node modules for the demo by running:
```
yarn link:components
```

You can also build, link, and start the demo application in a single step by calling ```yarn start``` from the /reactnative directory.

## Using the Components
See the [Docs](./docs) folder for documentation on using these components.


## NOTES
This component library relies on [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) -this library must be installed in your project in order to use the PX Blue components.

Additionally, if using [@pxblue/icons-svg](https://github.com/pxblue/icons), SVGs must be transformed using [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer). Follow the instructions on their readme for setting up.
