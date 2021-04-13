---
title: 'Frequently Asked Questions (FAQ)'
sidebar_label: 'FAQ'
---

## Is id6 open source ?

Yes, [according to](https://www.oxfordlearnersdictionaries.com/definition/english/open-source) the Oxford Dictionary of English. But your license specifically says it is **not** open source ? The words "open source" in our license refer to the definition given by the [Open Source Initiative](https://opensource.org/). Outside our license, when we use the words "open source", we refer to the definition given by the Oxford Dictionary of English.

## Can I use id6 for free ?

Yes, given that you do not run a competing **authentication an authorization service** with it. More info in our [license](https://github.com/id6/id6/blob/latest/LICENSE).

## What type tokens do you use for auth ?

We use JWT tokens.

## Do you have session tokens ?

No. Our JWT tokens can be revoked just like session tokens by calling the authentication API, or via the login page once the user is signed in.

## How do you sign your JWT tokens ?

We use HS256 symmetric hashing. While using RSA256 would make it possible to decentralize token verification, your backends would still have to call id6 for verifying that the tokens haven't been revoked. In addition, configuring HSA256 is simple and quick.

## Why do your tokens have a long default expiration time ?

While shorter expiration times prevent attackers from using stolen tokens, it doesn't prevent tokens from being stolen. The tradeoff complexity/security isn't worth it for this type of token.

## Why do you have two different ports for authorization and authentication ?

Because the **authentication** endpoints should always be publicly available, while you may want the **authorization** endpoints to be exposed in a private network.
