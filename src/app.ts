import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();
const countriesRoutes = require('../api/routes/countries');

app.use('/countries', countriesRoutes);
module.exports = app;
