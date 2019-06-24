import express, {Request, Response} from 'express';

const router = express.Router();
const countries = require('../data/countries.json');

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(countries);
});

router.get('/:countryParam', (req: Request, res: Response) => {
    let countryParam: string = req.params.countryParam;

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
