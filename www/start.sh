#!/bin/sh


DEBUG=""

if [[ $2 == *"true"*  ]]
then
    DEBUG="--debug=9292"
fi
    
export DEBUG
    
function tearDown {
    
    echo "Finished."
    exit 0
}
            
trap tearDown 1 2 15
            
echo "Starting..."
            
#echo $1
            
#pwd/stop.sh $1 $DEBUG
pwd/stop.sh all

sleep 1

node --stack-size=32000 $DEBUG $1