---
id: load_balancer
title: Load Balancer
sidebar_label: Load Balancer
---
## Add two instance of user-service

```shell script
docker run -d -e COLOR_NAME=RED -p 8090:8080 --network docker_kong-net --name userservice_red pravin41/userservice:0.0.1

docker run -d -e COLOR_NAME=GREEN -p 8091:8080 --network docker_kong-net --name userservice_green  pravin41/userservice:0.0.1
```
## Ring Load Balancer

### Create upstream

```shell script
curl -X POST http://localhost:8001/upstreams  \
    --data "name=user.v1.service"
```

### Add two targets to the upstream

```shell script
curl -X POST http://localhost:8001/upstreams/user.v1.service/targets \
    --data "target=userservice_RED:8080" \
    --data "weight=100"
curl -X POST http://localhost:8001/upstreams/user.v1.service/targets \
    --data "target=userservice_green:8080" \
    --data "weight=50"
```
