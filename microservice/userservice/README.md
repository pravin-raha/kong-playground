# User service

Simple service to get user info from kong when oidc plugin is enable.

# Prerequisite

* Java 8
* sbt

# Build

This will create docker image.
```shell script
sbt docker:publishLocal
```

# Getting started

```shell script
docker run -d -e COLOR_NAME=BLUE -p 8090:8080 --name userservice userservice:0.0.1-SNAPSHOT
```