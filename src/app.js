var express = require('express');
var app = express();
var countriesRoutes = require('../api/routes/countries');
app.use('/countries', countriesRoutes);
module.exports = app;
