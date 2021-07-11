#!/bin/bash

yarn build
docker build -t famex-react:latest .
docker tag famex-react:latest 979548132360.dkr.ecr.ap-southeast-1.amazonaws.com/famex-react:latest
docker push 979548132360.dkr.ecr.ap-southeast-1.amazonaws.com/famex-react:latest
