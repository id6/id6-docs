---
title: 'Quick start'
---

## Start id6

:::tip

A working example with React, Node and Docker Compose is available [here](https://github.com/id6/id6-express-react-example).

:::

Create the folloing `docker-compose.yml` then run `docker-compose up -d`:

```yml
version: "3"
services:
  id6:
    image: id6io/id6
    ports:
      # authentication (login page + user api)
      - 8000:3000
      # authorization (verify tokens from your backends)
      - 3030:3030
    environment:
      # where id6 authentication endpoint is served
      ID6_URL: http://localhost:8000
      # where your users should be redirected after login
      ID6_REDIRECT_URL: http://localhost:4000
      # secret used to sign/verify jwt tokens
      ID6_JWT_SECRET: changeMe
      # secret used to access the authorization API
      ID6_AUTHORIZATION_SECRET: changeMe
      # email config for local auth (see https://docs.id6.io/authentication/local)
      ID6_MAIL_FROM: noreply@app.com
      ID6_MAIL_HOST: mailhog
      ID6_MAIL_PORT: 1025

  mailhog:
    image: mailhog/mailhog
    restart: unless-stopped
    ports:
      - 8025:8025
      - 1025:1025
```

## Update your frontend

Install `@id/react`:

```bash
npm install --save @id6/react
```

Declare the id6 provider in your app:

```tsx
import React  from 'react'
import { AuthProvider } from '@id6/react'

function App() {
  return (
    <AuthProvider url="http://localhost:8000">
      <Home/>
    </AuthProvider>
  );
}
```

Create a home component:

```tsx
import React from 'react'
import { useAuth } from '@id6/react'

function Home() {
  const { loading, error, user, signOut } = useAuth();

  const logout = () => {
    signOut().catch(console.error);
  };

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error: {error.message}</p>
  ) : (
    <div>
      {user ? (
        <p>
          Signed in as {user.name}
          <button type="button" onClick={logout}>Sign out</button>
        </p>
      ) : (
        <a href="http://localhost:8000">Sign in</a>
      )}
    </div>
  );
}
```

## Update your backend

Install id6 express integration and dependencies:

```bash
npm i @id6/express cookie-parser
```

Use id6 in your backend to authorize requests and protect routes:

```ts
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { authenticate, isAuthenticated } = require('@id6/express');

const app = express();

app.use(cors({
  // 1. allow browsers to send the auth cookie
  credentials: true,
}));
// 2. make sure express parses cookies
app.use(cookieParser());
// 3. add the auth middleware
app.use(authenticate({
  url: 'https://authorize.company.com',
  secret: 'changeMe',
}));

app.get('/hello', (req, res) => {
  const user = req.user; // set by id6
  res.json(user ? 'Authenticated' : 'Anonymous');
});
app.get('/private', isAuthenticated, (req, res) => {
  res.json('This is top secret !');
});

app.listen(8000, () => console.log(`Listening on port 8000`));
```
