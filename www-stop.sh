#!/bin/bash

SCRIPT=$1

export SCRIPT

#echo $SCRIPT

$(which sshpass) -p 'root' ssh root@radius.ml -p 50022 /www/stop.sh $SCRIPT