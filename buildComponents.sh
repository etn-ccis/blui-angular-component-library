
cd ./components
yarn
ng build channel-value
ng build hero
cd ..

# move core folder
rm -rf ./core
cp -r ./components/core ./core