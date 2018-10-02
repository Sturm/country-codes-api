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
        if (countries[i]['name'] == countryName) {
            res.status(200).json(countries[i]);
        }
        countryName = countryName.toUpperCase();
        if (countryName.length == 3) {
            if (countries[i]['alpha-3'] == countryName) {
                res.status(200).json(countries[i]);
            }
        }
        if (countries[i]['code'] == countryName) {
            res.status(200).json(countries[i]);
        }
        if (countries[i]['alpha-2'] == countryName) {
            res.status(200).json(countries[i]);
        }
    }
});


module.exports = router;
