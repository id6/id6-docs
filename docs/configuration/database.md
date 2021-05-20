---
title: 'Database Configuration'
sidebar_label: 'Database'
---

## SQLite

SQLite is used by default. The database is located at `/data/id6.sqlite`.

## Postgres

To enable postgres, you can set the [`ID6_POSTGRES_URL`](/configuration/environment#id6_postgres_url) environment variable:

```dotenv
ID6_POSTGRES_URL=postgres://user:password@host:5432/db
```
