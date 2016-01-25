#!/bin/bash

echo "Stopping..."

SCRIPT=$1
DEBUG=$2

export SCRIPT
export DEBUG

#pm2 stop all

if [[ $SCRIPT == *"all"* ]] && pgrep -f "node"
then
    kill -9 $(pgrep -f "node")
else 
    if pgrep -f "node --stack-size=32000 $DEBUG $SCRIPT"
    then
	kill -9 $(pgrep -f "node --stack-size=32000 $DEBUG $SCRIPT")
    else
	echo "No node processes."
    fi
fi

if pgrep -f "grunt"
then
    kill -9 $(pgrep -f "grunt")
fi

echo "Done."