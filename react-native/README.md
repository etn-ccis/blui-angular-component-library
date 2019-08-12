# PX Blue UI Components for React Native

This is a library of re-usable React Native components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.

## Component Library

Components are written in `./components/`.

## Demo Project / Storybook App

Components are demoed in a storybook app in `./component-demo/`. This shows multiple views of each component to show its different states. After installing dependencies, the component library can be added to the demo's `node_modules/` directory using `./link-components.sh`.

## Documentation

Documentation is provided in [docs/](./docs).

## Installation

The component library relies on [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). This library must be installed in the project using the component library following the instructions on its readme.

Additionally, if using [@pxblue/icons-svg](https://github.com/pxblue/icons), SVGs must be transformed using [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer). Its installation instructions should also be followed.
