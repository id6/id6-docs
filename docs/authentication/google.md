---
title: 'Google Authentication'
sidebar_label: 'Google'
description: 'Authenticating to id6 using Google'
---

1. Create a new Google application.
1. Configure the OAuth consent screen, the callback URL should be `<your-id6-server-url>/auth/google/callback`
1. Create OAuth credentials
1. Get your client ID and client secret

Now, you can update your `docker-compose.yml`:

```yaml
services:
  # ...
  id6:
    # ...
    environment:
      # ...
      ID6_GOOGLE_CLIENT_ID: <your-google-oauth-app-client-id>
      ID6_GOOGLE_CLIENT_SECRET: <your-google-oauth-app-client-secret>
``` 
