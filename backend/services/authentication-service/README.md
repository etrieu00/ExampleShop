# Authentication Services
Simple auth service for the user to log in an recieve an access token.

# Environment variables
```
SERVICE_NAME=
SERVER_PORT=
DATABASE_URI=
```

# Routes
## POST:/api/v1/users ```public```
### Description
```
Creates a new user and returns an access token
```
### Request payload

```js
{
    body: {
        email: String,
        password: String,
    },
}
```
### Response payload
```js
{
    data: {
        token: String,
    },
}
```

## POST:/api/v1/users/login  ```public```
### Description
```
Authorize the user and returns a token
```
### Request payload
```js
{
    body: {
        email: String,
        password: String,
    },
}
```
### Response payload
```js
{
    data: {
        token: String,
    },
}
```

## PUT:/api/v1/users ```public```
### Description
```
Updates the user's password or email in the database
```
### Request payload
```js
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: {
        email: String,
        password: String,
    },
}
```
### Response payload
```Javascript
{
    data: {
        token: String,
    },
}
```

## DELETE:/api/va/users/:id  ```admin```
Description
```
Deletes the user from the database
```
### Request payload
```Javascript
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
}
```