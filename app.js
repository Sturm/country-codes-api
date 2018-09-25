const express = require('express');
const app = express();
const countriesRoutes = require('./api/routes/countries');

app.use('/countries', countriesRoutes);

module.exports = app;
