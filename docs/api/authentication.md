---
title: 'Authentication API'
sidebar_label: 'Authentication'
---

If your favorite framework integration does not exist yet, feel free to create an integration using the following endpoints.

## Authentication

Calls to these endpoints need to be authenticated using the HTTP `auth` cookie defined by id6 when users sign in. Make sure that your HTTP calls set `credentials: true` when calling.

## Sign out

**Path:** `/auth/signout`

**Method:** POST

**Payload** none

**Response:** 204

## Get user info

**Path:** /user

**Method:** GET

**Response:**

When the user is authenticated, example response:

```
{
  "id": 1,
  "authType": "local",
  "name": "Geoffroy Empain",
  "email": "test@test.com",
  "bio": "I'm a software engineer trying to make your life more simple.",
  "picture": "/api/user/picture?v=6e5ebe79d019a6f143715951c556ee48",
  "language": null
}
```

When the user is not authenticated:

```
null
```

## Update profile 

**Requires authentication:** yes

**Path:** /user/profile

**Method:** POST

**Body:**

```
{
  "name": "Geoffroy Empain",
  "email": "test@test.com",
  "bio": "I'm a software engineer trying to make your life more simple.",
  "language": "en"
}
```

**Response:** 204

## Update picture

**Requires authentication:** yes

**Path:** /user/picture

**Method:** POST

**Headers:**

```
Content-Type: multipart/form-data
```

**Body:**

```
picture=<picture form data>
```

**Response:** POST

```
{
  "picture": "https://...."
}
```

## Get picture

The profile picture is only exposed to its owner. If you want other users to be able to view the picture of a user, you will have to expose it in your backend. For this, we provide [an endpoint](/api/authorization#get-user-picture) for fetching the picture of a specific user in the authorization API. 

**Requires authentication:** yes

**Path:** /user/picture

**Method:** GET

**Response:**

Octet stream with the profile picture of the authenticated user.

## Invalidate tokens 

**Requires authentication:** yes

**Path:** /user/disconnect

**Method:** GET

**Response:** 204

After this call, all authentication token (including the one used for this call) will be revoked.
