//Dependencias utilizadas
var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var consign = require('consign');
var morgan = require('morgan')

const app = express();
app.use(morgan('tiny'));

consign()
    .include('api/routes')
    .into(app);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet());

module.exports = app;