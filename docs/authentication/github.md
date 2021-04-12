---
title: 'GitHub Authentication'
sidebar_label: 'GitHub'
description: 'Authenticating to id6 using GitHub'
---

In Github, go to **Settings / Developer Settings / OAuth Apps** and add a new OAuth app with the following settings:

| Field | Value |
| ---- | ---- |
| Application name   | id6 | 
| Homepage URL   | https://id6.sh | 
| Authorization callback URL | `<id6-server-url>/auth/github/callback` |

Now, you can update your `docker-compose.yml`:

```yaml
# ...
services:
  # ...
  id6:
    # ...
    environment:
      # ...
      ID6_GITHUB_CLIENT_ID: <your-github-oauth-app-client-id>
      ID6_GITHUB_CLIENT_SECRET: <your-github-oauth-app-client-secret>
      # restrict access to your Github organizations
      ID6_GITHUB_ORGS: my-org-1,my-org-2
```

:::caution

When authorizing your Github account, you **will** need to grant access to each organization separately for the server to see it. Otherwise, if `ID6_GITHUB_ORGS` is set, you will be denied access to id6. If you have specifically denied access to id6 for a given organization, you can revoke this ban by going to your organization settings under **Third party access**.

:::
