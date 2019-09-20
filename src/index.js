'use strict'
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const port = process.env.port || 3000;

mongoose.connect('mongodb://appuser:appuser01@ds259207.mlab.com:59207/uploadmanager', {
  useNewUrlParser: true
});

// Enable node receive json data.
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(port, (a) => {
    console.log('Servidor está no ar');
});
