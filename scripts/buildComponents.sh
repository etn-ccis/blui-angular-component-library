# Remove previous build
rm -rf ./dist

yarn
cd ./components
yarn
ng build
cd ..
