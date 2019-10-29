
yarn
cd ./components
yarn
ng build channel-value
ng build hero
ng build empty-state
cd ..

# move core folder
rm -rf ./core
cp -r ./components/core ./core

# copy index
rm -rf ./core/index.ts
cp -r index.ts ./core/index.ts
