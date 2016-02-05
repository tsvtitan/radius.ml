#!/bin/bash

echo "Pulling..."

git checkout master

git fetch origin

git reset --hard origin/master

git pull

echo "Done."
