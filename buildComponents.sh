# Remove previous build
rm -rf ./core

yarn
cd ./components
yarn
ng build
cd ..

# copy index
# cp -r index.js ./core/index.js
