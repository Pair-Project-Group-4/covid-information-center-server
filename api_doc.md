# COVID App Server
COVID App is an application to inform you about COVID-19 progress around the world. It performs standard CRUD actions based on RESTful concept.

This app has : 
* RESTful endpoint for COVID App's CRUD operation



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

if email exist
```
{
    "errors": [
        "Email already exist"
    ]
}
```
if email field empty
```
{
    "errors": [
        "email must not empty",
        "format must be @email.com"
    ]
}
```

if password field empty 
```
{
    "errors": [
        "password must not empty"
    ]
}
```

if name field empty 
```
{
    "errors": [
        "name must not be empty"
    ]
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
    "id" : 1,
    "email" : "Udin@mail.com"
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

### Get /news
> get news of Covid

_Response (200 - OK)_

```
{
    "status": "ok",
    "totalResults": 16684,
    "articles": [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Orlando’s Super Nintendo World reportedly won't open until 2025",
            "description": "Nintendo fans will have to wait longer to visit a Super Nintendo World in the US. After a pandemic-related construction delay, Universal’s Epic Universe park in Orlando, which will include the Nintendo-themed attraction, will miss its originally planned 2023 …",
            "url": "https://www.engadget.com/orlando-epic-universe-super-nintendo-world-delay-171501871.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/6T2moqo3DcN37MbE5NTrJQ--~B/aD0xMDAwO3c9MTYwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/cd29d2e0-7d09-11eb-bdfd-6953bbc0a202.cf.jpg",
            "publishedAt": "2021-03-04T17:15:01Z",
            "content": "Nintendo fans will have to wait longer to visit a Super Nintendo World in the US. After a pandemic-related construction delay, Universals Epic Universe park in Orlando, which will include the Nintend… [+1295 chars]"
        },....
} 
```

_Response (500 - Internal Server Error)_


### Get /data

> get data covid-19 from countries
_Response (200 - OK)_
```
[
    {
        "updated": 1614922120275,
        "country": "Afghanistan",
        "countryInfo": {
            "_id": 4,
            "iso2": "AF",
            "iso3": "AFG",
            "lat": 33,
            "long": 65,
            "flag": "https://disease.sh/assets/img/flags/af.png"
        },
        "cases": 55933,
        "todayCases": 0,
        "deaths": 2449,
        "todayDeaths": 0,
        "recovered": 49362,
        "todayRecovered": 0,
        "active": 4122,
        "critical": 1073,
        "casesPerOneMillion": 1416,
        "deathsPerOneMillion": 62,
        "tests": 305242,
        "testsPerOneMillion": 7725,
        "population": 39513703,
        "continent": "Asia",
        "oneCasePerPeople": 706,
        "oneDeathPerPeople": 16135,
        "oneTestPerPeople": 129,
        "activePerOneMillion": 104.32,
        "recoveredPerOneMillion": 1249.24,
        "criticalPerOneMillion": 27.16
    },...
]
```

_Response (500 - Internal Server Error)_
