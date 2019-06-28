import express, { Application, Request, Response, NextFunction } from 'express';
const app: express.Application = express();
const path = require('path');
const countriesRoutes = require('../dist/api/routes/countries.js');
const homepageRoutes = require('../dist/api/routes/homepage.js');

app.set('views', path.join(__dirname, '../dist/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../src/assets')));

app.use('/', homepageRoutes);
app.use('/country', countriesRoutes);

module.exports = app;
