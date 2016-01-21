#!/bin/sh

SCRIPT=$1

export SCRIPT

#echo $SCRIPT

/usr/local/bin/sshpass -p 'root' ssh root@radius.ml -p 50022 /www/stop.sh $SCRIPT