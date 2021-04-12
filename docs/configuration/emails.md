---
title: 'Email configuration'
sidebar_label: 'Emails'
description: 'Learn how to configure emails for id6'
---

By default id6 prints emails to the console. However, you can configure credentials to a proper email service as follows:

```shell script
ID6_MAIL_FROM: noreply@id6.sh
ID6_MAIL_HOST: smtp.company.com
ID6_MAIL_PORT: 1025
ID6_MAIL_USERNAME: user
ID6_MAIL_PASSWORD: password
```

For development purposes, you can use [Mailhog](https://github.com/mailhog/MailHog):

```yaml title=docker-compose.yml
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
