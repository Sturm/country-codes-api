import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();
const countriesRoutes = require('../dist/api/routes/countries.js');

app.use('/countries', countriesRoutes);
module.exports = app;
