---
title: 'Gitea Authentication'
sidebar_label: 'Gitea'
description: 'Authenticating to id6 using Gitea'
---

In **Settings / Applications**, add an OAuth application with the following settings:

| Field | Value |
| ---- | ---- |
| Application name   | id6 | 
| Authorization callback URL | `<id6-server-url>/auth/gitea/callback` |

Copy your **Client ID** and **Client secret**.

Now, you can update your `docker-compose.yml`:

```yaml
# ...
services:
  # ...
  id6:
    # ...
    environment:
      # ...
      ID6_GITEA_CLIENT_ID: <your-gitea-client-id>
      ID6_GITEA_CLIENT_SECRET: <your-gitea-client-secret>
      ID6_GITEA_URL: http://10.0.1.23:3003
      # restrict access to your Gitea organizations
      ID6_GITEA_ORGS: my-org-1,my-org-2
```
