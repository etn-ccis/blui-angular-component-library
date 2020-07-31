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

echo "Checking ChannelValue..."
echo -ne "  channel-value.component: "
if [ ! -f ./core/channel-value/channel-value.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Drawer..."
echo -ne "  drawer.component: "
if [ ! -f ./core/drawer/drawer.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Dropdown Toolbar..."
echo -ne "  dropdownToolbar.component: "
if [ ! -f ./core/dropdown-toolbar/dropdown-toolbar.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking EmptyState..."
echo -ne "  empty-state.component: "
if [ ! -f ./core/empty-state/empty-state.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Hero..."
echo -ne "  hero.component: "
if [ ! -f ./core/hero/hero.component.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking HeroBanner..."
echo -ne "  hero-banner.component: "
if [ ! -f ./core/hero/hero-banner.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking InfoListItem..."
echo -ne "  info-list-item.component: "
if [ ! -f ./core/info-list-item/info-list-item.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking ListItemTag..."
echo -ne "  list-item-tag.component: "
if [ ! -f ./core/list-item-tag/list-item-tag.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking ScoreCard..."
echo -ne "  score-card.component: "
if [ ! -f ./core/score-card/score-card.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Spacer..."
echo -ne "  spacer.component: "
if [ ! -f ./core/utility/spacer.module.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking UserMenu..."
echo -ne "  user-menu.component: "
if [ ! -f ./core/user-menu/user-menu.component.d.ts  ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "@pxblue/angular-components package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0
