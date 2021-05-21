---
title: 'Quick start'
---

## Start id6

Run `docker-compose up -d` with the following `docker-compose.yml`:

```yml
version: "3"
services:
  id6:
    image: id6io/id6
    ports:
      # authentication (login page + user api)
      - 3000:3000
      # authorization (verify tokens from your backends)
      - 3030:3030 
    environment:
      ID6_URL: http://localhost:3000
      # where your users should be redirected after login
      ID6_REDIRECT_URL: http://localhost:4000
      # secret used to sign/verify jwt tokens
      ID6_JWT_SECRET: changeMe
      # secret used to access the authorization API
      ID6_AUTHORIZATION_SECRET: changeMe
      # email config for local auth
      ID6_MAIL_FROM: noreply@app.com
      ID6_MAIL_USERNAME: user
      ID6_MAIL_PASSWORD: password

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
    <AuthProvider url="http://localhost:3000">
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
        <a href="http://localhost:3000">Sign in</a>
      )}
    </div>
  );
}
```

## Update your backend

Install id6 express integration and dependencies:

```bash
npm i @id6/express cookie-parser dotenv
```

Create a `.env` file:

```dotenv
ID6_AUTHORIZATION_URL=http://localhost:3030
ID6_AUTHORIZATION_SECRET=changeMe
```

Use id6 in your backend to authorize requests and protect routes:

```ts
const dotenv = require('dotenv/config'); // loads .env into process.env
const express = require('express');
const { authenticate, isAuthenticated } = require('id6-express');

const app = express();

app.use(cookieParser());
app.use(authenticate);

app.get('/hello', (req, res) => {
  const user = req.user; // set by id6
  res.json(user ? 'Authenticated' : 'Anonymous');
});
app.get('/private', isAuthenticated, (req, res) => {
  const user = req.user; // set by id6
  res.json(user ? 'Authenticated' : 'Anonymous');
});

app.listen(8000, () => console.log(`Listening on port 8000`));
```
