If your repo contains few files which is removed from MASTER

git checkout master
git fetch origin
git reset --hard origin/master
git checkout -b newbranch
