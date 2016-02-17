#!/bin/bash

DIR=`dirname $0`
DIR_LEN=${#DIR}
DEBUG=false

if [[ $1 == *"--debug"* ]]
then
    SCRIPT=$2
    DEBUG=true
else
    SCRIPT=$1
fi

SCRIPT=${SCRIPT:DIR_LEN}

export DIR
export SCRIPT
export DEBUG

#function tearDown {
#
#    $DIR/www-stop.sh $SCRIPT
#    exit 0
#}

#trap tearDown 0 1 2 3 6 9 15

#echo ${#DIR}
#echo $SCRIPT
echo "Debugging: $DEBUG"

LANG="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_CTYPE="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_ALL=

$(which ionic) run android -c -s -l --address radius.ml --device
