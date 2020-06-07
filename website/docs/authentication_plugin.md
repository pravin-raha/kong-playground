---
id: authentication_plugin
title: Authentication plugin
sidebar_label: Authentication plugin
---

## Adding OIDC plugin
### Enabling the plugin on a Service.
Configure this plugin on a Service by making the following request:

```shell script
curl -X POST http://localhost:8001/services/{ID}/plugins \
    --data "name=oidc"  \
    --data "config.client_id=kong" \
    --data "config.client_secret=29d98bf7-168c-4874-b8e9-9ba5e7382fa0" \
    --data "config.discovery=http://{ip}:8080/auth/realms/kong/.well-known/openid-configuration" \
    --data "config.introspection_endpoint=http://{ip}:8080/auth/realms/kong/protocol/openid-connect/token/introspect" \
    --data "config.bearer_only=yes"
```

## Adding ACL plugin
### Enabling the plugin on a Service.
Configure this plugin on a Service by making the following request:

```shell script
curl -X POST http://localhost:8001/services/{ID}/plugins \
    --data "name=oidc-acl"  \
    --data "config.whitelist=admin" \
    --data "config.whitelist=user"
```
