#!/bin/sh

## 
temp_image=build-slim-dist-1


## build jar
docker build .. --force-rm --no-cache -t $temp_image

if [ -d dist ];then
  rm -rf dist
fi
echo docker run --rm -v ${PWD}/dist:/var/dist $temp_image
docker run --rm -v ${PWD}/dist:/var/dist $temp_image


ls dist/*
docker image rm $temp_image
