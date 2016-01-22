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

function tearDown {

    $DIR/www-stop.sh $SCRIPT
    exit 0
}

trap tearDown 0 1 2 3 6 9 15

#echo ${#DIR}
echo $SCRIPT
#echo $DEBUG

#/usr/local/bin/sshpass -p 'root' ssh root@radius.ml -p 50022 /www/start.sh $SCRIPT $DEBUG
$(which sshpass) -p 'root' ssh root@radius.ml -p 50022 /www/start.sh $SCRIPT $DEBUG
