---
title: 'Authorization API'
sidebar_label: 'Authorization'
---

If your favorite framework integration does not exist yet, feel free to create an integration using the following endpoints.

## Authentication

Calls to these endpoints need to be authenticated using the `Authorization` header set with the value of the [`ID6_AUTHORIZATION_SECRET`](/configuration/environment#id6_authorization_secret) environment variable.

## Sign out

**Path:** `/auth/signout`

**Method:** POST

**Payload** none

**Response:** 204

## Get user picture

**Requires authentication:** yes

**Path:** /user/:userId/picture

**Method:** GET

**Response:**

Octet stream with the profile picture of the authenticated user.
