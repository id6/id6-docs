---
title: 'In-memory Authentication'
sidebar_label: 'In-memory'
path: 'in-memory'
description: 'Authenticating to id6 using in-memory user and password'
---

This authentication startegy lets you define users via an environment variable.

```dotenv
ID6_USERS="user:password,user2:password"
```

In the login page, you will now see an "in-memory" option. You can use the usernames and passwords defined above.
