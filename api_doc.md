# COVID App Server
COVID App is an application to inform you about COVID-19 progress around the world. It performs standard CRUD actions based on RESTful concept.

This app has : 
* RESTful endpoint for COVID App's CRUD operation

## POST /register
## POST /login


* JSON formatted response

## Global Responses

> These responses are applied globally on all endpoints

_Response (400 - Bad Request)_
```
{
  "message": "Invalid email or password"
}
```

_Response (500 - Server error)_
```
{
  "message": "Internal server error"
}
```

## RESTful endpoints

### POST /register

> Registering new account

_Request Body_
```
{
    {
      "name" : "udin"  
      "email" : "Udin@mail.com",
      "password" : "asdf1234",
    },
}
```

_Response (201 - Created)_
```
[
  {
    "id": 1,
    "name" : "udin"  
    "email" : "Udin@mail.com",
    "password" : "asdf1234",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
]
```

_Response (400 - Bad Request)_
```
{
  "message": "Email already taken"
}
```

### POST /login

> Login into existing account

_Request Body_
```
{
    {
     "email" : "Udin@mail.com",
     "password" : "asdf1234",
    },
}
```

_Response (200 - OK)_
```
[
  {
    "id": 1,
    "email" : "asdf@mail.com",
    "token" : "7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ"
  },
]
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid email or password"
}
```