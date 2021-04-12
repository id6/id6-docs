---
title: 'How it works'
slug: /
---

Id6 is meant to be run as an **authentication** and **authorization** service alongside your apps. In short:
1. your frontend redirects your users to id6 for signing, and id6 redirects them back to your frontends after login
1. your backend authorizes users by calling id6 directly

## Authentication flow

1. A user clicks the **login** button in your app and is redirected to the login page in id6.
1. The user logs in using one the authentication methods enabled in your id6 server.
1. After login, id6 redirects the user back to your app with an HTTP cookie containing the user's JWT token
1. Your app makes an HTTP call to the id6 server to fetch user information, sending along the auth cookie

## Authorization flow

1. Your app makes an HTTP call (`credentials: true` to send HTTP cookies) to your backend
1. Your backend extracts the id6 auth token and sends it to the id6 authorization endpoint
1. id6 verifes the token and sends you back the user info

## Integrations

- [ExpressJS](https://github.com/id6/id6-express)
- [React](https://github.com/id6/id6-react)

## Authentication methods

- [Email](/authentication/local)
- [In-memory](/authentication/in-memory)
- [Gitea](/authentication/gitea)
- [Gitlab](/authentication/gitlab)
- [Github](/authentication/github)
- [Google](/authentication/google)
