---
title: 'Environment variables'
sidebar_label: 'Environment'
---

## DEBUG

**Default**: none

**Required**: no

**Type**: string

**Description**:

Enable debug logs. We use the [debug](https://www.npmjs.com/package/debug) Npm package with scope `id6*`. To enable logs, use `DEBUG=id6*`. The scope for database logs is `id6.db`

## ID6\_NAME

**Default**: app

**Required**: no

**Type**: string

**Description**:

Name of your app

## ID6\_LOGO

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

URL of your app logo

## ID6\_TERMS\_URL

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

URL of your terms of service

## ID6\_PORT

**Default**: 3001

**Required**: yes

**Type**: number

**Description**:

The port on which id6 is listening.

## ID6\_URL

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

URL of your id6 instance

## ID6\_REDIRECT\_URL

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

URL to which your users should be redirected after login

## ID6\_AUTHORIZATION\_PORT

**Default**: 3030

**Required**: no

**Type**: number

**Description**:

Port on which the authorization server is listening. This can be useful when your

## ID6\_JWT\_SECRET

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Secret used to sign and verify JWT tokens. Can be generated with `openssl rand -hex 32`.

## ID6\_JWT\_TOKEN\_EXPIRATION

**Default**: 2592000000

**Required**: yes

**Type**: number

**Description**:

Expiration time (in ms) for JWT tokens.

## ID6\_TOKEN\_EXPIRATION

**Default**: 2592000000

**Required**: yes

**Type**: number

**Description**:

Expiration time (in ms) for regular tokens (password reset...).

## ID6\_GITLAB\_URL

**Default**: https://gitlab.com

**Required**: yes

**Type**: string

**Description**:

Your Gitlab URL.

## ID6\_GITLAB\_CLIENT\_ID

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Your Gitlab app Client ID.

## ID6\_GITLAB\_CLIENT\_SECRET

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Your Gitlab app Client Secret.

## ID6\_GITLAB\_GROUPS

**Default**: undefined

**Required**: yes

**Type**: any

**Description**:

Comma-separated list of Gitlab groups. Allows you to restrict login to only members of the given groups.

## ID6\_GITEA\_URL

**Default**: https://gitea.com

**Required**: yes

**Type**: string

**Description**:

Your Gitea URL.

## ID6\_GITEA\_CLIENT\_ID

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Your Gitea app Client ID.

## ID6\_GITEA\_CLIENT\_SECRET

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Your Gitea app Client Secret.

## ID6\_GITEA\_ORGS

**Default**: undefined

**Required**: yes

**Type**: any

**Description**:

Comma-separated list of Gitea organizations. Allows you to restrict login to only members of the given organizations.

## ID6\_GITHUB\_URL

**Default**: https://github.com

**Required**: yes

**Type**: string

**Description**:

Your Github URL.

## ID6\_GITHUB\_CLIENT\_ID

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Your Github app Client ID.

## ID6\_GITHUB\_CLIENT\_SECRET

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Your Github app Client Secret.

## ID6\_GITHUB\_ORGS

**Default**: undefined

**Required**: yes

**Type**: any

**Description**:

Comma-separated list of Github organizations. Allows you to restrict login to only members of the given organizations.

## ID6\_GOOGLE\_CLIENT\_ID

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Your Google app Client ID.

## ID6\_GOOGLE\_CLIENT\_SECRET

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Your Google app Client Secret.

## ID6\_COOKIE\_SAMESITE

**Default**: null

**Required**: yes

**Type**: string

**Description**:

Allows you to set the [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) property for cookies defined by the server. Useful when your id6 server has a different host or URL than your UI.

## ID6\_COOKIE\_SECURE

**Default**: false

**Required**: yes

**Type**: boolean

**Description**:

Allows you to set the [Secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) property for cookies defined by the server. Some browsers, like Chrome, require it to be `true` to use cookies for cross site requests (which implies you need a secure backend).

## ID6\_RATE\_LIMIT\_WINDOW

**Default**: 60000

**Required**: yes

**Type**: number

**Description**:

Applies to the authentication server only. Window size for rate limiting, in ms.

## ID6\_RATE\_LIMIT\_MAX\_PER\_WINDOW

**Default**: 100

**Required**: yes

**Type**: number

**Description**:

Applies to the authentication server only. Max number of requests allows in the rate limiting window.

## ID6\_AUTHORIZATION\_RATE\_LIMIT\_WINDOW

**Default**: 60000

**Required**: yes

**Type**: number

**Description**:

Applies to the authorization server only. Window size for rate limiting, in ms.

## ID6\_AUTHORIZATION\_RATE\_LIMIT\_MAX\_PER\_WINDOW

**Default**: 100

**Required**: yes

**Type**: number

**Description**:

Applies to the authorization server only. Max number of requests allows in the rate limiting window.

## ID6\_PROMETHEUS\_ENABLED

**Default**: false

**Required**: no

**Type**: boolean

**Description**:

Whether to start the prometheus server.

## ID6\_PROMETHEUS\_HOST

**Default**: localhost

**Required**: no

**Type**: string

**Description**:

Prometheus host.

## ID6\_PROMETHEUS\_PORT

**Default**: 9090

**Required**: yes

**Type**: number

**Description**:

Prometheus port.

## ID6\_PROMETHEUS\_REFRESH\_RATE

**Default**: 10000

**Required**: yes

**Type**: number

**Description**:

How often prometheus metrics shouls be refreshed.

## ID6\_PROMETHEUS\_METRICS\_PREFIX

**Default**: id6_

**Required**: yes

**Type**: string

**Description**:

Prometheus metric prefix.

## ID6\_MAIL\_HOST

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Mail host.

## ID6\_MAIL\_PORT

**Default**: undefined

**Required**: no

**Type**: number

**Description**:

Mail port.

## ID6\_MAIL\_USERNAME

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Mail username.

## ID6\_MAIL\_PASSWORD

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Mail password.

## ID6\_MAIL\_FROM

**Default**: noreply@localhost

**Required**: no

**Type**: string

**Description**:

Mail form. Some mail providers (like OVH) force this email to equal the mail username.

## ID6\_MAIL\_SUBJECT\_PREFIX

**Default**: id6 |

**Required**: no

**Type**: string

**Description**:

Prefix of email subjects.

## ID6\_MAIL\_TEMPLATE\_DIR

**Default**: /Users/geoffroy/dev/git/id6/id6/server/src/env/emails/templates

**Required**: no

**Type**: string

**Description**:

Directory where mail templates can be found.

## ID6\_USERS

**Default**: undefined

**Required**: yes

**Type**: any

**Description**:

Comma-separated list of user/password for in-memory authentication. Example: "user:password,user2:password2".

## ID6\_AUTHORIZATION\_SECRET

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Secret for making requests to the authorization API.

## ID6\_POSTGRES\_URL

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Postgres URL if you are using a postgres database.

## ID6\_MIGRATE\_ROLLBACK

**Default**: false

**Required**: no

**Type**: boolean

**Description**:

Set to `true` to rollback the last migration

## ID6\_DATA\_DIR

**Default**: /Users/geoffroy/dev/git/id6/id6/data

**Required**: no

**Type**: string

**Description**:

Path of the directory where we store data.
