# Catalog Service
This microservice is in charge of handling the catalog for the shop.

# Environment variables
```
SERVICE_NAME=
SERVER_PORT=
DATABASE_URI=
```

# Routes
## POST:/api/v1/catalog ```admin```
Description
```
Creates a new product in the catalog
```
### Request payload
```js
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: {
        name: String,
        images: [String],
        description: String,
        categories: [String],
        price: Number,
        countStock: Number,
    },
}
```
### Response payload
```js
{
    data: {
        _id: Number
        name: String,
        images: [String],
        description: String,
        categories: [String],
        price: Number,
        countStock: Number,
        createdAt: Date,
        updatedAt: Date,
    },
}
```
## GET:/api/v1/catalog ```public```
### Description
```
Gets all the products in the catalog from the database
```
### Response payload
```js
{
    data: [
        {
            _id: Number
            name: String,
            images: [String],
            description: String,
            categories: [String],
            price: Number,
            countStock: Number,
            createdAt: Date,
            updatedAt: Date,
        },...
    ],
}
```


## GET:/api/v1/catalog/:id ```public```
### Description
```
Gets the product in the catalog using the id from the database
```
### Response Payload
```js
{
    data: {
        _id: Number
        name: String,
        images: [String],
        description: String,
        categories: [String],
        price: Number,
        countStock: Number,
        createdAt: Date,
        updatedAt: Date,
    },
}
```

## PUT:/api/v1/catalog/:id ```admin```
### Description
```
Updates the product in the catalog using the id
```
### Request payload
```js
{
    headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: {
        name: String,
        images: [String],
        description: String,
        categories: [String],
        price: Number,
        countStock: Number,
    },
}
```
### Response payload
```js
{
    data: {
        _id: Number
        name: String,
        images: [String],
        description: String,
        categories: [String],
        price: Number,
        countStock: Number,
        createdAt: Date,
        updatedAt: Date,
    },
}
```

## DELETE:/api/v1/catalog/:id ```admin```
Description
```
Deletes the product in the catalog using the id 
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
    data: {
        _id: Number
        name: String,
        images: [String],
        description: String,
        categories: [String],
        price: Number,
        countStock: Number,
        createdAt: Date,
        updatedAt: Date,
    },
}
```
# Testing the service
```diff
These endpoints will be removed in the future
- WARNING: These tests are not safe. It will clear out the database
```

## POST:/api/v1/catalog/seed ```admin```
```
Populates the mongodb database with sample data
```
## DELETE:/api/v1/catalog/seed ```admin```
```
Depopulates the database with the sample data
```





