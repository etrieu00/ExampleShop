# Shopping Service
This microservice is in charge of handling the catalog for the shop.

# Environment variables
```
SERVICE_NAME=
SERVER_PORT=
DATABASE_URI=
```
    
# Routes
## GET:/api/v1/shopping/cart ```private```
### Description
```
Gets the user's cart from the database
```
### Request payload
```js
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
}
```
### Response payload
```js
{
    data:[
        {
            name: String,
            productId: String,
            productPrice: Number,
            productCount: Number,
            createdAt: Date,
            updatedAt: Date,
        },...
    ],
}
```

## PUT:/api/v1/shopping/cart ```private```
### Description
```
Add product to the user's cart in the database
```
### Request payload
```js
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: {
        name: String,
        productId: String,
        productPrice: Number,
        productCount: Number,
        createdAt: Date,
        updatedAt: Date,
    },
}
```
### Response payload
```js
{
    data:[
        {
            name: String,
            productId: String,
            productPrice: Number,
            productCount: Number,
            createdAt: Date,
            updatedAt: Date,
        },...
    ],
}
```

## DELETE:/api/v1/shopping/cart ```private```
### Description
```
Empty the user's cart in the database
```
### Request payload
```js
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
}
```