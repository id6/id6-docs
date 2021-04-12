---
title: 'Environment variables'
sidebar_label: 'Environment'
---

## DEBUG

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Enable debug logs. We use the [debug](https://www.npmjs.com/package/debug) Npm package with scope `id6*`. To enable logs, use `DEBUG=id6*`.

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

Public URL where id6 is served.

## ID6\_URL\_INTERNAL

**Default**: `id6_URL`

**Required**: no

**Type**: string

**Description**:

Setting this variable only makes sense when Caddy is deployed as a standalone container. It sets the URL where the id6 API can be accessed internally. In local development, you would set this to `http://host.docker.internal:3001`. In a production `docker-compose.yml`, you would set it to something like `http://api` if your API container is named `api`.

## ID6\_UI\_URL

**Default**: `id6_URL`

**Required**: no

**Type**: string

**Description**:

Public URL where the UI is served. Setting this variable makes sense when you are deploying the UI elsewhere than on `id6_URL`.

## ID6\_UI\_URL\_INTERNAL

**Default**: `id6_URL`

**Required**: no

**Type**: string

**Description**:

Setting this variable only makes sense when Caddy is deployed as a standalone container. It sets the URL where the id6 UI can be accessed internally. In local development, you would set this to `http://host.docker.internal:3000`. In a production `docker-compose.yml`, you would set it to something like `http://ui` if your UI container is named `ui`.

## ID6\_SITES\_URL

**Default**: `id6_URL`

**Required**: no

**Type**: string

**Description**:

This is where your sites are served. Setting this variables allows you to serve your sites with a different domain than that used to access id6.

## ID6\_STANDALONE

**Default**: false

**Required**: no

**Type**: boolean

**Description**:

When enabled, id6 will not configure the UI and API in Caddy. This variables only makes sense when you are deploying all containers separately.

## ID6\_UI\_DIR

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

When set, the UI will be served from this path. Otherwise, it is reverse-proxied to `id6_UI_URL_INTERNAL`.

## ID6\_JWT\_SECRET

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

Secret used to sign and verify JWT tokens. Can be generated with `openssl rand -hex 32`.

## ID6\_JWT\_TOKEN\_EXPIRATION

**Default**: 2592000000 (30 days)

**Required**: yes

**Type**: number

**Description**:

Expiration time (in ms) for JWT tokens.

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

## ID6\_GITEA\_URL

**Default**: https://gitea.com

**Required**: yes

**Type**: string

**Description**:

Your Gitea URL.

## ID6\_GITLAB\_GROUPS

**Default**: undefined

**Required**: no

**Type**: array

**Description**:

Comma-separated list of Gitlab groups. Allows you to restrict login to only members of the given groups.

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

**Required**: no

**Type**: array

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

**Required**: no

**Type**: array

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

## ID6\_MONGO\_URI

**Default**: undefined

**Required**: yes

**Type**: string

**Description**:

URI of Mongo instance where id6 should store its data.

## ID6\_MIGRATE\_ROLLBACK

**Default**: false

**Required**: yes

**Type**: boolean

**Description**:

Forces the server to rollback the last migration, then exit. Use this when you're trying to [downgrade](/get-started/upgrade-and-downgrade).

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

Window size for rate limiting, in ms.

## ID6\_RATE\_LIMIT\_MAX\_PER\_WINDOW

**Default**: 100

**Required**: yes

**Type**: number

**Description**:

Max number of requests allows in the rate limiting window.

## ID6\_PROMETHEUS\_HOST

**Default**: localhost

**Required**: no

**Type**: string

**Description**:

Host where the Prometheus server should listen.

## ID6\_PROMETHEUS\_PORT

**Default**: 3002

**Required**: yes

**Type**: number

**Description**:

Port where the Prometheus server should listen.

## ID6\_PROMETHEUS\_REFRESH\_RATE

**Default**: 10000

**Required**: yes

**Type**: number

**Description**:

How often to refresh Prometheus metrics.

## ID6\_PROMETHEUS\_METRICS\_PREFIX

**Default**: id6_server_

**Required**: yes

**Type**: string

**Description**:

Prefix used for Prometheus metrics.

## ID6\_REDIS\_URL

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Redis URL for proxying websockets connections. This allows you to run multiple instance of the id6 API in parallel.

## ID6\_HOOK\_TIMEOUT

**Default**: 5000

**Required**: yes

**Type**: number

**Description**:

How much time hook requets should wait before failing.

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

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Mail form. Some mail providers (like OVH) force this email to equal the mail username.

## ID6\_MAIL\_SUBJECT\_PREFIX

**Default**: id6 |

**Required**: no

**Type**: string

**Description**:

Mail subject prefix.

## ID6\_MAIL\_TEMPLATE\_DIR

**Default**: ./emails/templates

**Required**: no

**Type**: string

**Description**:

Directory where mail templates can be found.

## ID6\_SENTRY\_ENABLED

**Default**: true

**Required**: yes

**Type**: boolean

**Description**:

Whether to enabled [Sentry](https://sentry.io/).

## ID6\_RESTRICTED\_IPS

**Default**: none

**Required**: no

**Type**: array

**Description**:

Hook URLs are resolved and checked against these restriected IPs.

<div class="blockquote" data-props='{ "mod": "info" }'>

Partially implemented, not yet working.

</div>

## ID6\_RESTRICTED\_DOMAINS

**Default**: none

**Required**: no

**Type**: array

**Description**:

<div class="blockquote" data-props='{ "mod": "info" }'>

Partially implemented, not yet working.

</div>

## ID6\_CADDY\_DIR

**Default**: /sites

**Required**: no

**Type**: string

**Description**:

Directory where Caddy looks for sites.

## ID6\_SITES\_DIR

**Default**: /sites

**Required**: no

**Type**: string

**Description**:

Directory where id6 stores sites.

## ID6\_CADDY\_ADMIN\_API\_URL

**Default**: http://localhost:2019

**Required**: yes

**Type**: string

**Description**:

Admin API of Caddy. If Caddy runs in a standalone container, make sure to expose the admin API as it listens to `localhost` by default.

## ID6\_TMP\_DIRECTORY

**Default**: /var/folders/ff/v59bv_992tz5yq0sg7gptp300000gn/T

**Required**: no

**Type**: string

**Description**:

Where uploaded files are stored before being processed.

## ID6\_STATIC\_DIR

**Default**: ./public

**Required**: no

**Type**: string

**Description**:

Where the id6 API serves static content. This is used to server generic pages such as a 404.html page.

## ID6\_INVITE\_EXPIRATION\_TIME

**Default**: 86400000

**Required**: no

**Type**: number

**Description**:

Amount of time (in ms) before an invitation expires.

## ID6\_AXIOS\_TIMEOUT

**Default**: 10000

**Required**: no

**Type**: number

**Description**:

Timeout for HTTP calls made with Axios.

## ID6\_USER

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Username for in-memory authentication.

## ID6\_PASSWORD

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Password for in-memory authentication.

## ID6\_MAX\_ORGS

**Default**: 1

**Required**: no

**Type**: number

**Description**:

Maximum number of organizations that can be created on this id6 instance. Setting this value to `0` will disable the limit.

## ID6\_MULTER\_LIMITS

**Default**: {}

**Required**: no

**Type**: JSON object

**Description**:

A stringified JSON object with [Multer limits](https://github.com/expressjs/multer#limits). For example:

<div class="code-group">

```dotenv
id6_MULTER_LIMITS={"fileSize":150000000}
```

</div>

## ID6\_HTTPS\_AUTO

**Default**: true

**Required**: no

**Type**: boolean

**Description**:

Controls whether id6 should handle SSL on its own. Disable this when deploying id6 behind a reverse proxy.

## ID6\_GOOGLE\_RECAPTCHA\_SITE\_KEY

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Google Recaptcha V3 site key. This key can be obtained after creating a new app [here](https://www.google.com/recaptcha/admin/create).

## ID6\_GOOGLE\_RECAPTCHA\_SECRET\_KEY

**Default**: undefined

**Required**: no

**Type**: string

**Description**:

Google Recaptcha V3 secret key. This key can be obtained after creating a new app [here](https://www.google.com/recaptcha/admin/create).

## ID6\_POSTHOG\_ENABLED

**Default**: true

**Required**: no

**Type**: boolean

**Description**:

Whether PostHog should be enabled.
