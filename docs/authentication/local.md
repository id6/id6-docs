---
title: 'Local Authentication'
sidebar_label: 'Local'
description: 'Authenticating to id6 using email and password'
---

This authentication startegy lets your users register and sign in using an email and password. It features everything from registration to password reset.

```dotenv
ID6_MAIL_FROM: noreply@app.com
ID6_MAIL_HOST: localhost
ID6_MAIL_PORT: 1025
# optional auth config
ID6_MAIL_USERNAME: user
ID6_MAIL_PASSWORD: user
```

For development purposes, you can use [Mailhog](https://github.com/mailhog/MailHog) in your `docker-compose.yml`:

```yaml
version: "3"
services:
  # ...
  id6:
    # ...
    environment:
      ID6_MAIL_FROM: noreply@id6.sh
      ID6_MAIL_HOST: mailhog
      ID6_MAIL_PORT: 1025
  
  mailhog:
    image: mailhog/mailhog
    ports:
      - 127.0.0.1:8025:8025
      - 127.0.0.1:1025:1025
```
