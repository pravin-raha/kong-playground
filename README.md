# kong-playground 

Quick start for evaluating kong api gateway.

## Getting started

Spin up Kong and other service container using docker compose.

```shell script
cd docker
docker-compose up
```
Stop docker compose

```shell script
docker-compose stop
```

Tear down the complete Kong infrastructure.

```shell script
docker-compose down -v
```

## Service details

| Name                   | Url                          | Credentials     |
|------------------------|------------------------------|-----------------|
| Kong admin             | http://localhost:8001        |                 |
| Kong poxy              | http://localhost:8000        |                 |
| Kong UI                | http://localhost:9090        |                 |
| Keycloak               | http://localhost:8080        | kong/kong       |
| Grafana                | http://localhost:3000        | kong/kong       |
| Prometheus             | http://localhost:9091        | kong/kong       |
| Postgres               | localhost:5432               | kong/kong       |
| Open Policy Agent      |  http://localhost:8181       |                 |

## License

Copyright 2020 Pravin Rahangdale

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.