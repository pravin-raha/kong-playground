---
id: route_and_service
title: Route and Service
sidebar_label: Route and Service
---

## Configure Service.

```shell script
curl -i -X POST http://localhost:8001/services \
 --data name=httpbin \
 --data url='http://httpbin.org'
```

### Verify the service’s endpoint.

```shell script
curl -i http://localhost:8001/services/httpbin
```

## Configure Route.

```shell script
curl -i -X POST http://localhost:8001/services/httpbin/routes \
--data 'paths[]=/get' \
--data 'name=get' \
--data 'strip_path=false'
```

### Verify the Route is forwarding requests to the Service.

```shell script
curl -i -X GET http://localhost:8000/get
```
