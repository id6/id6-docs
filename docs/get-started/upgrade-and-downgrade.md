---
title: 'Upgrade and downgrade'
---

:::danger

**Always backup** your data **before** upgrading **or** downgrading. **Seriously, do it.**

:::

Here is a convenient script for backing up your Docker volumes, assuming they are all mapped inside `/data`.

```bash
#!/usr/bin/env bash

containers=$(docker container ls -q)

backup_directory=~/backup/$(date +%Y-%m-%d-%H%M)
mkdir -p $backup_directory
cd $backup_directory

docker stop $containers

sudo tar -zcf data.tar.gz /data

docker start $containers
```

## Upgrade

1. Backup your volumes.
1. Run

    ```bash
    docker-compose pull
    docker-compose up -d
    ```

## Downgrading

Downgrading must be done **one version at a time** so that migrations are properly rolled back. For example, say you are using v1.1.0 and want to downgrade to v1.0.0. If there is v1.0.1 between v1.1.0 and v1.0.0, ou will have to downgrade from 1.1.0 to 1.0.1 then from 1.0.1 to 1.0.0.

Example downgrading from 1.1.0 to 1.0.1:

1. Backup your volumes.
1. Update your `docker-compose.yml`:

    ```yaml
    services:
      id6:
        image: id6io/id6:1.1.0
        # ...
        environment:
          ID6_MIGRATE_ROLLBACK: "true"
    ```

1. Run `docker-compose up -d`
1. Downgrade the id6 version and **remove** the `ID6_MIGRATE_ROLLBACK` environment variables:

    ```yaml
    services:
      id6:
        image: id6io/id6:1.0.1
        # ...
        environment:
          #ID6_MIGRATE_ROLLBACK: "true"
    ```

1. Run `docker-compose pull`
1. Run `docker-compose up -d`
