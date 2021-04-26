# Publishing Instructions

## Automatic Publishing

This package is published to NPM automatically by CircleCI when code is merged into the `dev` or `master` branches. To publish a new version, simply update the version in `package.json` and merge your code into the appropriate branch.
- The `dev` branch will publish versions marked as `alpha` or `beta`.
- The `master` branch will publish any version (`alpha`, `beta`, or `latest`).
  In both cases, the code will only be published if the version number differs from the current version published under the respective dist tag.

## Manually Publishing

If you need to publish a package manually, you can run the following commands from the root folder:

```sh
yarn build 
yarn publish:package
```

The publishing script will look at the version in the `package.json` and automatically determine whether to publish an alpha, beta, or latest package.

For this command to work, you must have an NPM token configured in your environment variables or you can perform a login prior to executing the publish command via:

```sh
yarn build 
npm adduser && yarn publish:package
```

> Publishing manually should only be done for `alpha` or `beta` packages. The command will work for `latest` packages, but this should be avoided except in rare situations where the automatic publishing functionality is not working in CircleCI.
