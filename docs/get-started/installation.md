---
title: 'Installation'
---

Examples below use [in-memory](/authentication/in-memory) authentication, but there are [other methods](/#authentication-methods) available. Feel free to [add authentication methods yourself](https://github.com/id6/id6#adding-new-auth-methods).

## Production installation

Requirements:
- a VPS with at least 150Mb RAM and 500Mb hard drive (enough for pulling docker images, but id6 uses just a few Mb of hard drive at runtime)
- [Docker Compose](https://docs.docker.com/compose/gettingstarted/) installed on the machine

:::info

Id6 does not ship with SSL support. This example uses [Traefik](https://github.com/traefik/traefik) as a reverse proxy for handling automatic SSL configuration, but you may use any other reverse proxies like [Nginx](https://www.nginx.com/) or [Caddy](https://caddyserver.com/).

:::

Create a file named `docker-compose.yml`:

```yaml
version: '3.7'
services:

  traefik:
    image: traefik:2.3
    restart: unless-stopped
    command:
      - '--accesslog=true'
      - '--providers.docker=true'
      - '--entrypoints.web.address=:80'
      - '--entrypoints.websecure.address=:443'
      - '--providers.docker.exposedbydefault=false'
      - '--entrypoints.web.http.redirections.entrypoint.to=websecure'
      - '--entrypoints.web.http.redirections.entrypoint.scheme=https'
      - '--certificatesresolvers.letsencrypt.acme.email=info@id6.io'
      - '--certificatesresolvers.letsencrypt.acme.storage=/acme.json'
      - '--certificatesresolvers.letsencrypt.acme.tlschallenge=true'
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /data/traefik/acme.json:/acme.json

  id6:
    image: id6io/id6
    restart: unless-stopped
    ports:
      # authentication (login page + user api)
      - 3000:3000
      # authorization (verify tokens from your backends)
      - 3030:3030
    environment:
      ID6_URL: https://authenticate.company.com
      # where your users should be redirected after login
      ID6_REDIRECT_URL: https://app.company.com
      # secret used to sign/verify jwt tokens
      ID6_JWT_SECRET: ${ID6_JWT_SECRET?ID6_JWT_SECRET}
      # secret used to access the authorization API
      ID6_AUTHORIZATION_SECRET: ${ID6_AUTHORIZATION_SECRET?ID6_AUTHORIZATION_SECRET}
      # email/password auth
      ID6_MAIL_HOST: "smtp.company.com"
      ID6_MAIL_PORT: 587
      ID6_MAIL_USERNAME: auth@company.com
      ID6_MAIL_FROM: auth@company.com
      ID6_MAIL_PASSWORD: ${ID6_MAIL_PASSWORD?ID6_MAIL_PASSWORD}
    labels:
      - "traefik.enable=true"
      # authentication endpoint
      - "traefik.http.routers.authenticate.rule=Host(`authenticate.company.com`)"
      - "traefik.http.routers.authenticate.tls=true"
      - "traefik.http.routers.authenticate.tls.certresolver=letsencrypt"
      - "traefik.http.services.authenticate.loadbalancer.server.port=3000"
      # authorization endpoint
      - "traefik.http.routers.authorize.rule=Host(`authorize.company.com`)"
      - "traefik.http.routers.authorize.tls=true"
      - "traefik.http.routers.authorize.tls.certresolver=letsencrypt"
      - "traefik.http.services.authorize.loadbalancer.server.port=3030"
```

Create a `.env` file next to your `docker-compose.yml`:

```dotenv
ID6_MAIL_PASSWORD=<your-email-password>
ID6_JWT_SECRET=changeMe # openssl rand -hex 32
ID6_AUTHORIZATION_SECRET=changeMe # openssl rand -hex 32
```

Run `docker-compose up -d`. Your login page should be available at `https://authenticate.company.com`. Your backends can authorize users using `https://authorize.company.com`.

## Local installation

Create a file named `docker-compose.yml`:

 ```yaml
version: "3"

services:

  id6:
    image: id6io/id6
    restart: unless-stopped
    ports:
      # authentication (login page + user api)
      - 3000:3000
      # authorization (verify tokens from your backends)
      - 3030:3030 
    environment:
      ID6_URL: http://localhost:3000
      # where your users should be redirected after login
      ID6_REDIRECT_URL: http://localhost:4000
      # secret used to sign/verify jwt tokens
      ID6_JWT_SECRET: changeMe
      # secret used to access the authorization API
      ID6_AUTHORIZATION_SECRET: changeMe
      # in-memory authentication
      ID6_USERS: "user:password,user2:password2"
```

Run `docker-compose up -d`.
