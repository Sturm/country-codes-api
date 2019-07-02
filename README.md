# Country Codes API
API containing information about countries. Mostly focused on call prefixes.

## Why this API?
* This API is using ISO-3166-1 standard so information will be standarized and commonly accepted.
* Country list is ordered by country prefix codes, so the list is perfect for HTML `<select>` tag.

## How to build?
```
# Install:
git clone https://github.com/Sturmpl/country-codes-api.git
cd country-codes-api
npm install

# TypeScript installation:
npm install -g typescript

# Build files:
tsc

# Run:
node dist/server.js
```

## How to use:
List every country.
```
GET /country/
```
List information about specific country.
```
GET /country/:countryName
GET /country/:countryCode
GET /country/:countryAlpha2
GET /country/:countryAlpha3
```
Example input:
```
GET /country/Germany
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

## TODO
* Capitals
* Advanced sorting
* Include already prepared inputs

## Made using:
* [node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com//)

## Demo:
Coming soon...

## Author:

* **Hubert Rządziński** - [GitHub](https://github.com/Sturmpl) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details