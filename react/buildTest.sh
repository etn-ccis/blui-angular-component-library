#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking React Components"
echo "Checking Root Package..."
echo "Checking for required files..."
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./LICENSE ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Hero..."
echo -ne "  Hero.js: "
if [ ! -f ./core/Hero/Hero.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./core/Hero/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking HeroBanner..."
echo -ne " HeroBanner.js:  "
if [ ! -f ./core/HeroBanner/HeroBanner.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./core/HeroBanner/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Channel Value..."
echo -ne "  ChannelValue.js: "
if [ ! -f ./core/ChannelValue/ChannelValue.js  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./core/ChannelValue/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Empty State..."
echo -ne "  EmptyState.js: "
if [ ! -f ./core/EmptyState/EmptyState.js  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./core/EmptyState/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "@pxblue/react-components package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0
