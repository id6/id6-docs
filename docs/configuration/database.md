---
title: 'Database Configuration'
sidebar_label: 'Database'
---

## SQLite

SQLite is used by default. The database is located at `/data/id6.sqlite`. You can change the directory by setting the [`ID6_DATA_DIR`](/configuration/environment#id6_data_dir) environment variable.

## Postgres

To enable postgres, you can set the [`ID6_POSTGRES_URL`](/configuration/environment#id6_postgres_url) environment variable:

```dotenv
ID6_POSTGRES_URL=postgres://user:password@host:5432/db
```
