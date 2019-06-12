#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking Angular Components"
echo "Checking Root Package..."
echo "Checking for required files..."
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./LICENSE ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Hero..."
echo -ne "  hero.component: "
if [ ! -f ./core/hero/lib/hero/hero.component.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking HeroBanner..."
echo -ne "  hero-banner.component: "
if [ ! -f ./core/hero/lib/hero-banner/hero-banner.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking ChannelValue..."
echo -ne "  channel-value.component: "
if [ ! -f ./core/channel-value/lib/channel-value.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi


echo -e "\r\n${GREEN}-----------------------------------"
echo -e "@pxblue/angular-components package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0