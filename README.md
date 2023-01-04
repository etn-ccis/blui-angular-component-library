# Brightlayer UI Angular Components

[![](https://img.shields.io/circleci/project/github/etn-ccis/blui-angular-component-library/master.svg?style=flat)](https://circleci.com/gh/etn-ccis/blui-angular-component-library/tree/master)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/angular-components?label=%40brightlayer-ui%2Fangular-components) [![codecov](https://codecov.io/gh/etn-ccis/blui-angular-component-library/branch/master/graph/badge.svg?token=DB9EMVFAFJ)](https://codecov.io/gh/etn-ccis/blui-angular-component-library)

This is a library of custom components for use in Brightlayer UI applications. For the most part, these components are meant to simplify building your application by providing re-usable components that implement common use cases in Brightlayer UI and eliminating the need to multiple teams to build their own components for these.

Refer to the [Component Library](https://brightlayer-ui-components.github.io/angular) API documentation site for a list of available components and the for each individual component.

## Installation

To install the Brightlayer UI angular components from NPM as a dependency for your project, you can run the following command in your project root:

```
yarn add @brightlayer-ui/angular-components
```

> **NOTE**: This install command will install the package from NPM. If you are a Brightlayer UI developer working with components locally, you will want to follow the manual linking instructions - see below.

> **NOTE**: This component library requires that your application have @brightlayer-ui/angular-themes and @angular/material installed.

## Building the Library

To work with this library, first clone down the repository:

```
git clone https://github.com/etn-ccis/blui-angular-component-library
cd angular-component-library
```

The library can be built by running the following command. The resulting output will be in the /dist folder.

```
yarn build:lib
```


## Compatibility

The following table outlines which versions of Angular and Brightlayer UI resources will work together.

| @brightlayer-ui/angular-components | @brightlayer-ui/angular-themes | @angular + @angular/material |
|------------------------------------|--------------------------------|-----------------------------|
| `^5.0.0`                           | `^6.1.0`                       | `^11.x`                     |
| `^6.0.0`                           | `^6.3.0`                       | `^12.x`                     |
| `^7.0.0`                           | `^7.0.0`                       | `^13.x`                     |
| `^8.0.0`                           | `^8.0.0`                       | `^14.x`                     |

## Peer Dependencies

The following peer dependencies are added to `package.json`:

| Package Name      | Version |
| ----------------- |---------|
| @angular/core     | ^14.0.0 |
| @angular/material | ^14.0.0 |
| @angular/cdk      | ^14.0.0 |

## Running the Demo Projects

To start the [documentation site](https://brightlayer-ui-components.github.io/angular) that is included in this repository, run:

```
yarn start
```

The second demo is a [showcase project](https://blui-angular-showcase.web.app/) that shows a combination of components in the context of a realistic interface.  To start the showcase, run: 

```
yarn start:showcase
```


## Using the Components

See the [documentation](https://brightlayer-ui-components.github.io/angular) for information on using these components.

## Browser Support

Brightlayer UI libraries will work with any modern browser. For details refer to our [Browser Support](https://brightlayer-ui.github.io/development/frameworks-web/angular#browser-support) documentation.
