---
title: 'Frequently Asked Questions (FAQ)'
sidebar_label: 'FAQ'
---

## What type tokens do you use for auth ?

We use [JWT](https://jwt.io/) tokens.

## Do you have session tokens ?

No. Our JWT tokens can be revoked just like session tokens by calling the authentication API, or via the login page once the user is signed in.

## How do you sign your JWT tokens ?

We use HS256 symmetric hashing. While using RSA256 would make it possible to decentralize token verification, your backends would still have to call id6 for verifying that the tokens haven't been revoked. In addition, configuring HSA256 is quick and simple.

## Why do your tokens have a long default expiration time ?

While shorter expiration times prevent attackers from using stolen tokens, it doesn't prevent tokens from being stolen. The complexity/security tradeoff isn't worth it for this type of token.

## Why do you have two different ports for authorization and authentication ?

Because the **authentication** endpoints should always be publicly available, while you may want the **authorization** endpoints to be exposed in a private network only.
