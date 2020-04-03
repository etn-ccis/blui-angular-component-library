#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking Angular Components"
echo "Checking Root Package..."
cd dist
echo "Checking for required files..."
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./LICENSE ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Hero..."
echo -ne "  hero.component: "
if [ ! -f ./core/hero/hero.component.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking HeroBanner..."
echo -ne "  hero-banner.component: "
if [ ! -f ./core/hero/hero-banner.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking ChannelValue..."
echo -ne "  channel-value.component: "
if [ ! -f ./core/channel-value/channel-value.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking EmptyState..."
echo -ne "  empty-state.component: "
if [ ! -f ./core/empty-state/empty-state.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Scorecard..."
echo -ne "  scorecard.component: "
if [ ! -f ./core/score-card/scorecard.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "@pxblue/angular-components package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0
