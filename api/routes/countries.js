const express = require('express');
const router = express.Router();
const countries = require('../data/countries.json');

router.get('/', (req, res, next) => {
    res.status(200).json(countries);
});

router.get('/:countryName', (req, res, next) => {
    let countryName = req.params.countryName;

    for (var i = 0; i < countries.length; i++) {
        countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);

        if (countries[i]['name'] == countryName) { // In case of providing country name
            res.status(200).json(countries[i]);
        } else if (countries[i]['alpha-3'] == countryName) { // In case of providing alpha3 code
            res.status(200).json(countries[i]);
        } else if (countries[i]['code'] == countryName) { // In case of providing ISO country code
            res.status(200).json(countries[i]);
        } else if (countries[i]['alpha-2'] == countryName) { // In case of providing alpha2 code
            res.status(200).json(countries[i]);
        }
    }
});

module.exports = router;
