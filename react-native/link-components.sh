#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building components...${NC}"
cd ./components
yarn prepublish
cd ..

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./component-demo/node_modules/@pxblue/react-native-components"
mkdir -p "./component-demo/node_modules/@pxblue/react-native-components"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./components/package.json ./component-demo/node_modules/@pxblue/react-native-components/package.json
cp -r ./components/dist ./component-demo/node_modules/@pxblue/react-native-components/dist
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BRED}Linking Components: ${NC}"
if [ ! -f ./component-demo/node_modules/@pxblue/react-native-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./component-demo/node_modules/@pxblue/react-native-components/dist ]; 
    then 
        if [ ! -f ./component-demo/node_modules/@pxblue/react-native-components/dist/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1; 
        fi;
fi
echo -e "${GRAY}Complete${NC}\r\n"