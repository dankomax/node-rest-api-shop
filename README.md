# node-rest-api-shop

Base URL

```
https://node-rest-api-shop.herokuapp.com
```

*(secure)* - authentication required

For secure requests add auth header

```
"Authorization": "Bearer ${your token}"
```

## Login

Method:
```
POST
```
URL:
```
/user/login
```
Body
```json
{
 "email": "string",
 "password": "string"
}
```
Request example
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/user/login', {
  method: 'POST',
  body:
    JSON.stringify({
      email: 'blablabla@gmail.com',
      password: 'blablabla',
    }),
  headers: {
    'Content-Type': 'application/json'
  }
})
```
Response
```json
{
 "id": "***id***",
 "token": "***token***"
}
```


## Register

Method:
```
POST
```
URL:
```
/user/signup
```
Body
``` json
{
 "email": "string",
 "password": "string"
}
```

## Delete user

Method:
```
DELETE
```
URL:
```
/user/${userid}
```
Request example:
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/user/${userid}', {
  method: 'DELETE',
  headers: {
    'Authorization': '****token***'
  }
})
```


## PRODUCTS

### Create 

*(secure)*

Method:
```
POST
```
URL:
```
/products
```
Body
``` form-data
{
 "name": "string",
 "price": "number",
 "produtImage": "string"
}
```


Request example:
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/products', {
  method: 'POST',
  body:
    JSON.stringify({
      "name": "New book",
      "price": "11.99",
      "produtImage": "cover.jpg"
    }),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ****token***'
  }
})
```


#### Read All

Fetch all your products

*(secure)*

Method:
```
GET
```
URL:
```
/products
```


#### Get single product by id

Method:
```
GET
```
URL:
```
/products/${id}
```


#### Update

*(secure)*

Method:
```
PATCH
```
URL:
```
/products/${id}
```
Body
``` json
{
 "name": "string",
 "price": "number"
}
```
name, price - optional

Request example:
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/products/${productId}', {
  method: 'PATCH',
  body:
    JSON.stringify({
      completed: true,
    }),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer****token***'
  }
})
```


#### Delete

*(secure)*

Method:
```
DELETE
```
URL:
```
/products/${id}
```

Request example:
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/products/LNlwqelfn1324w2341', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '****token***'
  }
})
```



## ORDERS

### Create 

*(secure)*

Method:
```
POST
```
URL:
```
/orders
```
Body
``` json
{
  "productId": "5e2863948796362c20569c4a",
  "quantity": 2
}
```


Request example:
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/orders', {
  method: 'POST',
  body:
    JSON.stringify({
      "productId": "5e2863948796362c20569c4a",
      "quantity": 2
    }),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ****token***'
  }
})
```


#### Read All

Fetch all your products

*(secure)*

Method:
```
GET
```
URL:
```
/orders
```


#### Get single product by id

Method:
```
GET
```
URL:
```
/orders/${id}
```


#### Delete

*(secure)*

Method:
```
DELETE
```
URL:
```
/orders/${id}
```

Request example:
```javascript
fetch('https://node-rest-api-shop.herokuapp.com/orders/5e2cb6ade6efa00004dfb9b4', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ****token***'
  }
})
```