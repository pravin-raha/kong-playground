---
id: rate_limit
title: Rate limit plugin
sidebar_label: Rate limit plugin
---

## Configuration

### Enabling the plugin on a Service.
Configure this plugin on a Service by making the following request:

```shell script
curl -X POST http://localhost:8001/services/httpbin/plugins \
    --data "name=rate-limiting"  \
    --data "config.minute=5" \
    --data "config.hour=10000" \
    --data "config.policy=local"
```

### Enabling the plugin on a Route.
Enabling the plugin on a Route with:

```shell script
curl -X POST http://localhost:8001/routes/get/plugins \
    --data "name=rate-limiting"  \
    --data "config.minute=5" \
    --data "config.hour=10000" \
    --data "config.policy=local"
```

### Enabling the plugin on a Consumer.
Configure this plugin on a Consumer with:

```shell script
curl -X POST http://localhost:8001/consumers/{consumer}/plugins \
    --data "name=rate-limiting"  \
    --data "config.second=5" \
    --data "config.hour=10000" \
    --data "config.policy=local"
```
