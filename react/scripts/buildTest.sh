#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

cd ../dist
echo "Checking React Components"
echo "Checking Root Package..."
echo "Checking for required files..."
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./LICENSE ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  changelog: "
if [ ! -f ./CHANGELOG.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

cd core
echo "Checking Channel Value..."
echo -ne "  ChannelValue.js: "
if [ ! -f ./ChannelValue/ChannelValue.js  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./ChannelValue/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Empty State..."
echo -ne "  EmptyState.js: "
if [ ! -f ./EmptyState/EmptyState.js  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./EmptyState/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Hero..."
echo -ne "  Hero.js: "
if [ ! -f ./Hero/Hero.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./Hero/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking HeroBanner..."
echo -ne " HeroBanner.js:  "
if [ ! -f ./HeroBanner/HeroBanner.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./HeroBanner/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking InfoListItem..."
echo -ne " InfoListItem.js:  "
if [ ! -f ./InfoListItem/InfoListItem.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./InfoListItem/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking ScoreCard..."
echo -ne " ScoreCard.js:  "
if [ ! -f ./ScoreCard/ScoreCard.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./ScoreCard/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Drawer..."
echo -ne " Drawer.js:  "
if [ ! -f ./Drawer/Drawer.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./Drawer/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking DrawerLayout..."
echo -ne " DrawerLayout.js:  "
if [ ! -f ./DrawerLayout/DrawerLayout.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./DrawerLayout/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Utilities..."
echo -ne " Spacer.js:  "
if [ ! -f ./Utility/Spacer.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./Utility/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking ListItemTag..."
echo -ne " ListItemTag.js:  "
if [ ! -f ./ListItemTag/ListItemTag.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./ListItemTag/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking UserMenu..."
echo -ne " UserMenu.js:  "
if [ ! -f ./UserMenu/UserMenu.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne " index.js:  "
if [ ! -f ./UserMenu/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi



echo -e "\r\n${GREEN}-----------------------------------"
echo -e "@pxblue/react-components package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0
