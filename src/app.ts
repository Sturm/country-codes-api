import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();
const countriesRoutes = require('../dist/api/routes/countries.js');
const homepageRoutes = require('../dist/api/routes/homepage.js');

app.use('/', homepageRoutes);
app.use('/country', countriesRoutes);

module.exports = app;
