const express = require('express');
const router = express.Router();
const countries = require('../data/countries.json');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /countries'
    });
});

router.get('/:countryName', (req, res, next) => {
    let countryName = req.params.countryName;
    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
    for (var i = 0; i < countries.length; i++) {
        if (countries[i]['name'] == countryName) {
            res.status(200).json(countries[i]);
        }
    }
});


module.exports = router;
