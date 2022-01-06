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

echo -e "${BLUE}Initializing Showcase Submodule...${NC}"
if [ ! -f ./demos/showcase/package.json ];
    then rm ./demos/showcase/.git & git submodule init && git submodule update;
    else echo -e "${BBLUE}Already initialized${NC}" && exit 0;
fi
echo -e "${BBLUE}Initialization Complete${NC}\r\n"
