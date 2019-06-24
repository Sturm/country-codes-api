const express = require('express');
const router = express.Router();
const countries = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(countries);
});

router.get('/:countryParam', (req, res) => {
    let countryParam = req.params.countryParam;

    for (let i = 0; i < countries.length; i++) {
        if (countries[i]['name'] == countryParam) {
            res.status(200).json(countries[i]);
        }
        if (countries[i]['prefix'] == countryParam) {
            res.status(200).json(countries[i]);
        }
        if (countries[i]['prefix'] == "+" + countryParam) {
            res.status(200).json(countries[i]);
        }
        if (countries[i]['alpha-2'] == countryParam) {
            res.status(200).json(countries[i]);
        }
        if (countries[i]['alpha-3'] == countryParam) {
            res.status(200).json(countries[i]);
        }
        if (countries[i]['code'] == countryParam) {
            res.status(200).json(countries[i]);
        }
    }
});


module.exports = router;
