#!/bin/bash

docker build -t famex:latest .
docker tag famex:latest 979548132360.dkr.ecr.ap-southeast-1.amazonaws.com/famex-react:latest
docker push 979548132360.dkr.ecr.ap-southeast-1.amazonaws.com/famex-react:latest
