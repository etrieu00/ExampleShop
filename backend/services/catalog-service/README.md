# Catalog Service
This microservice is in charge of handling the catalog for the shop.

# Routes

## GET:/api/v1/catalog/
```
Gets all the products in the catalog
```
## POST:/api/v1/catalog/
```
Creates a new product in the catalog
```
## GET:/api/v1/catalog/:id
```
Gets the product in the catalog using the id
```
## PUT:/api/v1/catalog/:id
```
Updates the product in the catalog using the id
```
## DELETE:/api/v1/catalog/:id
```
Deletes the product in the catalog using the id 
```

# Testing the service
```
WARNING: These tests are not safe. It will clear out the database
```

## POST:/api/v1/catalog/seed
```
Populates the mongodb database with sample data
```
## DELETE:/api/v1/catalog/seed
```
Depopulates the database with the sample data
```





