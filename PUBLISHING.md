# Publishing Instructions

To update the version number, edit the version in `/components/package.json`. 

To publish a new package through NPM, run the following commands from the root folder: 

```sh
yarn build 
cd dist
npm publish --tag <alpha | beta>
```
Alternatively, you can run:

```sh
yarn build 
cd dist
yarn publish:package
```

which will automatically look at the version in the `package.json` and determine whether to publish an alpha, beta, or latest package. For this command to work, you must have an NPM token configured in your environment variables or you can perform a login prior to executing the publish command via `npm adduser && yarn publish:package`.

> The above commands should only be run manually for `alpha` or `beta` packages. Latest packages should only be published automatically by CircleCI once the code has been merged into the master branch.
