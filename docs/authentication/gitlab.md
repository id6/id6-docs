---
title: 'Gitlab Authentication'
sidebar_label: 'GitLab'
description: 'Authenticating to id6 using Gitlab'
---

From your Gitlab **admin area**, [add a new application](https://docs.gitlab.com/ee/integration/oauth_provider.html#adding-an-application-through-the-profile) with the following settings:

| Field | Value |
| ---- | ---- |
| Name   | id6 | 
| Redirect URL | `<id6-server-url>/auth/gitlab/callback` |
| Trusted / Confidential | true |
| Scopes | api |

After creating the application, Gitlab will give you both the **Client ID** and **Client Secret**, which they respectively name **Application ID** and **Application Secret**.

:::caution

You may need to check "Allow requests to the local network from web hooks and services" in **Admin / Settings / Network / Outbound requests** for webhooks to be sent to id6.

:::

Now, you can update your `docker-compose.yml`:

```yaml
# ...
services:
  # ...
  id6:
    # ...
    environment:
      # ...
      ID6_GITLAB_CLIENT_ID: <your-gitlab-application-id>
      ID6_GITLAB_CLIENT_SECRET: <your-gitlab-application-secret>
      ID6_GITLAB_URL: http://10.0.1.23:3003
      # restrict access to your Gitlab group
      ID6_GITLAB_GROUPS: my-org-1,my-org-2
```
