# Country Codes API
API containing information about countries. This project is still in progress so be prepared for many issues.
**JSON with country codes is incomplete.**
## Why this API?
* This API is using ISO-3166-1 standard so information will be standarized and commonly accepted.
* Country list is ordered by country prefix codes, so the list is perfect for html select tags.

## TODO
* Alpha-2 & 3 codes
* Capitals
* Advanced sorting
* Include already prepared inputs

## Made using:
* [node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com//)

## Demo:
Coming soon...

## How to use:
List every country.
```
GET /countries/
```
List information about specific country.
```
GET /countries/:countryName
GET /countries/:countryCode
GET /countries/:countryAlpha2
GET /countries/:countryAlpha3
```
Example input:
```
GET /countries/Germany
```
Output:
```
{
"name": "Germany",
"prefix": "+49",
"alpha-2": "DE",
"alpha-3": "DEU",
"code": "276"
}
```

## Author:

* **Hubert Rządziński** - [GitHub](https://github.com/Sturmpl) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details