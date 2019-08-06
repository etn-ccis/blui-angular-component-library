# Component Demo (React Native)
This application demonstrates the available custom components using [Storybook](https://storybook.js.org/) and can be used as a sandbox during development/testing.

## Getting Started

### General

Dependencies must be installed before launching the app. This can be done by running `yarn install`.

### Android

To launch the app during development, a debug keystore is required. This is *not* committed to version control, and must therefore be created after pulling the repository. The steps are:
1. Run `keytool -genkey -v -keystore debug.keystore`
1. Follow the prompts
1. Move `debug.keystore` into `android/app/`

### iOS

Launching on iOS requires that cocoapods be installed. To do so:
1. Navigate to `ios/`
1. Run `pod install`

## Running the Demo
To run the demo app, run the following commands for each platform:
* iOS: `yarn ios`
* Android: `yarn android`

> NOTE: These commands are just aliases for `react-native run-ios` and `react-native run-android` respectively. For more information about these commands, refer to the [React Native documentation](https://facebook.github.io/react-native/docs/getting-started#running-your-react-native-application-1).

## Linking the Library

The component library must be added to `node_modules/` by running `./link-components.sh` in `<root_dir>/react-native/`. This will occur by default after running `yarn` or `yarn install`, but must be run again whenever the components library is updated.

Because this bypasses npm, library dependencies will not be installed during this process. It is therefore to add any dependencies used by the component library to this project. For the most part, that should be things like `@pxblue/colors`. This is not required when the project is published and used in another project.

## Troubleshooting

After new dependencies are installed, it may be necessary in some cases to run `pod install` in the `ios/` directory.


