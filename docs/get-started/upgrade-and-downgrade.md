---
title: 'Upgrade and downgrade'
---

Always backup your data before upgrading or downgrading. Here is a quick backup script:

```bash
#!/usr/bin/env bash

containers=$(docker container ls -q)

backup_directory=~/backup/$(date +%Y-%m-%d-%H%M)
mkdir -p $backup_directory
cd $backup_directory

docker stop $containers

sudo tar -zcf data.tar.gz /data
#sudo tar -zcf docker.tar.gz /docker

docker start $containers
```

## Upgrade

### With Docker

```shell script
docker stop id6
docker pull id6io/id6
docker start id6
```

### With Docker Compsoe

```bash
docker-compose pull
docker-compose up -d
```

## Downgrading

Downgrading must be done **one version at a time** so that migrations are properly rolled back. For example, say you are using v1.1.0 and want to downgrade to v1.0.0. If there is v1.0.1 between v1.1.0 and v1.0.0. You will have to:
- downgrade from 1.1.0 to 1.0.1
- downgrade from 1.0.1 to 1.0.0

For example, downgrading from 1.1.0 to 1.0.0:

```shell script
# stop server
docker stop id6
# backup volumes
cp -r /data/id6 /data/id6.bak

# downgrade to 1.0.1

# rollback migrations of 1.1.0
docker run --cmd 'typorm migrate:rollback' id6io/id6:1.1.0
# pull previous version (1.0.1)
docker pull id6io/id6:1.0.1

# downgrade to 1.0.0

# rollback migrations of 1.0.1
docker --cmd 'typorm migrate:rollback' run id6io/id6:1.0.1
# pull previous version (1.0.0)
docker pull id6io/id6:1.0.0

# start normally
docker run id6io/id6:1.0.0
```
