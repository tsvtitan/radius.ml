
docker build --rm -t tsvtitan/radius.ml:date-time .

docker exec -it $(docker run --privileged -d -h radius.ml -p 50022:22 -p 9292:9292 -p 51337:1337 -p 56379:6379 -p 57017:27017 tsvtitan/radius.ml:date-time) /bin/bash

docker commit container tsvtitan/radius.ml:`date +"%Y%m%d-%H%M%S"`

docker push tsvtitan/radius.ml:date-time



